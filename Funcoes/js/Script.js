window.addEventListener('load', iniciar);

function iniciar() {

	var media = document.querySelector('#media');
	media.addEventListener('click', fazMedia);

	var escrevenumeros = document.querySelector('#escreveNumeros');
	escrevenumeros.addEventListener('click', escreverNumeros);

	var divisiveis = document.querySelector('#divisiveisPor');
	divisiveisPor.addEventListener('click', numerosDivisiveis);

	var maiorNumMenorNum = document.querySelector('#maiorDoVetor');
	maiorNumMenorNum.addEventListener('click', maiorEMenor);
}

function fazMedia(){

	var num1 = parseFloat(prompt("Entre com o primeiro número:"));
	var num2 = parseFloat(prompt("Entre com o segundo número:"));

	alert("A média de" + "  " +  num1 + "  " + "e" + "  " +  num2 + "  " +  "é:" + "  " + (num1 + num2) / 2);
}

function escreverNumeros(){

	var num = parseInt(prompt("Entre com um número"));

	for(var i = 1; i <= num ; i++){

		console.log(i);

	}
}

function numerosDivisiveis(){

	var num1 = parseFloat(prompt("Entre com o primeiro valor:"));
	var num2 = parseFloat(prompt("Entre com o segundo valor:"))

 if(num1 > num2){

 	alert("Anteção ! O primeiro valor deve ser menor que o segundo valor.")

 } else {}

	for(var i = num1; i <= num2; i++){

		if( i % num1 == 0){

			alert("Os números divisíveis por " + " " + num1 + "  " + "são" + " " + i);

	}
  }
}

function maiorEMenor(){

	var cont = parseFloat(prompt("Informe a quantidade de numeros que voce irá digitar:"));
	var num1 = new Array();
	var k = 0;
	var p = 10000000000000;

 for(var i = 1; i <= cont; i++){

	num1[i] = parseInt(prompt("Entre com seu vetor de números:"));
	
	if(k <= num1[i]){

		var maior = num1[i];
		k = num1[i];

        } 


    if(p >= num1[i]){

    	var menor  = num1[i];
    	p = num1[i];
    }

     }
   
      	alert("O maior número do vetor é" + "  " + maior);
      	alert("O menor número do vetor é" + "  " + menor);
   
}