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
var http_1 = require("@angular/common/http");
var ProdutoServico = /** @class */ (function () {
    //constructor(private http: HttpClient, @Inject('Base_URL') baseUrl: string) {
    function ProdutoServico(http) {
        this.http = http;
        //this._baseUrl = baseUrl;
    }
    ProdutoServico.prototype.ngOnInit = function () {
        this.produtos = [];
    };
    Object.defineProperty(ProdutoServico.prototype, "headers", {
        get: function () {
            return new http_1.HttpHeaders().set('content-type', 'application/json');
        },
        enumerable: true,
        configurable: true
    });
    ProdutoServico.prototype.cadastrar = function (produto) {
        return this.http.post("https://localhost:44363/" + "api/produto", JSON.stringify(produto), { headers: this.headers });
    };
    ProdutoServico.prototype.salvar = function (produto) {
        return this.http.post("https://localhost:44363/" + "api/produto/salvar", JSON.stringify(produto), { headers: this.headers });
    };
    ProdutoServico.prototype.deletar = function (produto) {
        return this.http.post("https://localhost:44363/" + "api/produto/deletar", JSON.stringify(produto), { headers: this.headers });
    };
    ProdutoServico.prototype.obterTodosProdutos = function () {
        return this.http.get("https://localhost:44363/" + "api/produto");
    };
    ProdutoServico.prototype.obterProduto = function (produtoId) {
        return this.http.get("https://localhost:44363/" + "api/produto");
    };
    ProdutoServico.prototype.enviarArquivo = function (arquivoSelecionado) {
        var formData = new FormData();
        formData.append("arquivoEnviado", arquivoSelecionado, arquivoSelecionado.name);
        return this.http.post("https://localhost:44363/" + "api/produto/enviarArquivo", formData);
    };
    ProdutoServico = __decorate([
        core_1.Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ProdutoServico);
    return ProdutoServico;
}());
exports.ProdutoServico = ProdutoServico;
//# sourceMappingURL=produto.servico.js.map