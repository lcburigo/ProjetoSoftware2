using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using QuickBuy.Dominio.Contrato;
using QuickBuy.Dominio.ObjetoDeValor;
using QuickBuy.Dominio.Entidades;
using System;
using System.Collections.Generic;

using System.IO;

using System.Linq;
using System.Threading.Tasks;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[Controller]")]
    public class PedidoController : Controller
    {
        private readonly IPedidoRepositorio _pedidoRepositorio;
        public PedidoController(IPedidoRepositorio pedidoRepositorio)
        {
            this._pedidoRepositorio = pedidoRepositorio;
        }

        [HttpPost]
        public IActionResult Post([FromBody]Pedido pedido)
        {
            try
            {
                _pedidoRepositorio.Adicionar(pedido);
                return Ok(pedido.Id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        //[HttpGet("{dataInicial}/{dataFinal}")]
        [HttpGet("pedidoData")]
        public IActionResult Get(DateTime dataInicial, DateTime dataFinal)
        {
            try
            {
                var variavelProdutoTeste = _pedidoRepositorio.ObterPedidos(dataInicial, dataFinal);
                return Json(variavelProdutoTeste);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpGet ("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var pedidoObtido = _pedidoRepositorio.ObterPorId(id);

                if (pedidoObtido != null)
                {
                    return Created("api/pedido", pedidoObtido);

                }
                return BadRequest("Pedido inválido");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }

        }

        [HttpPost("Deletar")]
        public IActionResult Deletar([FromBody] Pedido pedido)
        {
            try
            {
                // produto recebido deve ter propriedade Id > 0
                _pedidoRepositorio.Remover(pedido);
                return Ok(pedido.Id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }

        }
    }
}
