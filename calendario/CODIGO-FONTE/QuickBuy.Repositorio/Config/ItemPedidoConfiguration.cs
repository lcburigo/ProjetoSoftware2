using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Repositorio.Config
{
    public class ItemPedidoConfiguration : IEntityTypeConfiguration<Itempedido>
    {
        public void Configure(EntityTypeBuilder<Itempedido> builder)
        {
            builder.HasKey(i => i.Id);

            builder
                .Property(i => i.ProdutoId)
                .IsRequired();

            builder
                .Property(i => i.Quantidade)
                .IsRequired();

            builder
                .Property(p => p.preco)
                .HasColumnType("decimal(19,4)")
                .IsRequired();

            builder
                .Property(p => p.NomeProduto)
                .IsRequired()
                .HasMaxLength(50);

        }
    }
}
