using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Servico.ObjetoDeValor
{
    class DownloadArquivo
    {

        public void download( )
        {
            // Obtendo URL do arquivo a ser baixado e caminho de destino
            // do mesmo
            string urlArquivo =
                "https://localhost:44363/entrar";
            string caminhoArquivo =
                @"C:\Projetos\QuickBuy\calendario\CODIGO-FONTE\QuickBuy.Web\wwwroot\arquivos\111511962S_2020_4_21_13_39_37.jpg";

            // Outras instruções de código...

            // Efetuando o download
            System.Net.WebClient client =
                new System.Net.WebClient();
            client.DownloadFile(urlArquivo, caminhoArquivo);

        }

    }
}
