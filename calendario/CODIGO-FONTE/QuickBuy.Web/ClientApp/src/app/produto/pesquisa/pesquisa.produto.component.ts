import { Component, OnInit } from "@angular/core";
import { Produto } from "../../modelo/produto";
import { ProdutoServico } from "../../servicos/produto/produto.servico";
import { Router } from "@angular/router";

@Component({
    selector: "pesquisa-produto",
    templateUrl: "./pesquisa.produto.component.html",
    styleUrls: ["./pesquisa.produto.component.css"]
})

export class PesquisaProdutoComponet implements OnInit {

    public produtos: Produto[];
    public indicePaginas;

    ngOnInit(): void {
        
    }

    constructor(private produtoServico: ProdutoServico, private router: Router) {
        this.numeroDePaginas();
        this.paginacao(0);
    }

    public adicionarProduto() {
        sessionStorage.setItem('produtoSession',"");
        this.router.navigate(['/produto']);
    }

    public editarProduto(produto: Produto) {
        sessionStorage.setItem('produtoSession', JSON.stringify(produto));
        this.router.navigate(['/produto']);
    }

    public deletarProduto(produto: Produto) {
        this.produtoServico.deletar(produto)
            .subscribe(
               produtos => {
                  this.produtos = produtos;
               }, e => {
                  console.log(e.errors);
               }

            )
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
