import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../modelo/usuario";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
    selector: "cadastro-usuario",
    templateUrl: "./cadastro.usuario.component.html",
    styleUrls:["./cadastro.usuario.component.css"]
})

export class CadastroUsuarioComponet implements OnInit {
    public usuario: Usuario;
    public ativar_spinner: boolean;
    public mensagem: string;
    public usuarioCadastrado: boolean;

    private _usuario: Usuario;
    constructor(public usuarioServico: UsuarioServico) {

    }

    ngOnInit(): void {
        this.usuario = new Usuario();

    }


    public limpar_sessao() {
        sessionStorage.setItem("usuario-autenticado", "0");
        this._usuario = null;
    } 

    public cadastrar() {
        this.ativar_spinner = true;
            ;
        this.usuarioServico.cadastrarUsuario(this.usuario)
            .subscribe(
                usuarioJson => {
                    this.usuarioCadastrado = true;
                    this.mensagem = "";
                    this.ativar_spinner = false;
                },
                e => {
                    this.mensagem = e.error;
                    this.ativar_spinner = false;
                }
            );
    }
    

}
