﻿using System;

namespace QuickBuy.Dominio.Entidades
{
    public class Itempedido : Entidade
    {
        public int Id { get; set; }
        public int ProdutoId { get; set; }
        public int Quantidade { get; set; }
        public decimal preco { get; set; }
        public string NomeProduto { get; set; }

        public override void Validate()
        {            
            if (Quantidade == 0)
                AdicionarCritica("Quantidade não informada");

            if (preco <= 0)
                AdicionarCritica("Atenção - Preço inválido");
        }
    }
}
