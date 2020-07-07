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
    public valor: number;
    public totalLista: number;
    public indicePaginas;
    public ativar_spinner: boolean;

    constructor(private pedidoServico: PedidoServico) {
        this.pedidoLista = [];

    }

    ngOnInit(): void {
        this.dataHoje();
        this.numeroDePaginas();
        this.consultarFaturamento(0);
    }

    public consultarFaturamento(pagina:number) {
        this.mensagem = "";
        this.pedidoLista = [];
        //this.totalLista = "R$0";
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

            this.pedidoServico.obterTodosPedidos(this.dataInicial, dataFinal, pagina)
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
        this.totalFaturadoPeriodo(dataFinal);
        this.numeroDePaginas();
        this.desativarEspera();
    }

    public montaListaPedido() {     
        //this.valor = 0;
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
                var preco = itens[i].preco + total;
                var total = preco;
            }
            pedidoFaturado.preco = (preco).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
            //this.valor = this.valor + preco;
            this.pedidoLista.push(pedidoFaturado);
        }
        //this.totalLista = (this.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
    }

    public totalFaturadoPeriodo(dataFinal: string) {
        this.totalLista = 0;
        this.pedidoServico.totalFaturadoPeriodo(this.dataInicial, dataFinal)
            .subscribe(
                totalPeriodo => {
                    this.totalLista = totalPeriodo;
                },
                e => {
                    console.log(e.error);
                    this.mensagem = e.error;
                });
    }
        
    public numeroDePaginas() {
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

        this.pedidoServico.obterNumeroElementos(this.dataInicial, dataFinal)
            .subscribe(
                total => {
                    this.indicePaginas = new Array(total);
                },
                e => {
                    console.log(e.error);
                });
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
