import { Injectable, Inject} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pedido } from "../../modelo/pedido";

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

    public usuarioPedido(pedidoId: number): Observable<Pedido> {
        return this.http.get<Pedido>(this._baseUrl + "api/pedido/" + pedidoId);
    }

    public deletar(pedido: Pedido): Observable<number> {
        return this.http.post<number>(this._baseUrl + "api/pedido/Deletar", JSON.stringify(pedido), { headers: this.headers });          
    }
}
