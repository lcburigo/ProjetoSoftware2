import { Component, OnInit } from '@angular/core';
import { UsuarioServico } from '../../../dist/out-tsc/src/app/servicos/usuario/usuario.servico';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

    constructor(private usuarioServico: UsuarioServico) {
        this.usuarioServico.usuario;
    }

    ngOnInit(): void {
        this.usuarioServico.usuario; 
    }

    public usuario_administrador(): boolean {
        return this.usuarioServico.usuario_Administrador();
    }


}
