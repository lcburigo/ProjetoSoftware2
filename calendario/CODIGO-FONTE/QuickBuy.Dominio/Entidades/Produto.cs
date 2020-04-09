using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public class Produto : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal preco { get; set; }
        public string NomeArquivo { get; set; }

        public override void Validate()
        {
            if (string.IsNullOrEmpty(Nome))
                AdicionarCritica("Atenção - Nome inválido");

            if (string.IsNullOrEmpty(Descricao))
                AdicionarCritica("Atenção - Descrição de produto inválida");

            if (preco <= 0)
                AdicionarCritica("Atenção - Preço inválido");

        }
    }
}
