using QuickBuy.Dominio.Contrato;
using QuickBuy.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Repositorio.Repositorios
{
    public class PedidoRepositorio : BaseRepositorio<Pedido>, IPedidoRepositorio
    {
        public PedidoRepositorio(Contexto.QuickBuyContexto quickBuyContexto) : base(quickBuyContexto)
        {

        }

        public List<Pedido> ObterPedidos()
        {
            throw new NotImplementedException();
        }
    }
}
