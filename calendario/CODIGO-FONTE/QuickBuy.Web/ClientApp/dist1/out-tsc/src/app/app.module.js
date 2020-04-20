"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var nav_menu_component_1 = require("./nav-menu/nav-menu.component");
var home_component_1 = require("./home/home.component");
var produto_component_1 = require("./produto/produto.component");
var login_component_1 = require("./usuario/login/login.component");
var usuario_servico_1 = require("./servicos/usuario/usuario.servico");
var cadastro_usuario_component_1 = require("./usuario/cadastro/cadastro.usuario.component");
var produto_servico_1 = require("./servicos/produto/produto.servico");
var pesquisa_produto_component_1 = require("./produto/pesquisa/pesquisa.produto.component");
var loja_pesquisa_component_1 = require("./loja/pesquisa/loja.pesquisa.component");
var ng2_truncate_1 = require("ng2-truncate");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_menu_component_1.NavMenuComponent,
                home_component_1.HomeComponent,
                produto_component_1.ProdutoComponent,
                login_component_1.LoginComponent,
                cadastro_usuario_component_1.CadastroUsuarioComponet,
                pesquisa_produto_component_1.PesquisaProdutoComponet,
                loja_pesquisa_component_1.LojaPesquisaComponent
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
                http_1.HttpClientModule,
                forms_1.FormsModule,
                ng2_truncate_1.TruncateModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
                    { path: 'produto', component: produto_component_1.ProdutoComponent },
                    { path: 'entrar', component: login_component_1.LoginComponent },
                    { path: "novo-usuario", component: cadastro_usuario_component_1.CadastroUsuarioComponet },
                    { path: "pesquisar-produto", component: pesquisa_produto_component_1.PesquisaProdutoComponet }
                ])
            ],
            providers: [usuario_servico_1.UsuarioServico, produto_servico_1.ProdutoServico],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//{ path: 'produto', component: ProdutoComponent, canActivate: [GuardaRotas] },
//# sourceMappingURL=app.module.js.map