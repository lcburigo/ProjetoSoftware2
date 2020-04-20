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
var produto_1 = require("../modelo/produto");
var produto_servico_1 = require("../servicos/produto/produto.servico");
var router_1 = require("@angular/router");
var ProdutoComponent = /** @class */ (function () {
    function ProdutoComponent(produtoServico, router) {
        this.produtoServico = produtoServico;
        this.router = router;
        this.produto = new produto_1.Produto();
    }
    ProdutoComponent.prototype.ngOnInit = function () {
        var produtoSession = sessionStorage.getItem('produtoSession');
        if (produtoSession) {
            this.produto = JSON.parse(produtoSession);
        }
        else {
            this.produto = new produto_1.Produto();
        }
    };
    ProdutoComponent.prototype.inputChange = function (files) {
        var _this = this;
        debugger;
        this.arquivoSelecionado = files.item(0);
        this.ativarEspera();
        this.produtoServico.enviarArquivo(this.arquivoSelecionado)
            .subscribe(function (nomeArquivo) {
            _this.produto.nomeArquivo = nomeArquivo;
            console.log(nomeArquivo);
            _this.desativarEspera();
        }, function (e) {
            console.log(e.error);
            _this.desativarEspera();
        });
    };
    ProdutoComponent.prototype.cadastrar = function (files) {
        var _this = this;
        this.ativarEspera();
        this.produtoServico.cadastrar(this.produto)
            .subscribe(function (produtoJson) {
            console.log(produtoJson);
            if (files != null) {
                _this.inputChange(files);
            }
            _this.desativarEspera();
            _this.router.navigate(['/pesquisar-produto']);
        }, function (e) {
            console.log(e.error);
            _this.mensagem = e.error;
            _this.desativarEspera();
        });
    };
    ProdutoComponent.prototype.ativarEspera = function () {
        this.ativar_spinner = true;
    };
    ProdutoComponent.prototype.desativarEspera = function () {
        this.ativar_spinner = false;
    };
    ProdutoComponent = __decorate([
        core_1.Component({
            selector: "app-produto",
            templateUrl: "./produto.component.html",
            styleUrls: ["./produto.component.css"]
        }),
        __metadata("design:paramtypes", [produto_servico_1.ProdutoServico, router_1.Router])
    ], ProdutoComponent);
    return ProdutoComponent;
}());
exports.ProdutoComponent = ProdutoComponent;
//# sourceMappingURL=produto.component.js.map