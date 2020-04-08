import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../modelo/usuario";
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls:["./login.component.css"]
})
export class LoginComponent implements OnInit {

    public usuario;
    public returnUrl: string;
    public mensagem: string;
    private ativar_spinner: boolean;

    constructor(private router: Router, private activatedRouter: ActivatedRoute, private usuarioServico: UsuarioServico) {
        this.usuario = new Usuario();       
    }

    ngOnInit(): void {
        this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
    }

    entrar() {
        this.ativar_spinner = true;
        this.usuarioServico.verificaUsuario(this.usuario)
            .subscribe(
                usuario_json => {
                    // essa linha seá executada no caso de retorno sem erro
                    //console.log(data);
                    // sessionStorage.setItem("usuario-autenticado", "1");
                    this.usuarioServico.usuario = usuario_json

                    if (this.returnUrl == null) {
                        this.router.navigate(['/']);
                    }
                    else {
                        this.router.navigate([this.returnUrl]);
                    }

                },
                err => {
                    // console.log(err.error);
                    this.mensagem = err.error;
                    this.ativar_spinner = false;
                }
            );
     
    }
}
