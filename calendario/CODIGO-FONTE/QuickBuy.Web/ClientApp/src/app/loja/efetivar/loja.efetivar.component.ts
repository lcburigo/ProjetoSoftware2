import { Component, OnInit } from '@angular/core';
import { Produto } from '../../modelo/produto';
import { LojaCarrrinhoCompras } from '../carrinho-compras/loja.carrinho.compras';

@Component({
    selector: "loja-efetivar",
    templateUrl: "./loja.efetivar.component.html",
    styleUrls: ["./loja.efetivar.component.css"]
})

export class LojaEfetivarComponent implements OnInit {
    public carrinhoCompras: LojaCarrrinhoCompras;
    public produtos: Produto[];

    ngOnInit(): void {
        this.carrinhoCompras = new LojaCarrrinhoCompras();
        this.produtos = this.carrinhoCompras.obterProdutos();
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
    }

    public remover(produto: Produto) {
        debugger;
        this.carrinhoCompras.removerProduto(produto);
        this.produtos = this.carrinhoCompras.obterProdutos();
    }

}
