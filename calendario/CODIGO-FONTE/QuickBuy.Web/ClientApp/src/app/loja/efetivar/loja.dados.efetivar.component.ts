import { Component, OnInit } from '@angular/core';
import { Produto } from '../../modelo/produto';
import { LojaCarrrinhoCompras } from '../carrinho-compras/loja.carrinho.compras';
import { Pedido } from '../../modelo/pedido';
import { UsuarioServico } from '../../servicos/usuario/usuario.servico';
import { ItemPedido } from '../../modelo/itemPedido';
import { PedidoServico } from '../../servicos/pedido/pedido.servico';
import { Router } from '@angular/router';
import { Entrega } from '../../modelo/entrega';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: "dados-compra-entrega",
    templateUrl: "./loja.dados.efetivar.component.html",
    styleUrls: ["./loja.dados.efetivar.component.css"]
})


export class LojaDadosEfetivarComponent implements OnInit {
    public carrinhoCompras: LojaCarrrinhoCompras;
    public produtos: Produto[];
    public pedido: Pedido;
    public entrega: Entrega;
    public total: number;
    public mensagem: string;

    ngOnInit(): void {
        this.pedido = new Pedido();
        this.entrega = new Entrega();
        this.carrinhoCompras = new LojaCarrrinhoCompras();
        this.produtos = this.carrinhoCompras.obterProdutos();
        this.atualizarTotal();
    }

    constructor(private usuarioServico: UsuarioServico, private pedidoServico: PedidoServico, private router: Router, private http: HttpClient) {
        
    }

    public atualizarPreco(produto: Produto, quantidade: number) {

        if (!produto.precoOriginal) {
            produto.precoOriginal = produto.preco;
        }
        if (quantidade <= 0) {
            quantidade = 1;
            produto.quantidade = quantidade;
        }
        produto.preco = produto.precoOriginal * quantidade;
        this.carrinhoCompras.atualizar(this.produtos);
        this.atualizarTotal();
    }

    public remover(produto: Produto) {
        this.carrinhoCompras.removerProduto(produto);
        this.produtos = this.carrinhoCompras.obterProdutos();
        this.atualizarTotal();
    }

    public atualizarTotal() {
        this.total = this.produtos.reduce((acc, produto) => acc + produto.preco, 0);
    }

    public finalizarCompra() {
        this.mensagem = "";
        if (this.validaCampos()) {
            this.pedidoServico.efetivarCompra(this.criarPedido())
                .subscribe(
                    pedidoId => {
                        console.log(pedidoId)
                        sessionStorage.setItem("pedidoId", pedidoId.toString())
                        this.produtos = [];
                        this.carrinhoCompras.limparCarrinhoCompras();
                        //redicionar para outra pagina de sucesso
                        this.router.navigate(["/compra-realizada-sucesso"]);
                    },
                    e => {
                        console.log(e.error);
                    });
        }
    }

    public pesquisacep(valor) {
        this.mensagem = "";
        if (valor != null) {
            //Nova variável "cep" somente com dígitos.
            var cep = valor.replace(/\D/g, '');
            //Verifica se campo cep possui valor informado.
            if (cep !== "") {
                //Expressão regular para validar o CEP.
                var validacep = /^[0-9]{8}$/;

                //Valida o formato do CEP.
                if (validacep.test(cep)) {
                    this.http
                        .get(`https://viacep.com.br/ws/${cep}/json/`)
                        .subscribe(data => this.converterRespostaParaCep(data));

                }
                else {
                    this.pedido.cep = "";
                    this.mensagem = "Cep inválido"
                }
            }
            else {
                this.pedido.cep = "";
                this.mensagem = "Cep inválido"
            }
        }
    }

    private converterRespostaParaCep(cepNaResposta): boolean {
        
        if (cepNaResposta.erro) {
            this.pedido.cep = "";
            return false;
        }

        this.entrega.cep = cepNaResposta.cep;
        this.entrega.logradouro = cepNaResposta.logradouro;
        this.entrega.complemento = cepNaResposta.complemento;
        this.entrega.bairro = cepNaResposta.bairro;
        this.entrega.localidade = cepNaResposta.localidade;
        this.entrega.uf = cepNaResposta.uf;
        return true;
    }



    public criarPedido(): Pedido {
        let pedido = new Pedido();
        pedido.usuarioId = this.usuarioServico.usuario.id;
        pedido.cep = this.entrega.bairro;
        pedido.cidade = this.entrega.localidade;
        pedido.dataPedido = new Date();
        pedido.estado = this.entrega.uf;
        pedido.dataPrevisaoEntrega = new Date();
        pedido.formaPagamentoId = 1;
        pedido.numeroEndereco = this.entrega.numeroEndereco;
        pedido.enderecoCompleto = this.entrega.logradouro;
        this.produtos = this.carrinhoCompras.obterProdutos();

        for (let produto of this.produtos) {
            let itemPedido = new ItemPedido();
            itemPedido.produtoId = produto.id;

            if (!produto.quantidade) {
                produto.quantidade = 1;
                itemPedido.quantidade = produto.quantidade;
            }
            else {
                itemPedido.quantidade = produto.quantidade;
            }
            itemPedido.preco = produto.preco;
            itemPedido.nomeProduto = produto.nome
            pedido.itensPedido.push(itemPedido);
        }

        return pedido;
    }

    public validaCampos(): boolean {
        var cep = this.entrega.cep.replace("-", "");
        if (cep != this.pedido.cep) {
            this.mensagem = "Cep não corresponde ao endereço"
            return false;
        }

        if (this.entrega.numeroEndereco == null) {
            this.mensagem = "Número inválido";
            return false;
        }

        return true;
    }

}
