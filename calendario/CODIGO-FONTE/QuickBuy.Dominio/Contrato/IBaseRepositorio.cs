﻿using System;
using System.Collections;
using System.Collections.Generic;

namespace QuickBuy.Dominio.Contrato
{
    public interface IBaseRepositorio<TEntity> : IDisposable where TEntity : class
    {
        void Adicionar(TEntity entity);
        TEntity ObterPorId(int id);
        IEnumerable<TEntity> ObterTodos();
        IEnumerable<TEntity> ItemPorPagina(int pagina);
        void Atualizar(TEntity entity);
        void Remover(TEntity entity);
        decimal quantidadeElementos();
    }
}
