import { Component, OnInit } from "@angular/core";
import { ItemPedido } from "../../modelo/itemPedido";
import { Pedido } from "../../modelo/Pedido";
import { PedidoFaturado } from "../../modelo/pedidoFaturado";
import { PedidoServico } from "../../servicos/pedido/pedido.servico";
import { Data } from "@angular/router";

@Component({
    selector: "app-faturamento",
    templateUrl: "./faturamento.component.html",
    styleUrls: ["./faturamento.component.css"]
})

export class FaturamentoComponent implements OnInit {
    public pedidos: Pedido[];
    public itemPedido: ItemPedido[];
    public pedidoLista: PedidoFaturado[];
    public dataInicial: string;
    public dataFinal: string;
    public mensagem: string;
    public totalLista: number;
    public ativar_spinner: boolean;

    constructor(private pedidoServico: PedidoServico) {
        this.pedidoLista = [];

    }

    ngOnInit(): void {
        this.dataHoje();
        this.consultarFaturamento();
    }

    public consultarFaturamento() {
        this.mensagem = "";
        if (this.validaData()) {

            this.mensagem = null;
            this.ativarEspera();
            this.itemPedido = null;
            //soma um no dia pois para consistir a data final no C#
            var data = this.dataFinal.split("-");
            var dia = parseInt(data[2]) + 1
            var diaString;
            if (dia < 10) {
                diaString = "0" + dia;
            }
            else {
                diaString = dia;
            }
            var dataFinal = data[0] + "-" + data[1] + "-" + diaString;

            this.pedidoServico.obterTodosPedidos(this.dataInicial, dataFinal)
                .subscribe(
                    pedidos => {
                        console.log(pedidos)
                        this.pedidos = pedidos;
                        this.montaListaPedido();
                    },
                    e => {
                        console.log(e.error);
                        this.mensagem = e.error;
                    });

        }
        this.desativarEspera();
    }

    public montaListaPedido() {
        this.pedidoLista = [];
        this.totalLista = 0;
        var pedido = new Pedido();
        var pedidoFaturado = new PedidoFaturado();
        var total = 0;
        for (let pedido of this.pedidos) {
            pedidoFaturado = new PedidoFaturado();
            pedidoFaturado.id = pedido.id;
            var itens = pedido.itensPedido;
            var dataCompra = pedido.dataPedido.toString();
            var dataEntrega = pedido.dataPrevisaoEntrega.toString();
            pedidoFaturado.dataPedido = dataCompra.substring(10, 8) + "/" + dataCompra.substring(7, 5) + "/" + dataCompra.substring(0,4);     
            pedidoFaturado.dataPrevisaoEntrega = dataEntrega.substring(10, 8) + "/" + dataEntrega.substring(7, 5) + "/" + dataEntrega.substring(0, 4);
            total = 0;
            for (var i = 0; i < itens.length; i++) {
                pedidoFaturado.preco = itens[i].preco + total;
                var total = pedidoFaturado.preco;
            }
            this.totalLista = this.totalLista + pedidoFaturado.preco;
            this.pedidoLista.push(pedidoFaturado);
        }
    }
        


    public validaData(): boolean {
        
        if (this.dataInicial == "") {
            this.mensagem = "Data inicial inválida";
            return false;
        }

        if (this.dataFinal == "") {
            this.mensagem = "Data final inválida";
            return false;
        }
        
        if (this.dataInicial > this.dataFinal ) {
            this.mensagem = "Data inicial maior que data final";
            return false;
        }
        return true;
    }

    public dataHoje() {
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        var dataAtual;

        dataAtual = ano;

        if (mes < 10) {
            dataAtual = dataAtual + "-" + "0" + mes;
        }
        else {
            dataAtual = dataAtual + "-" + mes;
        }

        if (dia < 10) {
            dataAtual = dataAtual + "-" + "0" + dia;
        }
        else {
            dataAtual = dataAtual + "-" + dia;
        }
        this.dataInicial = dataAtual;
        this.dataFinal = dataAtual;
    }

    public ativarEspera() {
        this.ativar_spinner = true;
    }

    public desativarEspera() {
        this.ativar_spinner = false;
    }

}
