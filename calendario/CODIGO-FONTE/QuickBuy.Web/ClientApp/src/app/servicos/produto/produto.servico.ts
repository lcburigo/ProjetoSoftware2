import {Injectable, Inject, OnInit } from "@angular/core"
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Produto } from "../../modelo/produto";

@Injectable({
    providedIn: "root"
})

export class ProdutoServico implements OnInit {
    ngOnInit(): void {
        this.produtos = [];
    }

    private baseURL: string;
    public produtos: Produto[];

    constructor(private http: HttpClient, @Inject('BASE_URL') getBaseUrl: string) {
        this.baseURL = getBaseUrl;
    }

    get headers(): HttpHeaders {
        return new HttpHeaders().set('content-type', 'application/json');
    }

    public cadastrar(produto: Produto): Observable<Produto> {
        return this.http.post<Produto>(this.baseURL + "api/produto",
                                       JSON.stringify(produto) ,{ headers: this.headers });
    }

    public salvar(produto: Produto): Observable<Produto> {
        return this.http.post<Produto>(this.baseURL+ "api/produto/salvar",
            JSON.stringify(produto), { headers: this.headers });
    }

    public deletar(produto: Produto): Observable<Produto[]> {
        return this.http.post<Produto[]>(this.baseURL + "api/produto/deletar",
            JSON.stringify(produto), { headers: this.headers });
    }

    public obterTodosProdutos(): Observable<Produto[]> {
        return this.http.get<Produto[]>(this.baseURL + "api/produto");
    }

    public obterProduto(produtoId: number): Observable<number> {
        return this.http.get<number>(this.baseURL + "api/produto");
    }

    public obterNumeroElementos( ): Observable<number> {
        return this.http.get<number>(this.baseURL + "api/produto/numeroDePaginas");
    }

    public obterProdutoPaginacao(page: number): Observable<Produto[]> {
        var teste = JSON.stringify({ page: page })
        let params = new HttpParams().set("page", page.toString());
        return this.http.get<Produto[]>(this.baseURL + "api/produto/produtoPaginacao", { headers: this.headers, params: params });
    }

    enviarArquivo(arquivoSelecionado: File): Observable<string> {
        const formData: FormData = new FormData();
        formData.append("arquivoEnviado", arquivoSelecionado, arquivoSelecionado.name);
        return this.http.post<string>(this.baseURL + "api/produto/enviarArquivo", formData);
            
    }

}
