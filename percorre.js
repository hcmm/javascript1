function percorreArray(trsPacientes, comportamento){
	for(int posicaoAtual = 0; posicaoAtual <= trsPacientes.length - 1; posicaoAtual++){
		var pacienteTrAtual  = trsPacientes[posicaoAtual];
		//executaAlgumaCoisa
		comportamento(pacienteTrAtual);
	}
}