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
using QuickBuy.Web.Servico.PedidoServico;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[Controller]")]
    public class PedidoController : Controller
    {
        private readonly IPedidoRepositorio _pedidoRepositorio;
        private readonly IProdutoRepositorio _produtoRepositorio;
        private readonly Compra _compra;
        public PedidoController(IPedidoRepositorio pedidoRepositorio, IProdutoRepositorio produtoRepositorio)
        {
            this._pedidoRepositorio = pedidoRepositorio;
            this._produtoRepositorio = produtoRepositorio;
            this._compra = new Compra(this._pedidoRepositorio, this._produtoRepositorio);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Pedido pedido)
        {
            try
            {
                this._compra.efetivaCompra(pedido);
                return Ok(pedido.Id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        //[HttpGet("{dataInicial}/{dataFinal}")]
        [HttpGet("pedidoData")]
        public IActionResult Get(DateTime dataInicial, DateTime dataFinal, int pagina)
        {
            try
            {  
                return Json(this._compra.consultaPedidoPorData(dataInicial, dataFinal, pagina));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpGet("totalFaturadoPeriodo")]
        public IActionResult GetTotalPeriodo(DateTime dataInicial, DateTime dataFinal)
        {
            try
            {
                return Ok(this._compra.totalFaturadoPeriodo(dataInicial, dataFinal));
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
                var pedidoObtido = this._compra.consultaPedido(id);

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
                _compra.deletarPedido(pedido);
                return Ok(pedido.Id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }

        }

        [HttpGet("numeroDePaginas")]
        public IActionResult GetNumeroElementos(DateTime dataInicial, DateTime dataFinal)
        {
            try
            {
                return Ok(_compra.totalElementosPeriodo(dataInicial, dataFinal));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
