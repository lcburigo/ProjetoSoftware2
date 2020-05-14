import { Component, OnInit } from "@angular/core"
import { Produto } from "../modelo/produto";
import { ProdutoServico } from "../servicos/produto/produto.servico";
import { Router } from "@angular/router";
import { normalizeAnimationEntry } from "@angular/animations/browser/src/util";
import { element } from "@angular/core/src/render3/instructions";

@Component({
    selector: "app-produto",
    templateUrl: "./produto.component.html",
    styleUrls: ["./produto.component.css"]
})
export class ProdutoComponent implements OnInit {

    public produto: Produto;
    public ativar_spinner: boolean;
    public arquivoSelecionado: File;
    public mensagem: string;

    constructor(private produtoServico: ProdutoServico, private router: Router) {
        this.produto = new Produto();
    }

    ngOnInit(): void {
        var produtoSession = sessionStorage.getItem('produtoSession');
        if (produtoSession) {
            this.produto = JSON.parse(produtoSession);
        }
        else {
            this.produto = new Produto();
        }
    }

    public inputChange(files: FileList) {
        this.arquivoSelecionado = files.item(0);
        this.ativarEspera();
        this.produtoServico.enviarArquivo(this.arquivoSelecionado)
            .subscribe(
                nomeArquivo => {
                    this.produto.nomeArquivo = nomeArquivo;
                    console.log(nomeArquivo);
                    this.desativarEspera();
                },
                e => {
                    console.log(e.error);
                    this.desativarEspera();
                });
    }
   
    public cadastrar() {
        this.ativarEspera();
      
        if (this.validaCampos()) {
            this.produtoServico.cadastrar(this.produto)
                .subscribe(
                    produtoJson => {
                        console.log(produtoJson);
                        this.desativarEspera();
                        this.router.navigate(['/pesquisar-produto']);
                    },
                    e => {
                        console.log(e.error);
                        this.mensagem = e.error;
                        this.desativarEspera();
                    }
                );
        }
        this.desativarEspera();
    }

    public validaCampos(): boolean{
        debugger;
        var nomeProduto = this.produto.nome;
        var descricaoProduto = this.produto.descricao;
        this.ativarEspera();
        this.mensagem = null;

        if (nomeProduto != null) {
            nomeProduto = nomeProduto.trim();
        }

        if (!nomeProduto) {
            this.produto.nome = "";
            return false;
        }

        if (this.produto.nome.length < 10) {
            return false;
        }

        if (descricaoProduto != null) {
            descricaoProduto = descricaoProduto.trim();
        }

        if (!descricaoProduto) {
            this.produto.descricao = "";
            return false;
        }

        if (this.produto.descricao.length < 50) {
            return false;
        }

        if (this.produto.preco < 0) {
            return false;
        }

        if (this.produto.preco == null) {
            this.produto.preco = 0;
            return false;
        }
        
        if (this.produto.qtdArmazem < 1) {
            return false;
        }

        if (this.produto.qtdArmazem == null) {
            this.produto.qtdArmazem = 0;
            return false;
        }

        return true;
    }

    public ativarEspera() {
        this.ativar_spinner = true;
    }

    public desativarEspera() {
        this.ativar_spinner = false;
    }



}
