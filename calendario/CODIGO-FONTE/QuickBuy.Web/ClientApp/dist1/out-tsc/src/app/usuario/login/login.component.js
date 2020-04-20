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
var router_1 = require("@angular/router");
var usuario_servico_1 = require("../../servicos/usuario/usuario.servico");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, activatedRouter, usuarioServico) {
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.usuarioServico = usuarioServico;
        this.usuario = new usuario_1.Usuario();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
    };
    LoginComponent.prototype.entrar = function () {
        var _this = this;
        this.ativar_spinner = true;
        this.usuarioServico.verificaUsuario(this.usuario)
            .subscribe(function (usuario_json) {
            // essa linha seá executada no caso de retorno sem erro
            //console.log(data);
            // sessionStorage.setItem("usuario-autenticado", "1");
            _this.usuarioServico.usuario = usuario_json;
            if (_this.returnUrl == null) {
                _this.router.navigate(['/']);
            }
            else {
                _this.router.navigate([_this.returnUrl]);
            }
        }, function (err) {
            // console.log(err.error);
            _this.mensagem = err.error;
            _this.ativar_spinner = false;
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "app-login",
            templateUrl: "./login.component.html",
            styleUrls: ["./login.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, usuario_servico_1.UsuarioServico])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map