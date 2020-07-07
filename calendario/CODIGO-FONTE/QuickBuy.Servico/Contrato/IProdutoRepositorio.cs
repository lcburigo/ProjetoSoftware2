using QuickBuy.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.Contrato
{
    public interface IProdutoRepositorio : IBaseRepositorio<Produto>
    {
        List<Produto> ObterProdutos(int faixaInicial, int faixaFinal);
    }
}
