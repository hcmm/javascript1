// var pacienteNovo = "<tr class='paciente'>"+
// 						"<td class='info-nome'>Rafael</td>" +
// 						"<td class='info-peso'>57</td>" +
// 						"<td class='info-alutra'>1.77</td>" +
// 						"<td class='info-imc'></td>" +
// 					"</tr>";

// // var tabela = document.getElementsByTagName("table")[0];
// // document.querySelectorAll("table"); //retorno uma array.
// document.querySelector("table"); //seletor Generico que retorna um elemento, passado de acordo com parametro. ex: tag, id,class
// // tabela.textContent = tabela.textContent + pacienteNovo; //text Contetne somente utilizado para texto
// tabela.innerHTML = tabela.innerHTML + pacienteNovo;


var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event){ //browser envia o event para metodo
	event.preventDefault(); //impede comportamento padrao

	var campoNome = document.querySelector("#campo-nome");
	var campoPeso = document.querySelector("#campo-peso");
	var campoAltura = document.querySelector("#campo-altura");

	var pacienteNovo = "<tr class='paciente'>"+
						"<td class='info-nome'>"+campoNome.value+"</td>" +
						"<td class='info-peso'>"+campoPeso.value+"</td>" +
						"<td class='info-alutra'>"+campoAltura.value+"</td>" +
						"<td class='info-imc'></td>" +
					"</tr>";

	// var tabela = document.getElementsByTagName("table")[0];
	// document.querySelectorAll("table"); //retorno uma array.
	document.querySelector("table"); //seletor Generico que retorna um elemento, passado de acordo com parametro. ex: tag, id,class
	// tabela.textContent = tabela.textContent + pacienteNovo; //text Contetne somente utilizado para texto
	tabela.innerHTML = tabela.innerHTML + pacienteNovo;

	campoNome.value = "";
	var campoPeso = "";
	var campoAltura = "";

