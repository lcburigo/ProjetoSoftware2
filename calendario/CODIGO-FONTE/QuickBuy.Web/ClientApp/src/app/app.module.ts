import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { LoginComponent } from './usuario/login/login.component';
import { GuardaRotas } from '../../autorizacao/guarda.rotas';
import { UsuarioServico } from './servicos/usuario/usuario.servico';
import { CadastroUsuarioComponet } from './usuario/cadastro/cadastro.usuario.component';
import { ProdutoServico } from './servicos/produto/produto.servico';
import { PesquisaProdutoComponet } from './produto/pesquisa/pesquisa.produto.component';
import { LojaPesquisaComponent } from './loja/pesquisa/loja.pesquisa.component';
import { TruncateModule } from 'ng2-truncate';
import { LojaProdutoComponent } from './loja/produto/loja.produto.component';
import { LojaEfetivarComponent } from './loja/efetivar/loja.efetivar.component';
import { PedidoServico } from './servicos/pedido/pedido.servico';
import { LojaCompraRealizadaComponent } from './loja/efetivar/loja.compra.realizada.component';
import { LojaDadosEfetivarComponent } from './loja/efetivar/loja.dados.efetivar.component';
import { PedidoComponent } from './pedido/consulta/pedido.component';
import { FaturamentoComponent } from './pedido/faturamento/faturamento.component';
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
  declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        ProdutoComponent,
        LoginComponent,
        CadastroUsuarioComponet,
        PesquisaProdutoComponet,
        LojaPesquisaComponent,
        LojaProdutoComponent,
        LojaEfetivarComponent,
        LojaCompraRealizadaComponent,
        LojaDadosEfetivarComponent,
        PedidoComponent,
        FaturamentoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    CurrencyMaskModule,
    FormsModule,
    TruncateModule,
    RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'produto', component: ProdutoComponent, canActivate: [GuardaRotas] },
        { path: 'entrar', component: LoginComponent },
        { path: "novo-usuario", component: CadastroUsuarioComponet },
        { path: "pesquisar-produto", component: PesquisaProdutoComponet, canActivate: [GuardaRotas] },
        { path: "loja-produto", component: LojaProdutoComponent },
        { path: "loja-efetivar", component: LojaEfetivarComponent, canActivate: [GuardaRotas] },
        { path: "compra-realizada-sucesso", component: LojaCompraRealizadaComponent },
        { path: "dados-compra-entrega", component: LojaDadosEfetivarComponent },
        { path: "app-pedido", component: PedidoComponent, canActivate: [GuardaRotas] },
        { path: "app-faturamento", component: FaturamentoComponent, canActivate: [GuardaRotas] }
    ])
    ],
    providers: [UsuarioServico, ProdutoServico, PedidoServico],
  bootstrap: [AppComponent]
})
export class AppModule { }

//{ path: 'produto', component: ProdutoComponent, canActivate: [GuardaRotas] },
