using QuickBuy.Dominio.ObjetoDeValor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public class Pedido : Entidade
    {
        public int Id { get; set; }
        public DateTime DataPedido { get; set; }
        public int UsuarioId { get; set; }
        public virtual Usuario Usuario { get; set; }
        public DateTime DataPrevisaoEntrega { get; set; }
        public string CEP { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string EnderecoCompleto { get; set; }
        public int FormaPagamentoId{ get; set; }
        public int NumeroEndereco { get; set; }
        public virtual FormaPagamento FormaPagamento { get; set; }  

        ///Pedido deve ter pelo menos um item ou muitos itens
        public virtual ICollection<Itempedido> ItensPedido { get; set; }

        public override void Validate()
        {
            LimparMensagensValidacao();

            if (!ItensPedido.Any())
                AdicionarCritica("Atenção - Pedido não pode ficar sem item de pedido");
            
            if (string.IsNullOrEmpty(CEP))
                AdicionarCritica("Atenção - CEP inválido");

            if (FormaPagamentoId == 0)
                AdicionarCritica("Atenção - Não foi informado a forma de pagamento");
            
        }
    }
}
