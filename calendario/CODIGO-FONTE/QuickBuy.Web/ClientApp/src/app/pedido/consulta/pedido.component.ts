import { Component, OnInit } from "@angular/core";
import { ItemPedido } from "../../modelo/itemPedido";
import { Pedido } from "../../modelo/Pedido";
import { PedidoServico } from "../../servicos/pedido/pedido.servico";
import { Usuario } from "../../modelo/usuario";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
    selector: "app-pedido",
    templateUrl: "./pedido.component.html",
    styleUrls: ["./pedido.component.css"]
})

export class PedidoComponent implements OnInit {
    public pedido: Pedido;
    public itemPedido: ItemPedido[];
    public usuario: Usuario;
    public ativar_spinner: boolean;
    public mensagem: string;

    constructor(private pedidoServico: PedidoServico, private usuarioServico: UsuarioServico) {
        this.pedido = new Pedido();
        this.usuario = new Usuario();
    }

    ngOnInit(): void {
        this.pedido = new Pedido();
        this.usuario = new Usuario();
    }

    public pesquisaPedido() {
        this.mensagem = null;
        this.ativarEspera();
        this.usuario = new Usuario();
        this.itemPedido = null;

        this.pedidoServico.usuarioPedido(this.pedido.id)
            .subscribe(
                pedidoJson => {
                    console.log(pedidoJson)
                    this.pedido = pedidoJson;                  
                    this.itemPedido = this.pedido.itensPedido;
                    this.dadosCliente();
                },
                e => {
                    console.log(e.error);
                    this.mensagem = e.error;
                });
        this.desativarEspera();
    }

    public dadosCliente() {        
        this.ativarEspera();
        this.usuarioServico.usuarioPedido(this.pedido.usuarioId)
            .subscribe(
                usuario_json => {
                    // essa linha seá executada no caso de retorno sem erro
                    //console.log(data);
                    // sessionStorage.setItem("usuario-autenticado", "1");
                    this.usuario = usuario_json;
                },
                err => {
                    // console.log(err.error);
                    this.mensagem = err.error;
                    this.ativar_spinner = false;
                }
        );
        this.desativarEspera();
    }

    public excluirPedido() {
        this.mensagem = null;
        this.ativarEspera();
        this.usuario = new Usuario();
        this.itemPedido = null;

        this.pedidoServico.deletar(this.pedido)
            .subscribe(
                pedidoJson => {
                    console.log(pedidoJson)
                    this.pedido = new Pedido();
                },
                e => {
                    console.log(e.error);
                    this.mensagem = e.error;
                });
        this.desativarEspera();
    
    }

    public ativarEspera() {
        this.ativar_spinner = true;
    }

    public desativarEspera() {
        this.ativar_spinner = false;
    }

}
