var vetorPlanoEstudo=[];
var posicaoPlanoEstudo;
var ultimoSelid;
var modoPlanoEstudo = 0;

getVetorPlanoEstudo=function(){ return vetorPlanoEstudo; }
setVetorPlanoEstudo=function(valor) { vetorPlanoEstudo=valor; }
getPosicaoPlanoEstudo=function() { return posicaoPlanoEstudo; }
setPosicaoPlanoEstudo=function(valor) { posicaoPlanoEstudo=valor; }
getUltimoSelid=function() { return ultimoSelid; }
setUltimoSelid=function(valor) { ultimoSelid=valor; }

var book;
var cap;
var vers;
var nomeversao;
var nomecap;
var b1;
var n1;
var versaoAtual=0;
var base="";
var gversos;
var buscasimples;
var bbuscasimples=false;
var versaoMarcacao;
var livroMarcacao;
var capituloMarcacao;
var versoMarcacao;
var livrosVelho=["G&ecirc;nesis","&Ecirc;xodo","Lev&iacute;tico","N&uacute;meros","Deuteron&ocirc;mio","Josu&eacute;","Ju&iacute;zes","Rute","1 Samuel", "2 Samuel", "1 Reis", "2 Reis",
                        "1 Cr&ocirc;nicas", "2 Cr&ocirc;nicas", "Esdras", "Neemias", "Ester", "J&oacute;",
                        "Salmos", "Prov&eacute;rbios","Eclesiastes","C&acirc;nticos","Isa&iacute;as","Jeremias","Lamenta&ccedil;&otilde;es de Jeremias","Ezequiel","Daniel","Os&eacute;ias","Joel","Am&oacute;s","Obadias",
                        "Jonas","Miqu&eacute;ias","Naum","Habacuque","Sofonias","Ageu","Zacarias","Malaquias"];
var livrosNovo=["Mateus","Marcos","Lucas","Jo&atilde;o","Atos","Romanos","1 Cor&iacute;ntios","2 Cor&iacute;ntios","G&aacute;latas","Ef&eacute;sios","Filipenses","Colossenses","1 Tessalonicenses","2 Tessalonicenses",
                       "1 Tim&oacute;teo","2 Tim&oacute;teo", "Tito", "Filemom", "Hebreus", "Tiago", "1 Pedro", "2 Pedro","1 Jo&atilde;o","2 Jo&atilde;o","3 Jo&atilde;o",
                       "Judas","Revelação"];
var livrosDeuterocanonicos=["Livro I","Livro II","Livro III","Livro IV","Livro V","Livro VI"];
var livrospt=["G&ecirc;nesis","&Ecirc;xodo","Lev&iacute;tico","N&uacute;meros","Deuteron&ocirc;mio","Josu&eacute;",
                        "Ju&iacute;zes","Rute","1 Samuel", "2 Samuel", "1 Reis", "2 Reis",
                        "1 Cr&ocirc;nicas", "2 Cr&ocirc;nicas", "Esdras", "Neemias", "Ester", "J&oacute;",
                        "Salmos", "Prov&eacute;rbios","Eclesiastes","C&acirc;nticos","Isa&iacute;as","Jeremias",
                        "Lamenta&ccedil;&otilde;es","Ezequiel","Daniel","Os&eacute;ias","Joel","Am&oacute;s","Obadias",
                        "Jonas","Miqu&eacute;ias","Naum","Habacuque","Sofonias","Ageu","Zacarias","Malaquias","Mateus","Marcos","Lucas","Jo&atilde;o","Atos","Romanos","1 Cor&iacute;ntios","2 Cor&iacute;ntios","G&aacute;latas","Ef&eacute;sios","Filipenses","Colossenses","1 Tessalonicenses","2 Tessalonicenses",
                        "1 Tim&oacute;teo","2 Tim&oacute;teo", "Tito", "Filemom", "Hebreus", "Tiago", "1 Pedro",
                        "2 Pedro","1 Jo&atilde;o","2 Jo&atilde;o","3 Jo&atilde;o","Judas","Revelação"];
var livroseng=['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi', 'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation'];
var livrosVelhoEng=['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi'];
var livrosNovoEng=['Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation'];
var abreveng=['Gen', 'Exo', 'Lev', 'Num', 'Deu', 'Jos', 'Jdg', 'Rut', '1Sa', '2Sa', '1Ki', '2Ki', '1Ch', '2Ch', 'Ezr', 'Neh', 'Est', 'Job', 'Psa', 'Pro', 'Ecc', 'Sng', 'Isa', 'Jer', 'Lam', 'Ezk', 'Dan', 'Hos', 'Jol', 'Amo', 'Oba', 'Jon', 'Mic', 'Nam', 'Hab', 'Zep', 'Hag', 'Zec', 'Mal', 'Mat', 'Mrk', 'Luk', 'Jhn', 'Act', 'Rom', '1Co', '2Co', 'Gal', 'Eph', 'Php', 'Col', '1Th', '2Th', '1Ti', '2Ti', 'Tit', 'Phm', 'Heb', 'Jas', '1Pe', '2Pe', '1Jn', '2Jn', '3Jn', 'Jud', 'Rev'];
var abrevpt=['Gn','Êx','Lv','Nm','Dt','Js','Jz','Rt','1Sm','2Sm','1Rs','2Rs','1Cr','2Cr','Ed','Ne','Et','Jó','Sl','Pv','Ec','Ct','Is','Jr','Lm','Ez','Dn','Os','Jl','Am','Ob','Jn','Mq','Na','Hb','Sf','Ag','Zc','Ml','Mt','Mc','Lc','Jo','At','Rm','1Co','2Co','Gl','Ef','Fp','Cl','1Ts','2Ts','1Tm','2Tm','Tt','Fm','Hb','Tg','1Pe','2Pe','1Jo','2Jo','3Jo','Jd','Ap'];
var livs=['GEN','EXO','LEV','NUM','DEU','JOS','JDG','RUT','1SA','2SA','1KI','2KI','1CH','2CH','EZR','NEH','EST','JOB','PSA','PRO','ECC','SNG','ISA','JER','LAM','EZK','DAN','HOS','JOL','AMO','OBA','JON','MIC','NAM','HAB','ZEP','HAG','ZEC','MAL','MAT', 'MRK', 'LUK', 'JHN', 'ACT', 'ROM', '1CO', '2CO', 'GAL', 'EPH', 'PHP', 'COL', '1TH', '2TH', '1TI', '2TI', 'TIT', 'PHM', 'HEB', 'JAS', '1PE', '2PE', '1JN', '2JN', '3JN', 'JUD', 'REV'];

var totalcapitulos = 1189;


tempselecao=[];
tempmarcacao=[];
tempcomentario=[];

var semanapt=['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
var semanaen=['Sunday','Monday','Tuesday','Wedsneday','Thursday','Friday','Saturday'];



function getCapituloMain()
{
    return cap;
}
function getLivroMain()
{
    return book;
}
function getVersiculoMain()
{
    return vers;
}
function getVersaoAtualMain()
{
    return versaoAtual;
}
function getBase(){
  return base;
}

function setCapituloMain(valor)
{
    cap=valor;
}
function setLivroMain(valor)
{
    book=valor;
}
function setVersiculoMain(valor)
{
    vers=valor;
}
function setVersaoAtualMain(valor)
{
    versaoAtual=valor;
}
function setBase(valor){
  base=valor;
}

//Possivel Solucao
//   requer plugin : cordova plugin add cordova-plugin-file
//
//   1. ler arquivo da nacionalidade escolhida (nao carregar mais na memoria)
//   2. JSON.parse
//   3. setBase
//
function lerArquivoBiblia(fileEntry) {

    fileEntry.file(function (file) {
        var reader = new FileReader();

        reader.onloadend = function() {
            console.log("Successful file read: " + this.result);
            displayFileData(fileEntry.fullPath + ": " + this.result);
        };

        var textobiblia = reader.readAsText(file);
        usarTexto(textobiblia);

    }, onErrorReadFile);
}

function usarTexto(texto){
     var temp = JSON.parse(texto);
     setBase(temp);
}


function getIdResultadosPorVersao(versao)
  {
     if (versao=='BLV') setVersaoAtualMain(0);
     else if (versao=='WEB') setVersaoAtualMain(1);
     else if (versao=='RVB') setVersaoAtualMain(3);
     else if (versao=='FOB') setVersaoAtualMain(4);
     carregarVersao();
     return getVersaoAtualMain();
  }

function loadVersion(versao)
{
	setVersaoAtualMain(versao);
	carregarVersao();
	carregar();
}
function carregarVersao2(c)
{
    loadVersion(c);
    abrirTela('leitura');
}

function getSiglaVersaoPorId(id)
{
   switch(id)
   {
      case 0: return "BLV";
      case 1: return "WEB";
      case 3: return "RVB";
      case 4: return "FOB";
   }
}

function getNomeVersaoPorId(id)
{
   switch(id)
   {
      case 0: return "Bíblia Livre";
      case 1: return "World English Bible";
      case 3: return "Reina Valera Biblia";
      case 4: return "Français Bible";
   }
}

function getSiglaVersaoPorNacionalidade()
{
  if (isPortugues()) return "BLV";
  if (isFrances()) return "FOB";
  if (isEspanhol()) return "RVB";
  if (isIngles()) return "WEB";
}


function getBibliaPorNacionalidade()
{
  if (isPortugues()) return blv;
  if (isFrances()) return fob;
  if (isEspanhol()) return rvb;
  if (isIngles()) return web;
}

function carregarVersao()
{
   base = getBibliaPorNacionalidade();
}

function numeroCapitulos()
{
   return base[getLivroMain()].qtecapitulos;
}


function extrairVerso(b,c,v)
{
  return base[b].capitulos[c][v];
}

function extrairVersoBase(baseversao,b,c,v)
{
  return baseversao[b].capitulos[c][v];
}

function extrairVersoBaseTipo1(baseversao,b,c,v)
{
  return baseversao[b-1].chapters[c-1][c][v];
}


function enderecoVerso(b,c,v)
{
   if (isPortugues())
   {
     return livrospt[b-1]+"&nbsp;"+c+":"+v;
   } else {
     return livroseng[b-1]+"&nbsp;"+c+":"+v;
   }
}

function enderecoVersoCompartilhar(b,c,v)
{
   return base[b].livro+" "+c+":"+v;
}



function mostrarLivros()
{
	 var elemento = document.getElementById("ltextlivros");
   var texto = "<div class='w3-row'>";
   var cores = ['w3-cyan','w3-gray'];
   var c = 1;
   var d = 0;
   var nacional = getNacionalidade()=='pt-BR';
   //texto += nacional ? "<li><h3>Velho Testamento</h4></li>" : "<li><h4>Old Testament</h3></li>";
	 for (var i = 0; i < 66; i+=1)
	 {
      var temp1 = "<div onclick='irparalivro("+parseInt(c)+")' class='w3-col w3-btn " + cores[d] + " w3-border s4 w3-padding-16'>" + (nacional ? livrospt[i] : livroseng[i]) + "</div>";
      texto += temp1;
      if (c % 3 == 0)
      {
         texto += "</div><div class='w3-row'>"
      }
      c+=1;
      d+=1;
      if (d >= cores.length) d = 0;
	 }
	 texto += "</div>";
	 elemento.innerHTML = texto ;
}

function mostrarCapitulos()
{
	 var elemento = document.getElementById("ltextcapitulos");
	 var elemento1 = document.getElementById("idtxtnr1");
   elemento1.innerHTML = base[getLivroMain()].livro == 'Apocalipse' ? 'Revelação' :  base[getLivroMain()].livro;
   var c = 1;
	 var texto = "<div class='w3-row'>";

         for (var i = 0 ; i < base[getLivroMain()].qtecapitulos; i+=1)
         {
		  texto += "<div class='w3-col s3 w3-btn w3-padding-16 w3-gray w3-border' onclick='irparacapitulo("+(i+1)+")'>" + contarZeros((i+1),(i+1)) + "</div>";
		  if (c % 4 == 0)
		  {
		  	texto += "</div><div class='w3-row'>";
      }
      c += 1;
         }
	texto += "</div>";
	elemento.innerHTML = texto;
}

function mostrarVersos(cap)
{
	 var elemento = document.getElementById("ltextversos");
	 var elemento1 = document.getElementById("idtxtnr2");
     elemento1.innerHTML = base[getLivroMain()].livro == 'Apocalipse' ? 'Revelação' :  base[getLivroMain()].livro + "&nbsp;" + getCapituloMain();

	 var texto = "<div class='w3-row'>";
	 var index = 1;
     var bbase = getBibliaPorNacionalidade();
	   while (bbase[getLivroMain()].capitulos[getCapituloMain()][index] != undefined)
	   {
		  texto += "<div class='w3-col s3 w3-btn w3-padding-16 w3-gray w3-border' onclick='irpara("+index+")'>" + contarZeros(cap,index) + "</div>";
		  if (index % 4 == 0)
		  {
			texto += "</div><div class='w3-row'>";
		  }
		  index += 1;
	   }
	texto += "</div>";
	elemento.innerHTML = texto;
}

// function mostrarLivrosTR()
// {
//      var nacional = getNacionalidade()=='pt-BR';
// 	 var elemento = document.getElementById("ltextlivrostr");
// 	 var texto = "<ul class='w3-ul w3-center w3-hoverable w3-card-4'>";
// 	 var c = 39;
//      texto += "<li><h4>"+(nacional?"Novo Testamento":"New Testament")+"</h4></li>";
// 	 for (var i = 0; i < livrosNovo.length; i++)
// 	 {
// 		 texto += "<li onclick='irparalivrotr("+parseInt(c+1)+")'><p>&nbsp;</p>" + (nacional ? livrosNovo[i] : livrosNovoEng[i]) + "<p>&nbsp;</p></li>";
// 		 c+=1;
// 	 }
// 	 texto += "</ul><p>&nbsp;</p><p>&nbsp;</p>";
// 	 elemento.innerHTML = texto;
// }
//
// function mostrarCapitulosTR()
// {
// 	 var elemento = document.getElementById("ltextcapitulostr");
// 	 var texto = "<div>";
//
//          for (var i = 0 ; i < tr[getLivroMain()].qtecapitulos; i+=1)
//          {
// 		  texto += "<button class='w3-button w3-circle w3-gray' onclick='irparacapitulotr("+(i+1)+")'>" + contarZeros((i+1),(i+1)) + "</button>&nbsp;";
// 		  if (i % 4 == 0)
// 		  {
// 			texto += "</div><div>";
// 		  }
//          }
// 	texto += "</div>";
// 	elemento.innerHTML = texto;
// }
//
// function mostrarVersosTR(cap)
// {
// 	 var elemento = document.getElementById("ltextversostr");
// 	 var texto = "<div>";
// 	 var index = 1;
// var bbase = getNacionalidade() == 'pt-BR' ? blv : web;
// 	   while (bbase[getLivroMain()].capitulos[getCapituloMain()][index] != undefined)
// 	   {
// 		  texto += "<button class='w3-button w3-circle w3-gray' onclick='irparatr("+index+")'>" + contarZeros(cap,index) + "</button>&nbsp;";
// 		  if (index % 4 == 0)
// 		  {
// 			texto += "</div><div>";
// 		  }
// 		  index += 1;
// 	   }
// 	texto += "</div>";
// 	elemento.innerHTML = texto;
// }
//
// function mostrarLivrosWLC()
// {
//      var nacional = getNacionalidade()=='pt-BR';
// 	 var elemento = document.getElementById("ltextlivrostr");
// 	 var texto = "<ul class='w3-ul w3-center w3-hoverable w3-card-4'>";
// 	 var c = 0;
//      texto += "<li><h4>"+(nacional?"Velho Testamento":"Old Testament")+"</h4></li>";
// 	 for (var i = 0; i < livrosVelho.length; i++)
// 	 {
// 		 texto += "<li onclick='irparalivrowlc("+parseInt(c+1)+")'><p>&nbsp;</p>" + (nacional ? livrosVelho[i] : livrosVelhoEng[i]) + "<p>&nbsp;</p></li>";
// 		 c+=1;
// 	 }
// 	 texto += "</ul><p>&nbsp;</p><p>&nbsp;</p>";
// 	 elemento.innerHTML = texto;
// }
//
// function mostrarCapitulosWLC()
// {
// 	 var elemento = document.getElementById("ltextcapitulostr");
// 	 var texto = "<div>";
//          var bbase = getNacionalidade() == 'pt-BR' ? blv : web;
//          for (var i = 0 ; i < bbase[getLivroMain()].qtecapitulos; i+=1)
//          {
// 		  texto += "<button class='w3-button w3-circle w3-gray' onclick='irparacapitulowlc("+(i+1)+")'>" + contarZeros((i+1),(i+1)) + "</button>&nbsp;";
// 		  if (i % 4 == 0)
// 		  {
// 			texto += "</div><div>";
// 		  }
//          }
// 	texto += "</div>";
// 	elemento.innerHTML = texto;
// }
//
// function mostrarVersosWLC(cap)
// {
// 	 var elemento = document.getElementById("ltextversostr");
// 	 var texto = "<div>";
// 	 var index = 1;
// var bbase = getNacionalidade() == 'pt-BR' ? blv : web;
// 	   while (bbase[getLivroMain()].capitulos[getCapituloMain()][index] != undefined)
// 	   {
// 		  texto += "<button class='w3-button w3-circle w3-gray' onclick='irparawlc("+index+")'>" + contarZeros(cap,index) + "</button>&nbsp;";
// 		  if (index % 4 == 0)
// 		  {
// 			texto += "</div><div>";
// 		  }
// 		  index += 1;
// 	   }
// 	texto += "</div>";
// 	elemento.innerHTML = texto;
// }



function buscar()
{
   w3.hide("#telaModalControlesLeitura");
   bbuscasimples=true;
   carregar();
}

// detalharSelecaoTR=function (va,b,c,v)
// {
//   var el1 = document.getElementById("iddetalhartr");
//   var endereco = b+'_'+c+'_'+v;
//   var vetor=greekrefdireta[endereco];
//   var saida="<ul class='w3-ul w3-hoverable'>";
//   var vetow=[];
//   for (var i=0; i<vetor.length; i++)
//   {
//      var chave=vetor[i];
//      if (vetow.indexOf(chave) < 0)
//      {
//          var elm=greekrefs[parseInt(chave)-1];
//          var saida2='';
//             if(getNacionalidade()=='pt-BR')
//             {
//                 saida += "<li><b><span class='w3-text-red'>Referencia</span>:</b>"+elm.ref;
//                 saida += "<br><b><span class='w3-text-blue'>Radical Original</span>:</b>"+elm.orw;
//                 saida += "<br><b><span class='w3-text-green'>Translitera&ccedil;&atilde;o</span>:</b>" + elm.tra;
//                 saida += "<br><b><span>Defini&ccedil;&atilde;o 1</span>:</b>" + elm.sho;
//                 saida += "<br><b><span>Defini&ccedil;&atilde;o 2</span>:</b>" + elm.def;
//                 saida += "<br><b><span>Fon&eacute;tica</span>:</b>" + elm.pho;
//                 saida += "<br><b><span>Gram&aacute;tica</span>:</b>" + elm.psp;
//             } else {
//                 saida += "<li><b><span class='w3-text-red'>Reference</span>:</b>"+elm.ref;
//                 saida += "<br><b><span class='w3-text-blue'>Original Word</span>:</b>"+elm.orw;
//                 saida += "<br><b><span class='w3-text-green'>Transliteration</span>:</b>" + elm.tra;
//                 saida += "<br><b><span>Definition 1</span>:</b>" + elm.sho;
//                 saida += "<br><b><span>Definition 2</span>:</b>" + elm.def;
//                 saida += "<br><b><span>Phonetic</span>:</b>" + elm.pho;
//                 saida += "<br><b><span>Grammar</span>:</b>" + elm.psp;
//             }
//             for(var j=0; j<greekrefx[elm.ref].length; j++)
//             {
//                saida2+=greekrefx[elm.ref][j]+', ';
//             }
//             saida += "<br><b><span>Referencia Cruzada</span>:</b>" + saida2;
//             saida += "</p></li>";
//         vetow.push(chave);
//      }
//   }
//   saida += "</ul><p>&nbsp;</p><p>&nbsp;</p>"
//
//  el1.innerHTML=saida;
//  abrirTelaDetalharTR();
// }
//
// function escreveMarcacaoTR(t1, va, b, c, v)
// {
//               return "<p>" + v + " : <span id='v"+v+"'><span onclick='detalharSelecaoTR("+va+","+b+","+c+","+v+")'>" + t1 + "</span></span></p>";
// }

function escreveMarcacao(t1, va, b, c, v)
{
        var selecaoid = getIdESelecao(va, b, c, v);
        var selecaocor = getCorESelecao(selecaoid);

        if (tempselecao.length <= 0)
        {
          if (selecaoid >= 0)
          {
            return "<p>" + v + " : <span id='v"+v+"' class='w3-text-black' style='background-color:"+selecaocor+"'><span onclick='preselecao("+va+","+b+","+c+","+v+")'>" + t1 + "</span></span></p>";
          }
              return "<p>" + v + " : <span id='v"+v+"'><span onclick='preselecao("+va+","+b+","+c+","+v+")'>" + t1 + "</span></span></p>";
        } else {
              for(var i = 0; i < tempmarcacao.length ; i++)
              {
                 if (testeVersoTemp(tempmarcacao[i], va, b, c, v))
                 {
	                return "<p>" + v + " : <span id='v"+v+"' style='color: green; text-decoration: underline'><span onclick='preselecao("+va+","+b+","+c+","+v+")'>" + t1 + "</span></span></p>";
                 }
              }
              return "<p>" + v + " : <span id='v"+v+"'><span onclick='preselecao("+va+","+b+","+c+","+v+")'>" + t1 + "</span></span></p>";
        }
}




function construirVetorPlanoEstudo(vetorstring)
{
  vetorstring = vetorstring.substring(0, vetorstring.length-1);
  var vetor1 = vetorstring.split(',');
  vetorPlanoEstudo=[];
  for (var i=0; i<vetor1.length; i++)
  {
     var vetor2 = vetor1[i].split(' ');
     var liv = vetor2[0];
     var indice = getNacionalidade() == "en-US" ? abreveng.indexOf(liv)+1 : abrevpt.indexOf(liv)+1;
     var cap = vetor2[1];
     vetorPlanoEstudo.push({"livro":indice, "capitulo":cap})
  }
  setPosicaoPlanoEstudo(0);
  carregarEnderecoVetorPlanoEstudo();
}

function carregar()  {
   var detalhe = "";
   setVersiculoMain(1);
   buscasimples = document.getElementById("buscasimples");
   mostrarVersos(getCapituloMain());
   mostrarCapitulos();
   setLivroCapituloBD(getLivroMain(), getCapituloMain());
   if (bbuscasimples)
   {
       var t1 = extrairVerso(getLivroMain(), getCapituloMain(), getVersiculoMain());
	   while (t1 != null)
	   {
		  rx1=new RegExp(buscasimples.value,"g");
		  t1 = t1.replace(rx1, "<b>"+buscasimples.value+"</b>");
                  detalhe = detalhe + escreveMarcacao(t1, getVersaoAtualMain(), getLivroMain(), getCapituloMain(), getVersiculoMain());
     	          setVersiculoMain(getVersiculoMain()+1);
		  t1 = extrairVerso(getLivroMain(), getCapituloMain(), getVersiculoMain());
	   }
   } else {
           document.getElementById("capitulob1").innerHTML = "";

           var t1 = extrairVerso(getLivroMain(), getCapituloMain(), getVersiculoMain());
	       while (t1 != null)
	       {
                 detalhe = detalhe + escreveMarcacao(t1, getVersaoAtualMain(), getLivroMain(), getCapituloMain(), getVersiculoMain());
	             setVersiculoMain(getVersiculoMain()+1);
        		 t1 = extrairVerso(getLivroMain(), getCapituloMain(), getVersiculoMain());
	       }

    }

   nomecap=document.getElementById("nomecap");
   n1 = document.getElementById("nomelivro");
   bbuscasimples = false;
   nomecap.innerHTML=getCapituloMain();
   //n1.innerHTML=base[getLivroMain()].abrev;
   n1.innerHTML=livs[getLivroMain()-1];
   document.getElementById("capitulob1").innerHTML= "<p>&nbsp;</p>"+detalhe+"<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>";
}


// function carregarReceptus()  {
//    var detalhe = "";
//    setVersiculoMain(1);
//    mostrarVersosTR(getCapituloMain());
//    mostrarCapitulosTR();
//    document.getElementById("capitulostr").innerHTML = "";
//
//        var t1 = extrairVerso(getLivroMain(), getCapituloMain(), getVersiculoMain());
// 	   while (t1 != null)
// 	   {
//                 detalhe = detalhe + escreveMarcacaoTR(t1, getVersaoAtualMain(), getLivroMain(), getCapituloMain(), getVersiculoMain());
// 	            setVersiculoMain(getVersiculoMain()+1);
// 		        t1 = extrairVerso(getLivroMain(), getCapituloMain(), getVersiculoMain());
// 	   }
//
//
//    nomecap=document.getElementById("nomecaptr");
//    var b1 = document.getElementById("capitulostr");
//    var n1 = document.getElementById("nomelivrotr");
//    nomecap.innerHTML=getCapituloMain();
//    n1.innerHTML=getNacionalidade()=='pt-BR'? base[getLivroMain()].livro : livroseng[getLivroMain()-1];
//    b1.innerHTML= detalhe+"<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>";
// }
//
// function preCarregarWLC()
// {
//   mostrarVersosWLC(getCapituloMain());
//   mostrarCapitulosWLC();
// }
//
// function carregarReceptusWlc()
// {
//   setVersiculoMain(1);
//   preCarregarWLC();
//   document.getElementById("nomecapwlc").innerHTML=getCapituloMain();
//   document.getElementById("nomelivrowlc").innerHTML=getNacionalidade()=='pt-BR'? base[getLivroMain()].livro : livroseng[getLivroMain()-1];
//   document.getElementById("capitulowlc").removeAttribute("w3-include-html");
//   document.getElementById("capitulowlc").setAttribute("w3-include-html","basejs/biblias/wlc-base/"+livs[getLivroMain()-1]+"/"+getCapituloMain()+".htm");
//   w3.includeHTML();
//
// }


function preselecaocontem(temp, va, livro, cap, verso)
{
        var posicao = -1;
        for (var i = 0; i < temp.length ; i++)
        {
           if (testeVersoTemp(temp[i], va, livro, cap, verso))
           {
              posicao = i;
              break;
           }
        }
        return posicao;
}

function preselecao(va, livro, cap, verso)
{
  if (tempselecao.length <= 0 && tempmarcacao.length <= 0)
  {
     tempselecao.push({'id':tempselecao.length,'cor':null});
     tempmarcacao.push({'selecaoid':tempselecao[0].id, 'id': tempmarcacao.length, 'versao':va, 'livro':livro, 'capitulo':cap, 'verso':verso});
     document.getElementById("marBtn").style.display = "block";
     document.getElementById("cmpBtn").style.display = "block";
     document.getElementById("shaBtn").style.display = "block";
     document.getElementById("adiBtn").style.display = "block";
  }
  else {
     var posicao = preselecaocontem(tempmarcacao, va, livro, cap, verso);
     if (posicao < 0)
     {
        tempmarcacao.push({'selecaoid':tempselecao[0].id, 'id':tempmarcacao.length, 'versao':va, 'livro':livro, 'capitulo':cap, 'verso':verso});
        tempmarcacao[tempmarcacao.length-1].id = tempmarcacao.length;
     } else {
        tempmarcacao.splice(posicao,1);
     }
     if (tempmarcacao.length <= 0)
     {
        tempselecao = [];
        document.getElementById("marBtn").style.display = "none";
        document.getElementById("cmpBtn").style.display = "none";
        document.getElementById("shaBtn").style.display = "none";
        document.getElementById("adiBtn").style.display = "none";
        closeNav();
     }
  }
 carregar();
}



function incluirTempComentarioNegocio()
{
   var elemento = document.getElementById("txtcomentario");
   if (elemento.value.length > 0)
   {
        var contar = tempcomentario.length + 1;
        tempcomentario.push({'selecaoid': tempselecao[0].id, 'id': contar, 'comentario': elemento.value});
        elemento.value = "";
        carregarListaComentarios("comentarCompartilhar","listaComentarios2");
   }
}

function carregarListaResultadoPesquisar(elemento)
{
   var str = "";
   var lista = getVetorComentarioPesquisar();
   for(var i = 0; i < lista.length; i++)
   {
        str += "<p>"+lista[i]+"</p>";
   }
   document.getElementById("totalizadores").innerHTML=str;
}

function carregarListaComentarios(tela, nomeElemento)
{
  var str="";
  for(var i = 0; i < tempcomentario.length; i++)
  {
     if (tela=="comentarCompartilhar")
     {
         str += "<p>" + tempcomentario[i].comentario + "</p><button class='w3-btn w3-border w3-teal' onclick='editarTempComentarioNegocio("+tempcomentario[i].id+")'>Editar</button><button class='w3-btn w3-border w3-teal' onclick='compartilharTempComentarioNegocio("+tempcomentario[i].id+")'>Compartilhar</button>";
     } else {
         str += "<p>" + tempcomentario[i].comentario + "</p>";
     }
  }
  document.getElementById(nomeElemento).innerHTML = str;
}

function excluirTempComentarioNegocio(posicao)
{
  document.getElementById("txtcomentario").value = "";
  w3.addClass("#btnExcluirComentario","w3-disabled");
}

function editarTempComentarioNegocio(posicao)
{
  document.getElementById("txtcomentario").value = tempcomentario[posicao-1].comentario;
  var idantigo = posicao;
  var vetornovo=[];
  for(var i=0; i<tempcomentario.length; i++)
  {
     if (tempcomentario[i].id!=idantigo)
     {
         vetornovo.push({'selecaoid': tempcomentario[i].selecaoid, 'id': tempcomentario[i].id, 'comentario': tempcomentario[i].comentario});
     }
  }
  tempcomentario=vetornovo;
  carregarListaComentarios("comentarCompartilhar","listaComentarios2");
  w3.removeClass("#btnExcluirComentario","w3-disabled");
}

function carregarListaVersos(tela, nomeElemento)
{
  var str="";
  for(var i = 0; i < tempmarcacao.length; i++)
  {
     var b = tempmarcacao[i].livro;
     var c = tempmarcacao[i].capitulo;
     var v = tempmarcacao[i].verso;
     str += "<p>" + enderecoVerso(b,c,v)+"&nbsp;&nbsp;"+extrairVerso(b,c,v) + "</p>";
  }
  document.getElementById(nomeElemento).innerHTML = str;
}

function getTextoEscolhidoParaImagem()
{
     var b = tempmarcacao[0].livro;
     var c = tempmarcacao[0].capitulo;
     var v = tempmarcacao[0].verso;

     return extrairVersoBase(baseversao,b,c,v) + " " + enderecoVerso(b,c,v);
}

function retornaPadraoListaVersoComparar(nome, baseversao, tipo)
{
  var str="";
  str += "<div class='cabecalho w3-panel w3-lime'><h4>"+nome+"</h4></div>";
  for(var i = 0; i < tempmarcacao.length; i++)
  {
     var b = tempmarcacao[i].livro;
     var c = tempmarcacao[i].capitulo;
     var v = tempmarcacao[i].verso;
     if (tipo == 0)
     {
      str += "<p>" + enderecoVerso(b,c,v)+"&nbsp;&nbsp;"+extrairVersoBase(baseversao,b,c,v) + "</p>";
     } else {
      str += "<p>" + enderecoVerso(b,c,v)+"&nbsp;&nbsp;"+extrairVersoBaseTipo1(baseversao,b,c,v) + "</p>";
     }

  }
  return str;

}

function carregarListaVersosComparar(nomeElemento)
{
  var str = "";

  str += retornaPadraoListaVersoComparar("Biblia Livre",blv,0);
  str += retornaPadraoListaVersoComparar("World English Bible",web,0);
  str += retornaPadraoListaVersoComparar("La Sainte Bible",fob,0);
  str += retornaPadraoListaVersoComparar("Santa Biblia - Reina Valera",rvb,0);

  document.getElementById(nomeElemento).innerHTML = str;
}


function compartilharTempVersoComentarioNegocio()
{
   var str = "";
   for(var i = 0; i < tempmarcacao.length; i++)
   {
      var b = tempmarcacao[i].livro;
      var c = tempmarcacao[i].capitulo;
      var v = tempmarcacao[i].verso;
      str += enderecoVersoCompartilhar(b,c,v)+"  "+extrairVerso(b,c,v);
   }
   if (tempcomentario.length > 0)
   {
     for(var i = 0; i < tempcomentario.length; i++)
     {
        var comentario = tempcomentario[i].comentario;
        str += comentario;
     }
   }
   if (str.length > 0)
   {
     window.plugins.socialsharing.share(str);
   }
}


function compartilharTempComentarioNegocio(posicao)
{
  var str = tempcomentario[posicao-1].comentario;
  window.plugins.socialsharing.share(str);
}

function compartilharEComentarioNegocio(selid, id)
{
  var cc="";
  for(var i=0; i<eComentario.length; i++){
     if(eComentario[i].selecaoid == selid && eComentario[i].id == id)
     {
       cc = eComentario[i].comentario;
       break;
     }
  }
  if (cc.length > 0)
  {
    window.plugins.socialsharing.share(cc);
  }
}

function selecaoCorPicker()
{
  var elemento = document.getElementById("htmlColorPicker");
  tempselecao[0].cor = elemento.value;
}

function selecaoCor(cor)
{
  var elemento = document.getElementById("htmlColorPicker");
  elemento.value=cor;
  tempselecao[0].cor = cor;
  salvarMarcacaoComentarioTela();
}

function deselecaoCor()
{
  removerMarcacaoComentarioBanco(tempselecao,tempmarcacao,tempcomentario);
  posSalvarMarcacaoComentarioTela();
}



function retrocedercap()
{
    desfazer();
    setCapituloMain(getCapituloMain()-1);
    if (getCapituloMain() < 1){
        setLivroMain(getLivroMain()-1);
        if (getLivroMain()<1){
           setLivroMain(1);
           setCapituloMain(1);
        } else {
           setCapituloMain(numeroCapitulos());
        }
    }
   carregar();
}




function adiantarcap()
{
   var qte = numeroCapitulos();
   desfazer();
   setCapituloMain(getCapituloMain()+1);
   if (getCapituloMain() > qte)
   {
     setLivroMain(getLivroMain()+1);
     if (getLivroMain() > 66)
     {
        setLivroMain(66);
        setCapituloMain(qte);
     }
     else {
        setCapituloMain(1);
     }
   }
   carregar();
}



var mc = new Hammer(document.getElementById("capitulob1"));
mc.on("swipeleft", function(ev) {
    if (modoPlanoEstudo <= 0){
      adiantarcap();
    } else {
      adiantarcapplanoestudo();
    }
});
mc.on("swiperight", function(ev) {
    if (modoPlanoEstudo <= 0){
      retrocedercap();
    } else {
      retrocedercapplanoestudo();
    }
});
