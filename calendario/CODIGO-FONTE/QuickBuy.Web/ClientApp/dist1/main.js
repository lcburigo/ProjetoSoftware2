(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\r\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n  .body-content {\r\n    padding-top: 50px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <app-nav-menu></app-nav-menu>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _produto_produto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./produto/produto.component */ "./src/app/produto/produto.component.ts");
/* harmony import */ var _usuario_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./usuario/login/login.component */ "./src/app/usuario/login/login.component.ts");
/* harmony import */ var _servicos_usuario_usuario_servico__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./servicos/usuario/usuario.servico */ "./src/app/servicos/usuario/usuario.servico.ts");
/* harmony import */ var _usuario_cadastro_cadastro_usuario_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./usuario/cadastro/cadastro.usuario.component */ "./src/app/usuario/cadastro/cadastro.usuario.component.ts");
/* harmony import */ var _servicos_produto_produto_servico__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./servicos/produto/produto.servico */ "./src/app/servicos/produto/produto.servico.ts");
/* harmony import */ var _produto_pesquisa_pesquisa_produto_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./produto/pesquisa/pesquisa.produto.component */ "./src/app/produto/pesquisa/pesquisa.produto.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _produto_produto_component__WEBPACK_IMPORTED_MODULE_8__["ProdutoComponent"],
                _usuario_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _usuario_cadastro_cadastro_usuario_component__WEBPACK_IMPORTED_MODULE_11__["CadastroUsuarioComponet"],
                _produto_pesquisa_pesquisa_produto_component__WEBPACK_IMPORTED_MODULE_13__["PesquisaProdutoComponet"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], pathMatch: 'full' },
                    { path: 'produto', component: _produto_produto_component__WEBPACK_IMPORTED_MODULE_8__["ProdutoComponent"] },
                    { path: 'entrar', component: _usuario_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
                    { path: "novo-usuario", component: _usuario_cadastro_cadastro_usuario_component__WEBPACK_IMPORTED_MODULE_11__["CadastroUsuarioComponet"] },
                    { path: "pesquisar-produto", component: _produto_pesquisa_pesquisa_produto_component__WEBPACK_IMPORTED_MODULE_13__["PesquisaProdutoComponet"] }
                ])
            ],
            providers: [_servicos_usuario_usuario_servico__WEBPACK_IMPORTED_MODULE_10__["UsuarioServico"], _servicos_produto_produto_servico__WEBPACK_IMPORTED_MODULE_12__["ProdutoServico"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

//{ path: 'produto', component: ProdutoComponent, canActivate: [GuardaRotas] },


/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/modelo/produto.ts":
/*!***********************************!*\
  !*** ./src/app/modelo/produto.ts ***!
  \***********************************/
/*! exports provided: Produto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Produto", function() { return Produto; });
var Produto = /** @class */ (function () {
    function Produto() {
    }
    return Produto;
}());



/***/ }),

/***/ "./src/app/modelo/usuario.ts":
/*!***********************************!*\
  !*** ./src/app/modelo/usuario.ts ***!
  \***********************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.html":
/*!**************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav class='navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3'>\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]='[\"/\"]'>QuickBuy</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\" (click)=\"toggle()\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\" [ngClass]='{\"show\": isExpanded}'>\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n            <a class=\"nav-link text-dark\" [routerLink]='[\"/\"]'>Home</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]'>\r\n            <a class=\"nav-link text-dark\" [routerLink]='[\"/pesquisar-produto\"]'>Produto</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' *ngIf=\"!usuarioLogado()\">\r\n            <a class=\"nav-link text-dark\" [routerLink]='[\"/entrar\"]'>Entrar</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' *ngIf=\"usuarioLogado()\">\r\n            <a class=\"nav-item nav-link text-dark\" [routerLink]='[\"/sair\"]' (click)=\"sair()\">Sair</a>\r\n          </li>\r\n          <li class=\"=nav-item dropdown\" *ngIf=\"usuarioLogado()\">\r\n            <a class=\"nav-link dropdown-toggle\" role=\"button\" aria-haspopup=\"true\" href=\"#\"\r\n               aria-expanded=\"false\" id=\"linkMenu\" data-toggle=\"dropdown\">{{usuario.nome}}</a>\r\n\r\n            <ul class=\"dropdown-menu\" aria-labelledby=\"linkMenu\">\r\n              <li class=\"dropdown-item\" role=\"menu\" [routerLink]='[\"/sair\"]' (click)=\"sair()\">Sair</li>\r\n            </ul>\r\n          </li>\r\n\r\n          <!--\r\n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' *ngIf=\"usuarioLogado()\">\r\n            <a class=\"nav-item nav-link text-dark\" [routerLink]='[\"/sair\"]' (click)=\"sair()\">Sair</a>\r\n          </li>\r\n          -->\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicos_usuario_usuario_servico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicos/usuario/usuario.servico */ "./src/app/servicos/usuario/usuario.servico.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-menu',
            template: __webpack_require__(/*! ./nav-menu.component.html */ "./src/app/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _servicos_usuario_usuario_servico__WEBPACK_IMPORTED_MODULE_2__["UsuarioServico"]])
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/produto/pesquisa/pesquisa.produto.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/produto/pesquisa/pesquisa.produto.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titulo {\r\n  color: #666;\r\n}\r\n"

/***/ }),

/***/ "./src/app/produto/pesquisa/pesquisa.produto.component.html":
/*!******************************************************************!*\
  !*** ./src/app/produto/pesquisa/pesquisa.produto.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"h4 titulo mb-2\">Pesquisa de Produtos</h1>\r\n<p *ngIf=\"!produtos\">Carregando Produtos...</p>\r\n\r\n<button class=\"btn btn-primary mb-2\" (click)=\"adicionarProduto()\">Adicionar Produtos</button>\r\n\r\n<table class=\"table table-hover\" *ngIf=\"produtos\">\r\n  <thead>\r\n    <tr>\r\n      <th>Nome</th>\r\n      <th>Descrição</th>\r\n      <th>Preço</th>\r\n      <th>Imagem</th>\r\n      <th></th>\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let p of produtos\">\r\n      <td>{{p.nome}}</td>\r\n      <td style=\"width:50%; height:10%\">{{p.descricao}}</td>\r\n      <td style=\"width:10%; height:10%\">{{p.preco}}</td>\r\n      <td><img src=\"../../../../../arquivos/{{p.nomeArquivo}}\" style=\"width:40%; height:10%\" /></td>\r\n      <td><button class=\"btn btn-success btn-sm\" (click)=\"editarProduto(p)\">Editar</button></td>\r\n      <td><button class=\"btn btn-danger btn-sm\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Deletar</button></td>\r\n\r\n      <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Atenção</h5>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              Deseja realmente deletar o produto selecionado?\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"deletarProduto(p)\">Sim</button>\r\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </tr>\r\n  </tbody>\r\n\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/produto/pesquisa/pesquisa.produto.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/produto/pesquisa/pesquisa.produto.component.ts ***!
  \****************************************************************/
/*! exports provided: PesquisaProdutoComponet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesquisaProdutoComponet", function() { return PesquisaProdutoComponet; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicos_produto_produto_servico__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicos/produto/produto.servico */ "./src/app/servicos/produto/produto.servico.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "pesquisa-produto",
            template: __webpack_require__(/*! ./pesquisa.produto.component.html */ "./src/app/produto/pesquisa/pesquisa.produto.component.html"),
            styles: [__webpack_require__(/*! ./pesquisa.produto.component.css */ "./src/app/produto/pesquisa/pesquisa.produto.component.css")]
        }),
        __metadata("design:paramtypes", [_servicos_produto_produto_servico__WEBPACK_IMPORTED_MODULE_1__["ProdutoServico"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PesquisaProdutoComponet);
    return PesquisaProdutoComponet;
}());



/***/ }),

/***/ "./src/app/produto/produto.component.css":
/*!***********************************************!*\
  !*** ./src/app/produto/produto.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titulo{\r\n  color: #666;\r\n}\r\n\r\n.custom-file-input:lang(en)~ .custom-file-label::after{\r\n  content: \"Selecionar\";\r\n}\r\n\r\n.invalid-feedback{\r\n  display:block;\r\n}\r\n\r\n.valid-feedback{\r\n  display:block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/produto/produto.component.html":
/*!************************************************!*\
  !*** ./src/app/produto/produto.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"h4 titulo\">Cadastro de Produto</h1>\r\n<label for=\"inputNome\" class=\"sr-only\">Nome</label>\r\n<input type=\"text\" id=\"inputNome\"\r\n       name=\"nomeProduto\"\r\n       placeholder=\"Nome do Produto\"\r\n       class=\"form-control mb-2 col-md-4\"\r\n       [ngClass]=\"{\r\n          'is-invalid': nome.invalid && (nome.dirty || nome.touched),\r\n          'is-valid': nome.valid && (nome.dirty || nome.touched)\r\n       }\"\r\n       [(ngModel)]=\"produto.nome\"\r\n       #nome=\"ngModel\"\r\n       required />\r\n<div class=\"invalid-feedback mb-2\" *ngIf=\"nome.invalid && (nome.dirty || nome.touched)\">\r\n  <div *ngIf=\"nome.errors.required\">\r\n    Nome do produto é de preenchimento obrigatório\r\n  </div>\r\n</div>\r\n\r\n<label for=\"inputNome\" class=\"sr-only\">Descrição</label>\r\n<input type=\"text\" id=\"inputDescricao\"\r\n       name=\"descricaoProduto\"\r\n       placeholder=\"Descrição do produto\"\r\n       class=\"form-control mb-2 col-md-4\"\r\n       [ngClass]=\"{\r\n          'is-invalid': descricao.invalid && (descricao.dirty || descricao.touched),\r\n          'is-valid': descricao.valid && (descricao.dirty || descricao.touched)\r\n       }\"\r\n       [(ngModel)]=\"produto.descricao\"\r\n       #descricao=\"ngModel\"\r\n       required />\r\n<div class=\"invalid-feedback mb-2\" *ngIf=\"descricao.invalid && (descricao.dirty || descricao.touched)\">\r\n  <div *ngIf=\"descricao.errors.required\">\r\n    Descrição do produto é de preenchimento obrigatório\r\n  </div>\r\n</div>\r\n\r\n<label for=\"inputPreco\" class=\"sr-only\">Preço</label>\r\n<input type=\"number\"\r\n       id=\"inputPreco\"\r\n       name=\"precoProduto\"\r\n       placeholder=\"Preço\"\r\n       class=\"form-control mb-2 col-md-2\"\r\n       [ngClass]=\"{\r\n          'is-invalid': preco.invalid && (preco.dirty || preco.touched),\r\n          'is-valid': preco.valid && (preco.dirty || preco.touched)\r\n       }\"\r\n       [(ngModel)]=\"produto.preco\"\r\n       #preco=\"ngModel\"\r\n       required/>\r\n\r\n<div class=\"invalid-feedback mb-2\" *ngIf=\"preco.invalid && (preco.dirty || preco.touched)\">\r\n  <div *ngIf=\"preco.errors.required\">\r\n    Preço do produto é de preenchimento obrigatório\r\n  </div>\r\n</div>\r\n\r\n<div class=\"input-group\">\r\n  <div class=\"custom-file col-md-4 mb-2\">\r\n    <input type=\"file\" class=\"custom-file-input\" id=\"inputFile\"/>\r\n    <input type=\"file\" class=\"custom-file-input\" id=\"inputFile\"(change)=\"inputChange($event.target.files)\"/>\r\n    <label for=\"inputFile\" class=\"custom-file-label\">Escolha uma foto</label>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"form-inline\">\r\n  <button class=\"btn btn-primary\" style=\"margin-right:4px;\" (click)=  \"cadastrar()\" [disabled]=\"ativar_spinner\">\r\n    <span class=\"spinner-border spinner-border-sm\" *ngIf=\"ativar_spinner\"></span>\r\n    Cadastrar\r\n  </button>\r\n  <button class=\"btn btn-secondary \" [routerLink]=\"['/pesquisar-produto']\">Cancelar</button>\r\n</div>\r\n\r\n<div class=\"alert-danger col-md-4 mb-2\" *ngIf=\"mensagem\">\r\n  {{mensagem}}\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/produto/produto.component.ts":
/*!**********************************************!*\
  !*** ./src/app/produto/produto.component.ts ***!
  \**********************************************/
/*! exports provided: ProdutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoComponent", function() { return ProdutoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modelo_produto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modelo/produto */ "./src/app/modelo/produto.ts");
/* harmony import */ var _servicos_produto_produto_servico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicos/produto/produto.servico */ "./src/app/servicos/produto/produto.servico.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProdutoComponent = /** @class */ (function () {
    function ProdutoComponent(produtoServico, router) {
        this.produtoServico = produtoServico;
        this.router = router;
        this.produto = new _modelo_produto__WEBPACK_IMPORTED_MODULE_1__["Produto"]();
    }
    ProdutoComponent.prototype.ngOnInit = function () {
        debugger;
        var produtoSession = sessionStorage.getItem('produtoSession');
        if (produtoSession) {
            this.produto = JSON.parse(produtoSession);
        }
        else {
            this.produto = new _modelo_produto__WEBPACK_IMPORTED_MODULE_1__["Produto"]();
        }
    };
    ProdutoComponent.prototype.inputChange = function (files) {
        var _this = this;
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
    ProdutoComponent.prototype.cadastrar = function () {
        var _this = this;
        this.ativarEspera();
        this.produtoServico.cadastrar(this.produto)
            .subscribe(function (produtoJson) {
            console.log(produtoJson);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-produto",
            template: __webpack_require__(/*! ./produto.component.html */ "./src/app/produto/produto.component.html"),
            styles: [__webpack_require__(/*! ./produto.component.css */ "./src/app/produto/produto.component.css")]
        }),
        __metadata("design:paramtypes", [_servicos_produto_produto_servico__WEBPACK_IMPORTED_MODULE_2__["ProdutoServico"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProdutoComponent);
    return ProdutoComponent;
}());



/***/ }),

/***/ "./src/app/servicos/produto/produto.servico.ts":
/*!*****************************************************!*\
  !*** ./src/app/servicos/produto/produto.servico.ts ***!
  \*****************************************************/
/*! exports provided: ProdutoServico */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoServico", function() { return ProdutoServico; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        },
        enumerable: true,
        configurable: true
    });
    ProdutoServico.prototype.cadastrar = function (produto) {
        debugger;
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProdutoServico);
    return ProdutoServico;
}());



/***/ }),

/***/ "./src/app/servicos/usuario/usuario.servico.ts":
/*!*****************************************************!*\
  !*** ./src/app/servicos/usuario/usuario.servico.ts ***!
  \*****************************************************/
/*! exports provided: UsuarioServico */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioServico", function() { return UsuarioServico; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var UsuarioServico = /** @class */ (function () {
    function UsuarioServico(http, getBaseUrl) {
        this.http = http;
        this.baseURL = getBaseUrl;
    }
    Object.defineProperty(UsuarioServico.prototype, "usuario", {
        get: function () {
            var usuario_json = sessionStorage.getItem("usuario-autenticado");
            this._usuario = JSON.parse(usuario_json);
            return this._usuario;
        },
        set: function (usuario) {
            sessionStorage.setItem("usuario-autenticado", JSON.stringify(this.usuario));
            sessionStorage.setItem("usuario-autenticado", JSON.stringify(usuario));
            this._usuario = usuario;
        },
        enumerable: true,
        configurable: true
    });
    UsuarioServico.prototype.usuario_autenticado = function () {
        return this._usuario != null && this._usuario.email != "" && this._usuario.senha != "";
    };
    UsuarioServico.prototype.limpar_sessao = function () {
        sessionStorage.setItem("usuario-autenticado", "0");
        this._usuario = null;
    };
    Object.defineProperty(UsuarioServico.prototype, "headers", {
        get: function () {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        },
        enumerable: true,
        configurable: true
    });
    UsuarioServico.prototype.verificaUsuario = function (usuario) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        var body = {
            email: usuario.email,
            senha: usuario.senha
        };
        //return this.http.post<Usuario>(this.baseURL + "api/usuario/VerificarUsuario", body, { headers });
        return this.http.post("https://localhost:44363/" + "api/usuario/VerificarUsuario", body, { headers: headers });
    };
    UsuarioServico.prototype.cadastrarUsuario = function (usuario) {
        //return this.http.post<Usuario>(this.baseURL + "api/usuario", body, { headers });
        return this.http.post("https://localhost:44363/" + "api/usuario", JSON.stringify(usuario), { headers: this.headers });
    };
    UsuarioServico = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], UsuarioServico);
    return UsuarioServico;
}());



/***/ }),

/***/ "./src/app/usuario/cadastro/cadastro.usuario.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/usuario/cadastro/cadastro.usuario.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signin{\r\n  width: 100%;\r\n  max-width: 420px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.form-signin input[type=\"email\"]\r\n{\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin .form-control{\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.login{\r\n  color: #666;\r\n}\r\n"

/***/ }),

/***/ "./src/app/usuario/cadastro/cadastro.usuario.component.html":
/*!******************************************************************!*\
  !*** ./src/app/usuario/cadastro/cadastro.usuario.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n  <form class=\"form-signin\">\r\n    <h1 class=\"h4 mb-2 login\">Criar conta</h1>\r\n\r\n    <label for=\"inputEmail\" class=\"sr-only\">Email</label>\r\n    <input type=\"email\" id=\"inputEmail\"\r\n           name=\" = email\" placeholder=\"Email\"\r\n           class=\"form-control mb-2\"\r\n           #email=\"ngModel\"\r\n           [ngClass]=\"{\r\n            'is-invalid':email.invalid && (email.touched || email.dirty),\r\n            'is-valid':email.valid && (email.touched || email.dirty)\r\n           }\"\r\n           [(ngModel)]=\"usuario.email\"\r\n           required />\r\n\r\n    <div class=\"invalid-feedback mb-2\" *ngIf=\"email.invalid && (email.touched || email.dirty)\">\r\n      <div *ngIf=\"email.errors.required\">\r\n        Email inválido!\r\n      </div>\r\n      <div *ngIf=\"email.errors.email\">\r\n        Email está no formato inválido!\r\n      </div>\r\n    </div>\r\n\r\n    <label for=\"inputSenha\" class=\"sr-only\">Senha</label>\r\n    <input type=\"password\" id=\"inputSenh\"\r\n           name=\"senha\" placeholder=\"Senha\"\r\n           class=\"form-control mb-2\"\r\n           #senha=\"ngModel\"\r\n           [(ngModel)]=\"usuario.senha\"\r\n           [ngClass]=\"{\r\n            'is-invalid':senha.invalid && (senha.touched || senha.dirty),\r\n            'is-valid':senha.valid && (senha.touched || senha.dirty)\r\n           }\"\r\n           required />\r\n\r\n    <div class=\"invalid-feedback mb-2\" *ngIf=\"senha.invalid && (senha.dirty || senha.touched)\">\r\n      <div *ngIf=\"senha.errors.required\">\r\n        Senha inválida!\r\n      </div>\r\n    </div>\r\n\r\n    <label for=\"inputNome\" class=\"sr-only\">Nome</label>\r\n    <input type=\"text\" id=\"inputNome\"\r\n           name=\" = nome\" placeholder=\"Nome\"\r\n           class=\"form-control mb-2\"\r\n           #nome=\"ngModel\"\r\n           [ngClass]=\"{\r\n            'is-invalid':nome.invalid && (nome.touched || nome.dirty),\r\n            'is-valid':nome.valid && (nome.touched || nome.dirty)\r\n           }\"\r\n           [(ngModel)]=\"usuario.nome\"\r\n           required />\r\n\r\n    <div class=\"invalid-feedback mb-2\" *ngIf=\"nome.invalid && (nome.touched || nome.dirty)\">\r\n      <div *ngIf=\"nome.errors.required\">\r\n        Nome é de preenchimento obrigatório!\r\n      </div>\r\n    </div>\r\n\r\n    <label for=\"inputSobreNome\" class=\"sr-only\">Sobre nome</label>\r\n    <input type=\"text\" id=\"inputSobreNome\"\r\n           name=\" = sobreNome\" placeholder=\"Sobre Nome\"\r\n           class=\"form-control mb-2\"\r\n           #sobreNome=\"ngModel\"\r\n           [ngClass]=\"{\r\n            'is-invalid':sobreNome.invalid && (sobreNome.touched || sobreNome.dirty),\r\n            'is-valid':sobreNome.valid && (sobreNome.touched || sobreNome.dirty)\r\n           }\"\r\n           [(ngModel)]=\"usuario.sobreNome\"\r\n           required />\r\n\r\n    <div class=\"invalid-feedback mb-2\" *ngIf=\"sobreNome.invalid && (sobreNome.touched || sobreNome.dirty)\">\r\n      <div *ngIf=\"sobreNome.errors.required\">\r\n        Sobre Nome é de preenchimento obrigatório!\r\n      </div>\r\n    </div>\r\n\r\n    <button class=\"btn btn-primary btn-block mb-2\" type=\"submit\" (click)=\"cadastrar()\" [disabled]=\"ativar_spinner\">\r\n      <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\" *ngIf=\"ativar_spinner\"></span>\r\n      Cadastrar\r\n    </button>\r\n    <div><a [routerLink]='[\"/entrar\"]'>Voltar</a></div>\r\n    <div class=\"alert alert-danger mb-2\" *ngIf=\"mensagem\">\r\n      {{mensagem}}\r\n    </div>\r\n<<<<<<< HEAD\r\n=======\r\n\r\n    <div class=\"alert alert-success\" *ngIf=\"usuarioCadastrado\">\r\n      Usuario cadastrado com sucesso!<a class=\"alert-link\" [routerLink]='[\"/entrar\"]'> Clique aqui</a> para entrar com a sua conta.\r\n    </div> \r\n\r\n>>>>>>> alteração de nome de pasta\r\n    <img src=\"../../../assets/img/QuickBuy-logo.jpg\" />\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/usuario/cadastro/cadastro.usuario.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/usuario/cadastro/cadastro.usuario.component.ts ***!
  \****************************************************************/
/*! exports provided: CadastroUsuarioComponet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroUsuarioComponet", function() { return CadastroUsuarioComponet; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modelo_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modelo/usuario */ "./src/app/modelo/usuario.ts");
/* harmony import */ var _servicos_usuario_usuario_servico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicos/usuario/usuario.servico */ "./src/app/servicos/usuario/usuario.servico.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CadastroUsuarioComponet = /** @class */ (function () {
    function CadastroUsuarioComponet(usuarioServico) {
        this.usuarioServico = usuarioServico;
    }
    CadastroUsuarioComponet.prototype.ngOnInit = function () {
        this.usuario = new _modelo_usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "cadastro-usuario",
            template: __webpack_require__(/*! ./cadastro.usuario.component.html */ "./src/app/usuario/cadastro/cadastro.usuario.component.html"),
            styles: [__webpack_require__(/*! ./cadastro.usuario.component.css */ "./src/app/usuario/cadastro/cadastro.usuario.component.css")]
        }),
        __metadata("design:paramtypes", [_servicos_usuario_usuario_servico__WEBPACK_IMPORTED_MODULE_2__["UsuarioServico"]])
    ], CadastroUsuarioComponet);
    return CadastroUsuarioComponet;
}());



/***/ }),

/***/ "./src/app/usuario/login/login.component.css":
/*!***************************************************!*\
  !*** ./src/app/usuario/login/login.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signin{\r\n  width: 100%;\r\n  max-width: 420px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.form-signin input[type=\"email\"]\r\n{\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin .form-control{\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.login{\r\n  color: #666;\r\n}\r\n"

/***/ }),

/***/ "./src/app/usuario/login/login.component.html":
/*!****************************************************!*\
  !*** ./src/app/usuario/login/login.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n  <form class=\"form-signin\">\r\n    <h1 class=\"h4 mb-2 login\">Login do Cliente</h1>\r\n\r\n    <label for=\"inputEmail\" class=\"sr-only\">Email</label>\r\n    <input type=\"email\" id=\"inputEmail\"\r\n           name=\" = email\" placeholder=\"Informe o seu Email\"\r\n           class=\"form-control mb-2\"\r\n           #email=\"ngModel\"\r\n           [ngClass]=\"{\r\n            'is-invalid':email.invalid && (email.touched || email.dirty),\r\n            'is-valid':email.valid && (email.touched || email.dirty) \r\n           }\"\r\n           [(ngModel)]=\"usuario.email\" \r\n           required/>\r\n\r\n    <div class=\"invalid-feedback mb-2\" *ngIf=\"email.invalid && (email.touched || email.dirty)\">\r\n      <div *ngIf=\"email.errors.required\">\r\n        Email inválido!\r\n      </div>\r\n      <div *ngIf=\"email.errors.email\">\r\n        Email está no formato inválido!\r\n      </div>\r\n    </div>\r\n\r\n    <label for=\"inputSenha\" class=\"sr-only\">Senha</label>\r\n    <input type=\"password\" id=\"inputSenh\"\r\n           name=\"senha\" placeholder=\"Senha\"\r\n           class=\"form-control mb-2\"\r\n           #senha=\"ngModel\"\r\n           [(ngModel)]=\"usuario.senha\"\r\n            [ngClass]=\"{\r\n            'is-invalid':senha.invalid && (senha.touched || senha.dirty),\r\n            'is-valid':senha.valid && (senha.touched || senha.dirty) \r\n           }\"          \r\n           required/>\r\n\r\n    <div class=\"invalid-feedback mb-2\" *ngIf=\"senha.invalid && (senha.dirty || senha.touched)\">\r\n      <div *ngIf=\"senha.errors.required\">\r\n        Senha inválida!\r\n      </div>\r\n    </div>\r\n\r\n    <button class=\"btn btn-primary btn-block mb-2\" type=\"submit\" (click)=\"entrar()\" [disabled]=\"ativar_spinner\">\r\n      <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"  *ngIf=\"ativar_spinner\"></span>\r\n      Entrar\r\n    </button>\r\n    <div>Novo por aqui? <a [routerLink]='[\"/novo-usuario\"]'>Cadastre-se</a></div>\r\n\r\n    <div class=\"alert alert-danger mb-2\" *ngIf=\"mensagem\">\r\n      {{mensagem}}\r\n    </div>\r\n    <img src=\"../../../assets/img/QuickBuy-logo.jpg\"/>\r\n\r\n  </form>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/usuario/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/usuario/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modelo_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modelo/usuario */ "./src/app/modelo/usuario.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicos_usuario_usuario_servico__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicos/usuario/usuario.servico */ "./src/app/servicos/usuario/usuario.servico.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, activatedRouter, usuarioServico) {
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.usuarioServico = usuarioServico;
        this.usuario = new _modelo_usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/usuario/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/usuario/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _servicos_usuario_usuario_servico__WEBPACK_IMPORTED_MODULE_3__["UsuarioServico"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projetos\QuickBuy\calendario\CODIGO-FONTE\QuickBuy.Web\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map