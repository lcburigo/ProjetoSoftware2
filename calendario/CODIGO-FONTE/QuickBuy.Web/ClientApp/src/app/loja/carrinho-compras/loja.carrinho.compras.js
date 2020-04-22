"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LojaCarrrinhoCompras = /** @class */ (function () {
    function LojaCarrrinhoCompras() {
        this.produtos = [];
    }
    LojaCarrrinhoCompras.prototype.adicionar = function (produto) {
        var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
        if (!produtoLocaStorage) {
            // se não existir nada dentro do localStorage
            this.produtos.push(produto);
        }
        else {
            // se existir ao menos um item dentro do localStorage
            this.produtos = JSON.parse(produtoLocaStorage);
            this.produtos.push(produto);
        }
        localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
    };
    LojaCarrrinhoCompras.prototype.obterProdutos = function () {
        var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
        if (produtoLocaStorage) {
            return JSON.parse(produtoLocaStorage);
        }
    };
    LojaCarrrinhoCompras.prototype.removerProduto = function (produto) {
        var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
        if (produtoLocaStorage) {
            this.produtos = JSON.parse(produtoLocaStorage);
            this.produtos = this.produtos.filter(function (p) { return p.id != produto.id; });
            localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
        }
    };
    LojaCarrrinhoCompras.prototype.atualizar = function (produtos) {
        localStorage.setItem("produtoLocaStorage", JSON.stringify(produtos));
    };
    return LojaCarrrinhoCompras;
}());
exports.LojaCarrrinhoCompras = LojaCarrrinhoCompras;
//# sourceMappingURL=loja.carrinho.compras.js.map