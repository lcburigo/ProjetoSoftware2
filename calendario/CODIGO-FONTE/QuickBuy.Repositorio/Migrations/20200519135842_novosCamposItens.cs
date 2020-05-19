using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickBuy.Repositorio.Migrations
{
    public partial class novosCamposItens : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "NomeProduto",
                table: "ItensPedidos",
                maxLength: 50,
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NomeProduto",
                table: "ItensPedidos");
        }
    }
}
