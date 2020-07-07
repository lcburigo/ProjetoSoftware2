import { Component, OnInit } from "@angular/core"
import { ProdutoServico } from "../../servicos/produto/produto.servico";
import { Produto } from "../../modelo/produto";
import { Router } from "@angular/router";

@Component({
    selector: "app-loja",
    templateUrl: "./loja.pesquisa.component.html",
    styleUrls: ["./loja.pesquisa.component.css"]
})

export class LojaPesquisaComponent implements OnInit {
    public produtos: Produto[];
    public indicePaginas;

    ngOnInit(): void {

    }

    constructor(private produtoServico: ProdutoServico, private router: Router) {
        this.numeroDePaginas();
        this.paginacao(0);

    }

    public abrirProduto(produto: Produto) {
        sessionStorage.setItem('produtoDetalhe', JSON.stringify(produto));
        this.router.navigate(['/loja-produto']);

    }
    public numeroDePaginas() {
        this.produtoServico.obterNumeroElementos()
            .subscribe(
                total => {
                    this.indicePaginas = new Array(total); 
                },
                e => {
                    console.log(e.error);
                });
    }

    public paginacao(pagAtual: number) {
        this.produtoServico.obterProdutoPaginacao(pagAtual)
            .subscribe(
                produtos => {
                    this.produtos = produtos
                },
                e => {
                    console.log(e.error);
                });
    }

}
