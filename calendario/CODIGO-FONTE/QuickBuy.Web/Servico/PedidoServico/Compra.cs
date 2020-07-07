using QuickBuy.Dominio.Contrato;
using QuickBuy.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickBuy.Web.Servico.PedidoServico
{
    public class Compra
    {
        private readonly IPedidoRepositorio _pedidoRepositorio;
        private readonly IProdutoRepositorio _produtoRepositorio;

        public Compra(IPedidoRepositorio pedidoRepositorio, IProdutoRepositorio produtoRepositorio)
        {
            this._pedidoRepositorio = pedidoRepositorio;
            this._produtoRepositorio = produtoRepositorio;
            
        }

        public bool efetivaCompra(Pedido pedido)
        {
            try
            {
                pedido.Validate();
                if(!pedido.EhValido)
                {
                    return false;
                }

                foreach (Itempedido item in pedido.ItensPedido)
                {
                    if (!existeEstoque(item.ProdutoId, item.Quantidade))
                    {
                        return false;
                    }

                    if (!subtrairItemEstoque(item))
                    {
                        return false;
                    }

                }                
                return gerarPedido(pedido);
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public  bool existeEstoque(int idItem, int quantidade)
        {
            try
            {
                var item = this._produtoRepositorio.ObterPorId(idItem);
                return item.qtdArmazem > quantidade;

            }
            catch(Exception ex)
            {
                return false;
            }
        }

        private bool subtrairItemEstoque(Itempedido item)
        {
            try
            {
                var produto = this._produtoRepositorio.ObterPorId(item.ProdutoId);
                produto.qtdArmazem -= item.Quantidade;
                this._produtoRepositorio.Atualizar(produto);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        private bool gerarPedido(Pedido pedido)
        {
            this._pedidoRepositorio.Adicionar(pedido);
            return true;
        }

        public ICollection<Pedido> consultaPedidoPorData(DateTime dataInicial, DateTime dataFinal, int pagina)
        {
            return _pedidoRepositorio.ObterPedidos(dataInicial, dataFinal, pagina);
        }

        public decimal totalFaturadoPeriodo(DateTime dataInicial, DateTime dataFinal)
        {
            return _pedidoRepositorio.totalFaturadoPeriodo(dataInicial, dataFinal);
        }

        public decimal totalElementosPeriodo(DateTime dataInicial, DateTime dataFinal)
        {
            return _pedidoRepositorio.totalElementosPeriodo(dataInicial, dataFinal);
        }


        public Pedido consultaPedido(int idPedido)
        {
            return this._pedidoRepositorio.ObterPorId(idPedido);
        }

        public bool deletarPedido(Pedido pedido)
        {
            try
            {
                _pedidoRepositorio.Remover(pedido);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

    }
}
