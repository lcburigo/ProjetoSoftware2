using QuickBuy.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.Contrato
{
    public interface IPedidoRepositorio : IBaseRepositorio<Pedido>
    {
        decimal totalElementosPeriodo(DateTime dataInicial, DateTime dataFinal);
        List<Pedido> ObterPedidos(DateTime faixaInicial, DateTime faixaFinal, int pagina);
        decimal totalFaturadoPeriodo(DateTime faixaInicial, DateTime faixaFinal);
    }
}
