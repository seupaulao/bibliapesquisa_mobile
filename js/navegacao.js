var telanavegacao = [];

function abrirTela(tela)
{
    closeNav3();
    telanavegacao.push(tela);
    var x = document.getElementsByClassName("tela");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    document.getElementById(tela).style.display = "block";
}

function voltarATela(tela)
{
    var x = document.getElementsByClassName("tela");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    document.getElementById(tela).style.display = "block";
}


document.addEventListener("backbutton", onBackKeyDown, false);
function onBackKeyDown(e) {
   e.preventDefault();
   abrirTelaAnterior();

}

function abrirTelaAnterior()
{
   
   desfazer();
   var tela = telanavegacao[telanavegacao.length-2];
   telanavegacao.pop();
   if (tela==null)
   {
      abrirTelaPrincipal();
   } else {
      voltarATela(tela);
   }
}

abrirTelaConfiguracao=function()
{
   esconderControles();
   closeNav3();
   w3.hide("#msgConfig");
   abrirTela('configuracao');
   assistirVideo();
}

abrirTelaAdicionarImagem=function()
{
   closeNav3();
   mostrarControles();
   carregarTelaAdicionarImagem(1);
}


abrirTelaApoio=function()
{
   esconderControles();
   closeNav3();
   abrirTela('telaNosAjude');
}

abrirTelaDicionario=function()
{
   esconderControles();
   closeNav3();
    w3.hide("#errodicionario");
    abrirTela('dicionario');
    // show the interstitial later, e.g. at end of game level
    assistirVideo();
}
assistirVideo=function()
{
    if(AdMob) AdMob.showInterstitial();
}

abrirTelaEstudos=function()
{
    esconderControles();
    closeNav3();
    abrirTela('princestudos');
}

function abrirTelaListando()
{
   esconderControles();
   carregarListandoMarcacoes("listandomarcacoes");
   carregarCores();
   abrirTela('listando');
   assistirVideo();
}


function abrirTelaLeituraTextoOriginal()
{
  abrirTela('princtextooriginal');
}

// function abrirTelaTextoOriginalLeitura(versao)
// {
//   w3.show("#fontetr");
//   w3.hide("#fontewlc");
//   setVersaoAtualMain(versao);
//   setLivroMain(43);
//   setCapituloMain(1);
//   carregarVersao();
//   carregarReceptus();
//   //carregarReceptusWlc();
//   abrirTela('telaleituratextooriginal');
// }

// function abrirTelaTextoOriginalLeituraGr()
// {
//   abrirTelaTextoOriginalLeitura(2);
// }

// function abrirTelaTextoOriginalLeituraHb()
// {
//   w3.show("#fontewlc");
//   w3.hide("#fontetr");
//   setVersaoAtualMain(0);
//   setLivroMain(1);
//   setCapituloMain(1);
//   carregarVersao();
//   carregarReceptusWlc();
//   abrirTela('telaleituratextooriginal');
//
// }
//
// function abrirTelaDetalharTR()
// {
//   abrirTela('telaleituratextooriginaldetalhar');
// }

function abrirTelaModalControlesLeitura()
{
   //closeNav2();
   desfazer();
   w3.show("#telaModalControlesLeitura");
}

function fecharTelaModalControlesLeitura()
{
   w3.hide("#telaModalControlesLeitura");
}

function abrirTelaListandoComentario(selid, idcomentario, texto)
{
  carregarListandoComentarios("lcomentarios",selid);
  abrirTela('listandocomentario');
  var elemento = document.getElementById("listandocomentariobotao");
  if (idcomentario == null)
  {
    document.getElementById('txtlistandocomentario').value="";
    elemento.innerHTML="<span onclick='listandoIncluirComentario("+selid+")' class='w3-btn w3-border w3-blue'><img src='img/mais32.png'></img></span>";
  } else {
    document.getElementById('txtlistandocomentario').value=texto;
    elemento.innerHTML="<span onclick='listandoAlterarComentario("+selid+","+idcomentario+")' class='w3-btn w3-border w3-blue'><img src='img/mais32.png'></img></span>";
  }
}

abrirTelaAcabouPlanoEstudoDia=function()
{
   abrirTela('acabouplanoestudodia');
}

function abrirTelaLeitura()
{
   desfazer();
   if (getNacionalidade() == "en-US" && (getNacionalidade() != undefined || getNacionalidade() == null))
   {
      setVersaoAtualMain(1);
   } else {
      setVersaoAtualMain(0);
   }
   carregarCores();
   carregarEstrutura();
   carregarVersao();
   modoPlanoEstudo = 0;
   carregar();
   w3.hide("#botoesPlanoEstudo");
   w3.show("#botoesLeitura");
   w3.removeClass("#nomelivro","w3-disabled");
   w3.removeClass("#nomecap","w3-disabled");
   document.getElementById("nomelivro").disabled=false;
   document.getElementById("nomecap").disabled=false;

   abrirTela('leitura');
   if(AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );



}

function abrirTelaLeituraControle(vetorstring)
{
   if (getNacionalidade() == "en-US" && (getNacionalidade() != undefined || getNacionalidade() == null))
   {
      setVersaoAtualMain(1);
   } else {

      setVersaoAtualMain(0);
   }
   carregarCores();
   carregarEstrutura();
   carregarVersao();
   modoPlanoEstudo = 1;
   construirVetorPlanoEstudo(vetorstring);
   w3.show("#botoesPlanoEstudo");
   w3.addClass("#nomelivro","w3-disabled");
   w3.addClass("#nomecap","w3-disabled");
   document.getElementById("nomelivro").disabled=true;
   document.getElementById("nomecap").disabled=true;
   w3.hide("#botoesLeitura");
   abrirTela('leitura');
}


function abrirTelaComparar()
{
  carregarListaVersosComparar("listaVersosComparar");
  abrirTela("telaComparar");
}

function abrirTelaMarcacao()
{
  document.getElementById("marBtn").style.display = "none";
  openNav();
}

function abrirTelaComentarioPesquisar()
{
  if (houvepesquisacomresultado)
  {
      carregarListaResultadoPesquisar("totalizadores");
      abrirTela("pesquisandobibliacomentario");
  }
}



function abrirTelaPrincipal()
{
   closeNav3();
   closeNav2();
   desfazer();
   telanavegacao = [];
   abrirTela('princ');
}

function abrirTelaPlanoEstudo()
{
   esconderControles();
   closeNav3();
   carregarPlanosBD();
   carregarDivPlanosEstudo();
   abrirTela('planosestudo');
}


function irpara(versiculo)
{
       abrirTela("leitura");
       document.getElementById("leiturarodape").innerHTML="<a id='idvchave1' href='#v"+(versiculo-2)+"'>temp</a>";
       document.getElementById("idvchave1").click();
       document.getElementById("leiturarodape").innerHTML = "";
}


function irparacapitulo(capitulo)
{
	setCapituloMain(capitulo);
	carregar();
    abrirTela('leituraversos');
    topFunction();
}

function irparalivro(ibk)
{
	setLivroMain(ibk);
	setCapituloMain(1);
	carregar();
    abrirTela('leituracapitulos');
    topFunction();
}


function irparatr(versiculo)
{
       abrirTela("telaleituratextooriginal");
       document.getElementById("leiturarodapetr").innerHTML="<a id='idvchave1' href='#v"+versiculo+"'>temp</a>";
       document.getElementById("idvchave1").click();
       document.getElementById("leiturarodapetr").innerHTML = "";
}


function irparacapitulotr(capitulo)
{
	setCapituloMain(capitulo);
	carregarReceptus();
    abrirTela('leituraversostr');
    topFunction();
}

function irparalivrotr(ibk)
{
	setLivroMain(ibk);
	setCapituloMain(1);
	carregarReceptus();
    abrirTela('leituracapitulostr');
    topFunction();
}

function irparawlc(versiculo)
{
       abrirTela("telaleituratextooriginal");
       document.getElementById("leiturarodapetr").innerHTML="<a id='idvchave1' href='#v"+versiculo+"'>temp</a>";
       document.getElementById("idvchave1").click();
       document.getElementById("leiturarodapetr").innerHTML = "";
}

function irparacapitulowlc(capitulo)
{
	setCapituloMain(capitulo);
    carregarReceptusWlc();
    abrirTela('leituraversostr');
    topFunction();
}

function irparalivrowlc(ibk)
{
	setLivroMain(ibk);
	setCapituloMain(1);
    preCarregarWLC();
    abrirTela('leituracapitulostr');
    topFunction();
}


function mostrarMenuLivros()
{
   desfazer();
   fecharTelaModalControlesLeitura();
   mostrarLivros();
   abrirTela("leituralivros");
}

mostrarMenuLivrosTR=function()
{
   mostrarLivrosTR();
   abrirTela("leituralivrostr");
}

mostrarMenuCapitulosTR=function()
{
   abrirTela("leituracapitulostr");
}

mostrarMenuVersosTR=function()
{
   abrirTela("leituraversostr");
}

mostrarMenuLivrosWLC=function()
{
   mostrarLivrosWLC();
   abrirTela("leituralivrostr");
}

mostrarMenuCapitulosWLC=function()
{
   abrirTela("leituracapitulostr");
}

mostrarMenuVersosWLC=function()
{
   abrirTela("leituraversostr");
}

function mostrarMenuLeituraVersoes()
{
   desfazer();
   fecharTelaModalControlesLeitura();
   abrirTela("leituraversoes");
}
function mostrarMenuLeituraCapitulos()
{
   desfazer();
   fecharTelaModalControlesLeitura();
   abrirTela("leituracapitulos");
}
function mostrarMenuLeituraVersos()
{
   desfazer();
   fecharTelaModalControlesLeitura();
   abrirTela("leituraversos");
}

function desfazer()
{
   tempmarcacao = [];
   tempcomentario = [];
   tempselecao = [];
   carregar();
   document.getElementById("marBtn").style.display = "none";
   document.getElementById("cmpBtn").style.display = "none";
   document.getElementById("shaBtn").style.display = "none";
   document.getElementById("adiBtn").style.display = "none";
   esconderControles();
}

function desfazerEVoltar()
{
   desfazer();
   abrirTela("leitura");
}

function posSalvarMarcacaoComentarioTela()
{
  desfazerEVoltar();
  closeNavSimples();
 // document.getElementById("comBtn").style.display = "block";
}

function salvarMarcacaoComentarioTela()
{
  salvarMarcacaoComentarioBanco(tempselecao, tempmarcacao, tempcomentario);
  posSalvarMarcacaoComentarioTela();
}

function abrirTelaAjuda()
{
   closeNav3();
   abrirTela("ajuda");
}

function openNav() {
    document.getElementById("mySidenav").style.width = "125px";
}

function closeNavSimples() {
    document.getElementById("mySidenav").style.width = "0";
}

function closeNav() {
    desfazer();
    document.getElementById("mySidenav").style.width = "0";
}

function openNav2() {
  document.getElementById("mySidenav2").style.width = "125px";
}

function closeNav2() {
  document.getElementById("mySidenav2").style.width = "0";
}

function openNav3() {
  document.getElementById("mySidenav3").style.width = "200px";
}

function closeNav3() {
  document.getElementById("mySidenav3").style.width = "0";
}

function openNav4() {
  document.getElementById("myBotnav").style.height = "200px";
}

function closeNav4() {
  document.getElementById("myBotnav").style.height = "0";
}





function salvarComentarioTela()
{
  var elemento = document.getElementById("txtcomentario");
  salvarComentario(versaoMarcacao, livroMarcacao, capituloMarcacao, versoMarcacao, elemento.value);
  fecharTelaComentario();
}

function salvarMarcacaoTela(cor)
{
   salvarMarcacao(versaoMarcacao, livroMarcacao, capituloMarcacao, versoMarcacao, cor);
   carregar();
   fecharTelaMarcacao();
}


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      //  document.getElementById("myBtn").style.display = "block";
    } else {
      //  document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
//    document.getElementById("comBtn").style.display = "none";
}
