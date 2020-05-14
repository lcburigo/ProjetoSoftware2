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
        this.mensagem = "";
        if (this.validaCampos()) {
            this.usuarioServico.cadastrarUsuario(this.usuario)
                .subscribe(
                    usuarioJson => {
                        this.usuarioCadastrado = true;    
                    },
                    e => {
                        this.mensagem = e.error;
                    }
                );
        }
        this.ativar_spinner = false;
    }

    public validaCampos(): boolean {
        var email     = this.usuario.email;
        var senha     = this.usuario.senha;
        var nome      = this.usuario.nome;
        var sobreNome = this.usuario.sobreNome;

        if (!email) {
            email = email.trim();
        }

        if (!email) {
            this.mensagem = "Email iválido";
            return false
        }

        if (senha != null) {
            senha = senha.trim();
        }

        if (!senha) {
            this.mensagem = "Senha inválida";
            return false;
        }

        if (nome != null) {
            nome = nome.trim();
        }
        if (!nome) {
            this.mensagem = "Nome inválido";
            return false;
        }
        if (sobreNome != null) {
            sobreNome = sobreNome.trim();
        }

        if (!sobreNome) {
            this.mensagem = "Sobre Nome inválido";
            return false;
        }
        return true;
    }
    

}
