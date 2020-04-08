import {Injectable, Inject, OnInit } from "@angular/core"
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Produto } from "../../modelo/produto";

@Injectable({
    providedIn: "root"
})

export class ProdutoServico implements OnInit {
    ngOnInit(): void {
        this.produtos = [];
    }

    private _baseUrl: string;
    public produtos: Produto[];

    //constructor(private http: HttpClient, @Inject('Base_URL') baseUrl: string) {
    constructor(private http: HttpClient) {
        //this._baseUrl = baseUrl;
    }

    get headers(): HttpHeaders {
        return new HttpHeaders().set('content-type', 'application/json');
    }

    public cadastrar(produto: Produto): Observable<Produto> {
        return this.http.post<Produto>("https://localhost:44363/" + "api/produto/cadastrar",
                                       JSON.stringify(produto) ,{ headers: this.headers });
    }

    public salvar(produto: Produto): Observable<Produto> {
        return this.http.post<Produto>("https://localhost:44363/" + "api/produto/salvar",
            JSON.stringify(produto), { headers: this.headers });
    }

    public deletar(produto: Produto): Observable<Produto> {
        return this.http.post<Produto>("https://localhost:44363/" + "api/produto/deletar",
            JSON.stringify(produto), { headers: this.headers });
    }

    public obterTodosProdutos(): Observable<Produto[]> {
        return this.http.get<Produto[]>("https://localhost:44363/" + "api/produto");
    }

    public obterProduto(produtoId: number): Observable<Produto> {
        return this.http.get<Produto>("https://localhost:44363/" + "api/produto");
    }


    enviarArquivo(arquivoSelecionado: File): Observable<string> {
        const formData: FormData = new FormData();
        formData.append("arquivoEnviado", arquivoSelecionado, arquivoSelecionado.name);
        return this.http.post<string>("https://localhost:44363/" + "api/produto/enviarArquivo", formData);
            
    }

}
