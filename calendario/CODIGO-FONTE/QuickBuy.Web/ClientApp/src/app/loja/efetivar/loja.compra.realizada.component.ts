import { Component, OnInit} from "@angular/core";

@Component({
    selector: "compra-realizada-sucesso",
    templateUrl: "./loja.compra.realizada.component.html"
})

export class LojaCompraRealizadaComponent implements OnInit
{
    public pedidoId: string;

    ngOnInit(): void {
        this.pedidoId = sessionStorage.getItem("pedidoId");
    }

}
