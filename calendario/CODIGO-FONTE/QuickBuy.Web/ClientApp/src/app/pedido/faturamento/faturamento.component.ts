import { Component, OnInit } from "@angular/core";
import { ItemPedido } from "../../modelo/itemPedido";
import { Pedido } from "../../modelo/Pedido";
import { PedidoServico } from "../../servicos/pedido/pedido.servico";

@Component({
    selector: "app-faturamento",
    templateUrl: "./faturamento.component.html",
    styleUrls: ["./faturamento.component.css"]
})

export class FaturamentoComponent implements OnInit {
    public pedido: Pedido;
    public itemPedido: ItemPedido;

    constructor(private produtoServico: PedidoServico) {
        this.pedido = new Pedido();
        this.itemPedido = new ItemPedido();
    }

    ngOnInit(): void {
        this.pedido = new Pedido();
        this.itemPedido = new ItemPedido();
    }

}
