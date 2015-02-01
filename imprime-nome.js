var trsPacientes = document.getElementByClassName("paciente");

percorreArray(trsPacientes, imprimeNome);

function imprimeNome(pacienteTr){
	
	var pacienteAtual = montaPaciente(pacienteTr);
	console.log(pacienteAtual.nome);	
}
