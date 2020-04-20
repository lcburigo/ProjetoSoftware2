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
var produto_servico_1 = require("../../servicos/produto/produto.servico");
var router_1 = require("@angular/router");
var PesquisaProdutoComponet = /** @class */ (function () {
    function PesquisaProdutoComponet(produtoServico, router) {
        var _this = this;
        this.produtoServico = produtoServico;
        this.router = router;
        this.produtoServico.obterTodosProdutos()
            .subscribe(function (produtos) {
            _this.produtos = produtos;
        }, function (e) {
            console.log(e.error);
        });
    }
    PesquisaProdutoComponet.prototype.ngOnInit = function () {
    };
    PesquisaProdutoComponet.prototype.adicionarProduto = function () {
        sessionStorage.setItem('produtoSession', " ");
        this.router.navigate(['/produto']);
    };
    PesquisaProdutoComponet.prototype.editarProduto = function (produto) {
        sessionStorage.setItem('produtoSession', JSON.stringify(produto));
        this.router.navigate(['/produto']);
    };
    PesquisaProdutoComponet.prototype.deletarProduto = function (produto) {
        var _this = this;
        this.produtoServico.deletar(produto)
            .subscribe(function (produtos) {
            _this.produtos = produtos;
        }, function (e) {
            console.log(e.errors);
        });
    };
    PesquisaProdutoComponet = __decorate([
        core_1.Component({
            selector: "pesquisa-produto",
            templateUrl: "./pesquisa.produto.component.html",
            styleUrls: ["./pesquisa.produto.component.css"]
        }),
        __metadata("design:paramtypes", [produto_servico_1.ProdutoServico, router_1.Router])
    ], PesquisaProdutoComponet);
    return PesquisaProdutoComponet;
}());
exports.PesquisaProdutoComponet = PesquisaProdutoComponet;
//# sourceMappingURL=pesquisa.produto.component.js.map