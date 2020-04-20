import { Component, OnInit } from "@angular/core"
import { Produto } from "../modelo/produto";
import { ProdutoServico } from "../servicos/produto/produto.servico";
import { Router } from "@angular/router";

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
        debugger;
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

    public ativarEspera() {
        this.ativar_spinner = true;
    }

    public desativarEspera() {
        this.ativar_spinner = false;
    }



}
