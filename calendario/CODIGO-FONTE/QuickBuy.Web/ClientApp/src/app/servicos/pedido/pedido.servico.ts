import { Injectable, Inject} from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pedido } from "../../modelo/pedido";
import { Data } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class PedidoServico {
    public _baseUrl: string;

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this._baseUrl = baseUrl;
    }

    get headers(): HttpHeaders {
        return new HttpHeaders().set('content-type', 'application/json');
    }

    public efetivarCompra(pedido: Pedido): Observable<number>{

        return this.http.post<number>(this._baseUrl + "api/pedido", JSON.stringify(pedido), { headers: this.headers });
    }

    public pedido(pedidoId: number): Observable<Pedido> {
        return this.http.get<Pedido>(this._baseUrl + "api/pedido/" + pedidoId);
    }

    public deletar(pedido: Pedido): Observable<number> {
        return this.http.post<number>(this._baseUrl + "api/pedido/Deletar", JSON.stringify(pedido), { headers: this.headers });          
    }

    public obterTodosPedidos(dataInicial: string, datafinal: string, pagina: number): Observable<Pedido[]> {
        var teste = JSON.stringify({ dataInicial: dataInicial, dataFinal: datafinal, pagina: pagina })
        let params = new HttpParams().set("dataInicial", dataInicial).set("dataFinal", datafinal).set("pagina", pagina.toString());
        return this.http.get<Pedido[]>(this._baseUrl + "api/pedido/pedidoData" , { headers: this.headers, params: params });
 
    }

    public obterNumeroElementos(dataInicial: string, datafinal: string): Observable<number> {
        var teste = JSON.stringify({ dataInicial: dataInicial, dataFinal: datafinal })
        let params = new HttpParams().set("dataInicial", dataInicial).set("dataFinal", datafinal);
        return this.http.get<number>(this._baseUrl + "api/pedido/numeroDePaginas", { headers: this.headers, params: params });
    }

    public totalFaturadoPeriodo(dataInicial: string, datafinal: string): Observable<number> {
        var teste = JSON.stringify({ dataInicial: dataInicial, dataFinal: datafinal })
        let params = new HttpParams().set("dataInicial", dataInicial).set("dataFinal", datafinal);
        return this.http.get<number>(this._baseUrl + "api/pedido/totalFaturadoPeriodo", { headers: this.headers, params: params });
    }
}
