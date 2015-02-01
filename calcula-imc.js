// projeto para que seja caluclado o imc. Calcula do imc = peso/(altura * altura)

// var tdPeso = document.getElementById("peso-2"); // dom retorna o elemento e seu conteudo
// var tdAltura = document.getElementById("altura-2");

// var peso = tdPeso.textContent;
// var altura = tdAltura.textContent;

// var paciente = {"peso" : peso, "altura" : altura};
// paciente.peso // o peso do paciente
// paciente.altura // altura do paciente
// //outro modo
// paciente{"peso"};
// var pacientes {paciente}; //array com conteudo de paciente

var trsPacientes = document.getElementByClassName("paciente");


// 	var paciente {"nome", tdNome.textContent, "peso", tdPeso.textContent, "altura", tdAltura.textContent}
// 	if(paciente.altura !=0){
// 		var imc = paciente.peso/(paciente.altura * paciente.altura); //25

// 		var tdImc = pacienteTr.getElementByClassName("info-imc");
// 		tdImc.textContent = imc;
// 		// var tdImc = document.getElementById("imc-2");
// 		// tdImc.textContent = imc;
// 		console.log(imc);	
// 	} else {
// 		console.log("Altura eh igual a 0");
// 	}

// 	posicaoAtual++;	
// }

percorreArray(trsPacientes, function(pacienteTr){

	var pacienteAtual = montaPaciente(pacienteTr);

	var imc = pacienteAtual.pegaImc();

	var tdImc = pacienteTr.getElementByClassName("info-imc");
	tdImc.textContent = imc;
	// var tdImc = document.getElementById("imc-2");
	// tdImc.textContent = imc;
	console.log(imc);

});
	// var ehDiferenteDeZero = (altura != 0);
		
	


//funcao facilita a leituro do codigo, e tambem facilita o reaproveitamento, devem ser bem defenidas e especificas
// function calculaImc(){
// 	if(this.paciente.altura !=0){
// 		var imc = this.paciente.peso/(this.paciente.altura * this.paciente.altura); //25
// 		return imc;

// 	} else {
// 		console.log("Altura eh igual a 0");
// 	}
// }

//subitutuindo tratamento individual por array
var altura1 = 1.50;
var altura2 = 2.00
var altura3 = 1.00;

//seria
var alturas = {1.50, 2.00, 1.00} //seria chamado pelo index: 0,1,2
alturas[0]; // 1.50

function calculaTodosImcs(){
	var trsPacientes = document.getElementByClassName("paciente");

	percorreArray(trsPacientes, function(pacienteTr){

		var pacienteAtual = montaPaciente(pacienteTr);

		var imc = pacienteAtual.pegaImc();

		var tdImc = pacienteTr.getElementByClassName("info-imc");
		tdImc.textContent = imc;
		// var tdImc = document.getElementById("imc-2");
		// tdImc.textContent = imc;
		console.log(imc);

	});

}

var botao = document.getElementById("calcula-imcs");
// botao.onclick =  calculaTodosImcs(); //problema quando deseja 2 funcoes para o msm botao
botao.addEventListener("click", calculaTodosImcs); //ouvidor de eventos que resolver o problema acima
botao.addEventListener("click", function(){
	console.log("Calculando imcs");
});






