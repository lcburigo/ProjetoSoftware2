using Microsoft.AspNetCore.Mvc;
﻿using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using QuickBuy.Dominio.Contrato;
using QuickBuy.Dominio.Entidades;
using System;
using System.Collections.Generic;

using System.IO;

using System.Linq;
using System.Threading.Tasks;
using QuickBuy.Web.Servico.ProdutoServico;

namespace QuickBuy.Web.Controllers
{
    [Route ("api/[Controller]")]
    public class ProdutoController : Controller
    {
        private readonly IProdutoRepositorio _produtoRepositorio;       
        private IHttpContextAccessor _httpContextAccessor;
        private IHostingEnvironment _hostingEnvironment;
        private readonly CadastroProduto _produto;
        public ProdutoController(IProdutoRepositorio produtoRepositorio, 
                                     IHttpContextAccessor httpContextAccessor, IHostingEnvironment hostingEnvironment)
        {
            _produtoRepositorio = produtoRepositorio;
            _httpContextAccessor = httpContextAccessor;
            _hostingEnvironment = hostingEnvironment;
            _produto = new CadastroProduto(_produtoRepositorio);

        }


        [HttpGet("produtoPaginacao")]
        public IActionResult Get(int page)
        {
            try
            {
                return Json(_produtoRepositorio.ItemPorPagina(page));
                //return Json(_produtoRepositorio.ObterProdutos(3, 10));
            }
            catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpGet("numeroDePaginas")]
        public IActionResult GetNumeroElementos()
        {
            try
            {
                return Ok (_produtoRepositorio.quantidadeElementos());
            }
            catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]Produto produto)
        {
            try
            {
                produto.Validate();
                if(!produto.EhValido)
                {
                    return BadRequest(produto.ObterMensagensValidacao());
                }
                _produto.cadastroProduto(produto);
                return Created("api/produto", produto);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("Deletar")]
        public IActionResult Deletar([FromBody] Produto produto)
        {
            try
            {
                // produto recebido deve ter propriedade Id > 0
                _produtoRepositorio.Remover(produto);
                return Json(_produtoRepositorio.ObterTodos());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }

        }

        [HttpPost("EnviarArquivo")]
        public IActionResult EnviarArquivo()
        {
            try
            {
                var formFile = _httpContextAccessor.HttpContext.Request.Form.Files["arquivoEnviado"];
                var nomeArquivo = formFile.FileName;
                var extensao = nomeArquivo.Split(".").Last();
                string novoNomeArquivo = GerarNovoNomeArquivo(nomeArquivo);
                var pastaArquivos = _hostingEnvironment.WebRootPath + "\\arquivos\\";             
                var nomeCompleto = pastaArquivos + novoNomeArquivo + "." + extensao;
                novoNomeArquivo = novoNomeArquivo + "." + extensao;
                using (var streamArquivo = new FileStream(nomeCompleto, FileMode.Create))
                {
                    formFile.CopyTo(streamArquivo);
                }
                
                return Json(novoNomeArquivo);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        private static string GerarNovoNomeArquivo(string nomeArquivo)
        {
            var arrayNomeCompacto = Path.GetFileNameWithoutExtension(nomeArquivo).Take(10).ToArray();
            var novoNomeArquivo = new string(arrayNomeCompacto).Replace(" ", "-");
            novoNomeArquivo = $"{novoNomeArquivo}_{DateTime.Now.Year}_{DateTime.Now.Month}" +
                                               $"_{DateTime.Now.Day}_{DateTime.Now.Hour}_{DateTime.Now.Minute}_{DateTime.Now.Second}";
            return novoNomeArquivo;
        }
    }
}
