var trs = document.getElementsByTagName("tr");
percorreArray(trs, function(tr){
	tr.addEventListener("mouseover", function(){ //click dblclick
		this.setAttribute("bgcolor", "grey");
	});
});