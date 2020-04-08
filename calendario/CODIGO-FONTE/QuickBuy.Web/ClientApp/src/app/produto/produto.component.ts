import { Component, OnInit } from "@angular/core"
import { Produto } from "../modelo/produto";
import { ProdutoServico } from "../servicos/produto/produto.servico";

@Component({
    selector: "app-produto",
    templateUrl: "./produto.component.html",
    styleUrls: ["./produto.component.css"]
})
export class ProdutoComponent implements OnInit {

    public produto: Produto;
    public ativar_spinner: boolean;
   public arquivoSelecionado: File;

    constructor(private produtoServico: ProdutoServico) {
        this.produto = new Produto();
    }

    ngOnInit(): void {
        this.produto = new Produto();
    }

    public inputChange(files: FileList) {
        this.arquivoSelecionado = files.item(0);
        this.ativar_spinner = true;
        this.produtoServico.enviarArquivo(this.arquivoSelecionado)
            .subscribe(
                nomeArquivo => {
                    this.produto.nomeArquivo = nomeArquivo;
                    console.log(nomeArquivo);
                    this.ativar_spinner = false;
                },
                e => {
                    console.log(e.error);
                });
    }
   
    public cadastrar() {
        //this.produto
     /*   this.produtoServico.cadastrar(this.produto)
            .subscribe(
                produtoJson => {
                    console.log(produtoJson);
                },
                e => {
                    console.log(e.error);
                }
            );*/
    }



}
