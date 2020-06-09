using QuickBuy.Dominio.Contrato;
using QuickBuy.Dominio.Entidades;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Repositorio.Repositorios
{
    public class PedidoRepositorio : BaseRepositorio<Pedido>, IPedidoRepositorio
    {
        public PedidoRepositorio(Contexto.QuickBuyContexto quickBuyContexto) : base(quickBuyContexto)
        {

        }

        public List<Pedido> ObterPedidos(DateTime faixaInicial, DateTime faixaFinal)
        {
            return QuickBuyContexto.Pedidos
                .Where(p => p.DataPedido >= faixaInicial && p.DataPedido <= faixaFinal)
                .ToList();
        }
    }
}
