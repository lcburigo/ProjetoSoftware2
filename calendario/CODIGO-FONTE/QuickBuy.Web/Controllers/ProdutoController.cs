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

namespace QuickBuy.Web.Controllers
{
    [Route ("api/[Controller]")]
    public class ProdutoController : Controller
    {
        private readonly IProdutoRepositorio _produtoRepositorio;


        public ProdutoController(IProdutoRepositorio produtoRepositorio)
        {
            _produtoRepositorio = produtoRepositorio;
        }

        private IHttpContextAccessor _httpContextAccessor;
        private IHostingEnvironment _hostingEnviroment;
        public ProdutoController(IProdutoRepositorio produtoRepositorio, 
                                    IHttpContextAccessor httpContextAccessor, 
                                         IHostingEnvironment hostingEnvironment)
        {
            _produtoRepositorio  = produtoRepositorio;
            _httpContextAccessor = httpContextAccessor;
            _hostingEnviroment   = hostingEnvironment;

        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_produtoRepositorio.ObterTodos());
            }catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
        [HttpPost]
        public IActionResult Post([FromBody]Produto produto)
        {
            try
            {
                _produtoRepositorio.Adicionar(produto);
                return Created("api/produto", produto);

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
                var formFile    = _httpContextAccessor.HttpContext.Request.Form.Files["arquivoEnviado"];
                var nomeArquivo = formFile.FileName;
                var extensao = nomeArquivo.Split(".").Last();
                var arrayNomeCompacto = Path.GetFileNameWithoutExtension(nomeArquivo).Take(10).ToArray();
                var novoNomeArquivo = new string(arrayNomeCompacto).Replace(" ", "-") + "." + extensao;
                var pastaArquivos = _hostingEnviroment.WebRootPath + "\\arquivos\\";
                var nomeCompleto = pastaArquivos + novoNomeArquivo;

                using(var streamArquivo = new FileStream(nomeCompleto, FileMode.Create))
                {
                    formFile.CopyTo(streamArquivo);
                }

                return Ok("Arquivo enviado com sucesso");
                
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

    }
}
