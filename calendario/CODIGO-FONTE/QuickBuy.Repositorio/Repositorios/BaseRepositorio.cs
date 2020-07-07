using QuickBuy.Dominio.Contrato;
using QuickBuy.Repositorio.Contexto;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Repositorio.Repositorios
{
    public class BaseRepositorio<TEntity> : IBaseRepositorio<TEntity> where TEntity : class
    {
        protected readonly QuickBuyContexto QuickBuyContexto;

        public BaseRepositorio(QuickBuyContexto quickBuyContexto)
        {
            QuickBuyContexto = quickBuyContexto;
        }
        public void Adicionar(TEntity entity)
        {
            QuickBuyContexto.Set<TEntity>().Add(entity);
            QuickBuyContexto.SaveChanges();
        }

        public void Atualizar(TEntity entity)
        {
            QuickBuyContexto.Set<TEntity>().Update(entity);
            QuickBuyContexto.SaveChanges();
        }

        public TEntity ObterPorId(int id)
        {
            return QuickBuyContexto.Set<TEntity>().Find(id);
        }

        public IEnumerable<TEntity> ObterTodos()
        {
            return QuickBuyContexto.Set<TEntity>().ToList();   
        }

        public decimal  quantidadeElementos()
        {
            decimal maximoElementos = 2;
            decimal numeroDeElementos = 0;
            numeroDeElementos = QuickBuyContexto.Set<TEntity>()
                                     .Count();
            maximoElementos = numeroDeElementos / maximoElementos;
            return Math.Ceiling(maximoElementos);
        }

        public IEnumerable<TEntity> ItemPorPagina(int pagina)
        {
            int qtdadeItens = 2;
            return QuickBuyContexto.Set<TEntity>()
                       .Skip(qtdadeItens * pagina).Take(qtdadeItens).ToList();
        }


        public void Remover(TEntity entity)
        {
            QuickBuyContexto.Remove(entity);
            QuickBuyContexto.SaveChanges();
        }
        public void Dispose()
        {
            QuickBuyContexto.Dispose();
        }
    }
}
