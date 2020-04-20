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
var router_1 = require("@angular/router");
var usuario_servico_1 = require("../servicos/usuario/usuario.servico");
var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent(router, usuarioServico) {
        this.router = router;
        this.usuarioServico = usuarioServico;
        this.isExpanded = false;
    }
    NavMenuComponent.prototype.collapse = function () {
        this.isExpanded = false;
    };
    NavMenuComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    NavMenuComponent.prototype.usuarioLogado = function () {
        // var usuarioLogado = sessionStorage.getItem("usuario-autenticado");
        // if (usuarioLogado == "1") {
        //     return true;
        //}
        return this.usuarioServico.usuario_autenticado();
    };
    NavMenuComponent.prototype.sair = function () {
        this.usuarioServico.limpar_sessao();
        this.router.navigate(["/"]);
    };
    Object.defineProperty(NavMenuComponent.prototype, "usuario", {
        get: function () {
            return this.usuarioServico.usuario;
        },
        enumerable: true,
        configurable: true
    });
    NavMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-nav-menu',
            templateUrl: './nav-menu.component.html',
            styleUrls: ['./nav-menu.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, usuario_servico_1.UsuarioServico])
    ], NavMenuComponent);
    return NavMenuComponent;
}());
exports.NavMenuComponent = NavMenuComponent;
//# sourceMappingURL=nav-menu.component.js.map