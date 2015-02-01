function montapacinete(pacienteTr){
	var tdNome = pacienteTr.getElementByClassName("info-nome")[0]; // vc esta no primeio tr paciente e precisa pegar o primeiro elemento info-nome, pois classname retorna array10
	var tdPeso = pacienteTr.getElementByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementByClassName("info-altura")[0];


	var pacienteAtual {"nome" : tdNome.textContent, 
					   "peso" : tdPeso.textContent, 
					   "altura" :tdAltura.textContent,
					   "pegaImc" : function(){
					   		if(this.paciente.altura !=0){
								var imc = this.paciente.peso/(this.paciente.altura * this.paciente.altura); //funcao nao esta mais com escopo global. Agora soh pode ser chamada a partir de um paciente
								return imc;

							} else {
								console.log("Altura eh igual a 0");
							}
					   }};
					   
	return pacienteAtual;
}