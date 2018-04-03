window.addEventListener('load', iniciar);

function iniciar() {

  var btBackgroundAmarelo = document.querySelector('#btBackground');
  btBackgroundAmarelo.addEventListener('click', trocarBackground);

  var chkTextoVermelho = document.querySelector('#chkMudarTexto');
  chkTextoVermelho.addEventListener('change', trocarCorDoTexto);

  var chkTextoVermelho = document.querySelector('#chkMudarTamanho');
  chkTextoVermelho.addEventListener('change', habilitarMudarTamanho);

  var chkTituloItalico = document.querySelector('#chkTituloItalico');
  chkTituloItalico.addEventListener('change', trocarFonte);

  var chkInverterDiaMes = document.querySelector('#chkInverterDiaMes');
  chkInverterDiaMes.addEventListener('change', inverteDiaMes);
}

function habilitarMudarTamanho() {

  var celulas = document.querySelectorAll('td');
  console.log(celulas);

  if(this.checked) { //se estiver marcado
    for(var i = 0; i < celulas.length; i++) {
      celulas[i].addEventListener('mouseover', aumentarTexto);
      celulas[i].addEventListener('mouseout', diminuirTexto);
    }
  }
  else {
    for(var i = 0; i < celulas.length; i++) {
      celulas[i].removeEventListener('mouseover', aumentarTexto); //se não estiver marcado remove
      celulas[i].removeEventListener('mouseout', diminuirTexto);
    }  
  }
}

function aumentarTexto() {
  this.classList.add('textoMaior'); //manipulando o Css
}

function diminuirTexto() {
  this.classList.remove('textoMaior');
}




function trocarCorDoTexto() {
  
  var classe = 'novaCorTexto';
  var tabela = document.querySelector('#dadosBanda');  
  var texto  = document.querySelector('.trocatexto');

  //Aqui, this é o checkbox!
  if(this.checked) {
    tabela.classList.add(classe);
    texto.textContent = 'texto padrao'   
  }
  else {
    tabela.classList.remove(classe);    
    texto.textContent = 'Texto vermelho';    
  }
}

function trocarBackground() {

  var classeBG = 'novoBackground';
  var tabela   = document.querySelector('#dadosBanda');

  //Verificando se a classe já existe no body
  if(tabela.classList.contains(classeBG)) {

    //Se entrou aqui, significa que o background
    //já estava amarelo. Então removemos a classe
    //e alteramos o texto do botão
    tabela.classList.remove(classeBG);

    //'this' representa o elemento que invocou a
    //função. Neste caso, foi o botão cujo id é
    //'btBackgroundAmarelo'
    this.value = 'Background amarelo';
  }
  else {

    //Se entrou aqui, significa que o background
    //está com a cor padrão. Então adicionamos a classe
    //e alteramos o texto do botão
    tabela.classList.add(classeBG);
    this.value = 'Background padrão';
  }
}

function trocarFonte(){

  var tabela = document.querySelector('#cabecalhoBanda');
  var textItalico = 'fontItalica';
  var nomalText = document.querySelector('.textoNormal');

  if(this.checked){

  tabela.classList.add(textItalico);
  nomalText.textContent = 'Desmarque para texto padrão'

  } 
   else {
 
  tabela.classList.remove(textItalico);
  nomalText.textContent = 'Colunas de titulo em itálico'
  
   }

}

function inverteDiaMes(){

var antigasDatas = document.getElementsByClassName("nascimento");
var novasDatas = ['02/01/1960', '02/01/1961', '02/01/1963','02/01/1964','02/01/1967'];
var recolocarDatas = ['01/02/1960', '01/02/1961', '01/02/1963','01/02/1964','01/02/1967'];

if(this.checked) {

  for (var i = 0; i < antigasDatas.length; i++) {

       antigasDatas[i].innerHTML = novasDatas[i];
   } 

   } else {

    for (var i = 0; i < antigasDatas.length; i++) {

         antigasDatas[i].innerHTML = recolocarDatas[i];
   }
  }
}