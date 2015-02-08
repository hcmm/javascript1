	console("iniciando js");

	// var atualizaDado = function(){
	// 	var carrinho = $(this);
	// 	var itens = carrinho.find(".item-total:visible");
	// 	var total = 0;

	// 	for(var i = 0; i < itens.length; i++){
	// 		var item = $(itens[i]);
	// 		var valor = parseFloat(item.text());
	// 		total = total + valor;
	// 	}

	// 	console.log("valor total: "+ total);

	// 	carrinho.find(".valor-total").text(total);
	// 	carrinho.find("#quantidade-de-itens").text(itens.length);
	// }


	var umaPropaganda = function(){
		var propagandas ["O que acha de comprar uma motoccleta?", 
						  "O que acha de comprar uma lancha?",
						  "O que acha de comprar uma bicleta?",
						  "O que acha de comprar uma carro?"
						  ];

		//arredonda pra baixo um numero entre 0 e 3; 				  
		var posicao  = Math.floor(propagandas.length * Math.random());
		//propagando em sim
		var texto = propagandas[posicao];

		//var tr = $("<tr><td colspan = '6'>"+texto+"<td></tr>");

		var tr = $("<tr>")addClass("propaganda").append($("<td>"));
		tr.find("td").attr("colspan", 6).text(texto);

		return tr;
	}

	var atualizaDados = function(){
		console.log("atualizando dados");

		var carrinhos = $(".carrinho");

		// $(".carrinho").each(funtion(){
		// 	//function  each te da o i
		// 	$(this).find("tr").each(function(i){
		// 		if(i%3==0){
		// 			var terceiraLinha = $(this);
		// 		}
		// 	})
		// })



		carrinhos.each(function(){
			var carrinho = $(this);
			var itens = carrinho.find(".item-total:visible");
			var total = 0;

			for(var i = 0; i < itens.length; i++){
				var item = $(itens[i]);
				var valor = parseFloat(item.text());
				total = total + valor;
			}

			console.log("valor total: "+ total);

			carrinho.find(".valor-total").text(total);
			carrinho.find("#quantidade-de-itens").text(itens.length);
		});
	};

	/*
	Evitar redirect passa-se o evento. Isto por causa do lunk
	*/

	var removeItem = function(event){
		console.log("removendo item");
		event.preventDefault();
		// this = link e queremos remover o pai do pai do link
		var self = $(this);
		//self.parent().parent().remove();
		//O pai mais proximo que se chama tr. .closest = selector , ele navega na arvore do elemento
		//self.closest("tr").remove();
		self.closest("tr").hide();

		// var atual = parseInt($("#quantidade-de-itens").text());
		// var novaQuantidade = atual -1;
		// $("#quantidade-de-itens").text(novaQuantidade);

		// var precoAtual = parseFloat($(".valor-total".text()));
		// //pega-se o valor do elemento irmao do pai
		// //var preco = parseFloat(self.parent().prev().text());

		// //var preco =  parseFloat(self.closest("td").siblings(".item-total").text());

		// var preco =  parseFloat(self.closest("tr").find(".item-total").text());

		// var precoFinal = precoAtual - preco;
		
		// $(".valor-total").text(precoFinal);
		atualizaDados();
	};

	var undo = function(){
		//pricura a div carrinho pai
		var carrinho = $(this).closest(".carrinho");
		// nesse carrinho pai, procura seus trs visible e remove a class
		carrinho.$("tr:visible").removeClass("recuperado");
		// : extensoes de seletores hidden e visble
		var trs = $("tr:hidden");
		trs.addClass("recuperado");
		trs.show();

		atualizaDados();
	};

	var daDestaque = function(){
		//acertando css no js nao eh bom// tarefa do design //melhor add class
		//$(this).css({"background" : "#ccc",
		//			  "opacity" : 0.5});
		$(this).find(".remove-item").fadeIn();
		$(this).addClass("hovering");
	}

	var tiraDestaque = function(){
		//$(this).css("background", "");
		$(this).find(".remove-item").fadeOut();
		$(this).removeClass("hovering");
	}

	// var escondePropagandas = function(event){
	// 	event.preventDefault();
	// 	$(".propaganda").hide();
	// 	// $(".propaganda").fadeOut(5000);
	// }

	// var mostraPropagandas = function(event){
	// 	event.preventDefault();
	// 	$(".propaganda").show();
	// 	// $(".propaganda").fadeIn(5000);
	// }

	var alternaPropagandas = function(event){
		event.preventDefault();
		$(".propaganda").fadeToogle();
		$(".alterna-propaganda").toogle();
		// $(".propaganda").fadeOut(5000);
	}

	var aposIniciazado = function(){
		atualizaDados();
		$(".undo").click(undo);
		$(".remove-item").click(removeItem);
		//Insere a propagando logo apos a 3 linha
		$(".carrinho").each(function(){
			$("tr:nth-child(3n), tr:last").each(){
				umaPropaganda().insertAfter($(this));
			});
		});

		//$("tr").on("mouseenter", daDestaque);
		//$("tr").on("mouseleave", tiraDestaque);

		//quando o hover e quando sai
		$(".carrinho tbody tr").hover(daDestaque, tiraDestaque);
		$(".alterna-propaganda").click(alternaPropagandas);
	};

	$(aposIniciazado);