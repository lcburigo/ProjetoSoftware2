using QuickBuy.Dominio.Contrato;
using QuickBuy.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickBuy.Web.Servico.ProdutoServico
{
    public class CadastroProduto
    {
        private readonly IProdutoRepositorio _produtoRepositorio;

        public CadastroProduto(IProdutoRepositorio produtoRepositorio)
        {
            this._produtoRepositorio = produtoRepositorio;
        }

        public bool cadastroProduto(Produto produto)
        {
            try
            {
                if (produto.Id == 0)
                {
                    _produtoRepositorio.Adicionar(produto);
                    return true;
                }
                else
                {
                    this.atualizarProduto(produto);
                    return true;
                }
            }
            catch (Exception)
            {
                return false;
            }
        }

        private bool atualizarProduto(Produto produto)
        {
            _produtoRepositorio.Atualizar(produto);
            return true;
        }



    }
}
