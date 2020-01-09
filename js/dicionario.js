
  function setMensagemDicionario(tipo, msg)
  {
    if (msg.length > 0)
    {
            document.getElementById("errodicionario").innerHTML="<h3>"+tipo+"</h3><p>"+msg+"</p>";
            w3.show("#errodicionario");
    } else {
            document.getElementById("errodicionario").innerHTML="&nbsp;";
            w3.hide("#errodicionario");
   }
  }

function limparDicionario()
{
        document.getElementById("textoPesquisaDicionario").value="";
        document.getElementById("saidaDicionario").innerHTML="";
        setMensagemDicionario("","");
}

/*
var tempTexto="";

function traduzirTexto(sl, tl, sourceText)
   {
      var sourceLang = sl;
      var targetLang = tl;
      var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" 
            + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
  
      w3.getHttpObject(url,coletarTexto);
   }

function coletarTexto(json)
{
     var tt=json[0][0][0];
     tempTexto = tt;   
}
*/

async function significadoDicionario(palavra)
{
        var dicionario1=[];
        var dicionario2=[];
        var achou1 = false;
        var achou2 = false;
        var saida = "";
        setMensagemDicionario("","");
        var chave = palavra.trim().toLowerCase();
        if (isPortugues())
        {
           dicionario1 = base1;
           dicionario2 = base2;
        }
        if (isIngles())
        {
           dicionario1 = base1_en;
        }
        if (isFrances())
        {
           dicionario1 = base1_fr;
        }
        if (isEspanhol())
        {
           dicionario1 = base1_es;
        }

        for(var i=0; i < dicionario1.length; i++)
        {
            if (chave==dicionario1[i].palavra.trim().toLowerCase()){
                saida = saida + "<h3>" + palavra + "</h3><br>" + dicionario1[i].texto + "<p>&nbsp;</p><p>&nbsp;</p>";
                achou1 = true;
                break;
            }
        }

          for(var i=0; i < dicionario2.length; i++)
          {
              if (chave==dicionario2[i].palavra.toLowerCase()){
                  saida = saida + "<br><h3>" + palavra + "</h3><br>" + dicionario2[i].texto + "<p>&nbsp;</p><p>&nbsp;</p>";
                  achou2 = true;
                  break;
              }
          }

        if (!achou1 && !achou2) {
          setMensagemDicionario("ALERTA","Palavra n&atilde;o encontrada na base de dados.");
        } else {
          document.getElementById("saidaDicionario").innerHTML = saida;
        }

  abrirTela('dicionario');
}

function pesquisarDicionario() {
        var busca = document.getElementById("textoPesquisaDicionario");
        significadoDicionario(busca.value);
}

function carregarDicionarioLetra(letra)
{
   var elemento = document.getElementById("listapalavras");
   str = "";
   for(var i = 0; i < base2.length; i++)
   {
        if (letra.toUpperCase() == base2[i].palavra[0].toUpperCase())
        {
           if (i % 2 == 0)
           {
             str += "<div class='w3-container w3-gray' onclick='significadoDicionario(\""+base2[i].palavra+"\")'>" +base2[i].palavra+ "</div>";
           } else {
             str += "<div class='w3-container w3-teal' onclick='significadoDicionario(\""+base2[i].palavra+"\")'>" +base2[i].palavra+ "</div>";
           }
        }
   }
   elemento.innerHTML=str+"<p>&nbsp;</p><p>&nbsp;</p>";
   abrirTela('dicionariolistapalavras');
}
