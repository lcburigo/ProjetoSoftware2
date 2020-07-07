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

        public List<Pedido> ObterPedidos(DateTime faixaInicial, DateTime faixaFinal, int pagina)
        {
            int qtdadeItens = 5;
            return QuickBuyContexto.Pedidos
                .Where(p => p.DataPedido >= faixaInicial && p.DataPedido <= faixaFinal).Skip(qtdadeItens * pagina).Take(qtdadeItens).ToList();

        }

        public decimal totalElementosPeriodo(DateTime dataInicial, DateTime dataFinal)
        {
            decimal maximoElementos = 5;
            decimal numeroDeElementos = 0;

            numeroDeElementos = QuickBuyContexto.Pedidos.Where(p => p.DataPedido >= dataInicial && p.DataPedido <= dataFinal).Count();
            maximoElementos = numeroDeElementos / maximoElementos;
            return Math.Ceiling(maximoElementos);
        }

        public decimal totalFaturadoPeriodo(DateTime faixaInicial, DateTime faixaFinal)
        {
            decimal totalPeriodo = 0;
            List<Pedido> pedidos = new List<Pedido>();
            pedidos = QuickBuyContexto.Pedidos
                          .Where(p => p.DataPedido >= faixaInicial && p.DataPedido <= faixaFinal)
                          .ToList();

            foreach (Pedido pedido in pedidos)
            {
                foreach(Itempedido item in pedido.ItensPedido)
                {
                    totalPeriodo = totalPeriodo + item.preco;
                }
            }

            return totalPeriodo;
        }
    }
}
