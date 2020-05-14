import { Component, OnInit } from '@angular/core';
import { Produto } from '../../modelo/produto';
import { LojaCarrrinhoCompras } from '../carrinho-compras/loja.carrinho.compras';
import { Pedido } from '../../modelo/pedido';
import { UsuarioServico } from '../../servicos/usuario/usuario.servico';
import { ItemPedido } from '../../modelo/itemPedido';
import { PedidoServico } from '../../servicos/pedido/pedido.servico';
import { Router } from '@angular/router';

@Component({
    selector: "loja-efetivar",
    templateUrl: "./loja.efetivar.component.html",
    styleUrls: ["./loja.efetivar.component.css"]
})

export class LojaEfetivarComponent implements OnInit {
    public carrinhoCompras: LojaCarrrinhoCompras;
    public produtos: Produto[];
    public total: number;

    ngOnInit(): void {
        this.carrinhoCompras = new LojaCarrrinhoCompras();
        this.produtos = this.carrinhoCompras.obterProdutos();
        this.atualizarTotal();
    }

    constructor(private usuarioServico: UsuarioServico, private pedidoServico: PedidoServico, private router: Router) {

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

    public efetivarCompra() {
        this.router.navigate(["/dados-compra-entrega"]);
    }
}
