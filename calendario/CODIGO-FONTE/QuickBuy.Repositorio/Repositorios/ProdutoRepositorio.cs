using QuickBuy.Dominio.Contrato;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Repositorio.Contexto;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Repositorio.Repositorios
{
    public class ProdutoRepositorio : BaseRepositorio<Produto>, IProdutoRepositorio 
    {
        public ProdutoRepositorio(QuickBuyContexto quickBuyContexto) : base(quickBuyContexto)
        {

        }

        public List<Produto> ObterProdutos(int faixaInicial, int faixaFinal)
        {
            return QuickBuyContexto.Produtos
                .Where(p => p.Id >= faixaInicial && p.Id <= faixaFinal)
                .ToList();
        }

    }
}
