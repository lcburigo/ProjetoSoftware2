"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var usuario_1 = require("../../modelo/usuario");
var usuario_servico_1 = require("../../servicos/usuario/usuario.servico");
var CadastroUsuarioComponet = /** @class */ (function () {
    function CadastroUsuarioComponet(usuarioServico) {
        this.usuarioServico = usuarioServico;
    }
    CadastroUsuarioComponet.prototype.ngOnInit = function () {
        this.usuario = new usuario_1.Usuario();
    };
    CadastroUsuarioComponet.prototype.limpar_sessao = function () {
        sessionStorage.setItem("usuario-autenticado", "0");
        this._usuario = null;
    };
    CadastroUsuarioComponet.prototype.cadastrar = function () {
        var _this = this;
        this.ativar_spinner = true;
        ;
        this.usuarioServico.cadastrarUsuario(this.usuario)
            .subscribe(function (usuarioJson) {
            _this.usuarioCadastrado = true;
            _this.mensagem = "";
            _this.ativar_spinner = false;
        }, function (e) {
            _this.mensagem = e.error;
            _this.ativar_spinner = false;
        });
    };
    CadastroUsuarioComponet = __decorate([
        core_1.Component({
            selector: "cadastro-usuario",
            templateUrl: "./cadastro.usuario.component.html",
            styleUrls: ["./cadastro.usuario.component.css"]
        }),
        __metadata("design:paramtypes", [usuario_servico_1.UsuarioServico])
    ], CadastroUsuarioComponet);
    return CadastroUsuarioComponet;
}());
exports.CadastroUsuarioComponet = CadastroUsuarioComponet;
//# sourceMappingURL=cadastro.usuario.component.js.map