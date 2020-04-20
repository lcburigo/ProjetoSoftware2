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
var usuario_servico_1 = require("../src/app/servicos/usuario/usuario.servico");
var GuardaRotas = /** @class */ (function () {
    function GuardaRotas(router, usuarioServico) {
        this.router = router;
        this.usuarioServico = usuarioServico;
    }
    GuardaRotas.prototype.canActivate = function (route, state) {
        if (this.usuarioServico.usuario_autenticado()) {
            return true;
        }
        this.router.navigate(['/entrar'], { queryParams: { returnUrl: state.url } });
        //se usuario autenticado
        return false;
    };
    GuardaRotas = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [router_1.Router, usuario_servico_1.UsuarioServico])
    ], GuardaRotas);
    return GuardaRotas;
}());
exports.GuardaRotas = GuardaRotas;
//# sourceMappingURL=guarda.rotas.js.map