
var arrayObjetos = [];

class info{
	constructor(d1,d2,d3,d4){
		this.encabezado = d1;
		this.contenido = d2;
		this.pagina = d3;
		this.url = d4;
	}

	show(){
		console.log("-------------------------------");
		console.log(this.encabezado);
		console.log(this.contenido);
		console.log(this.pagina);
		console.log(this.url);
	}
}

function clear(){
	let array=["encabezado","contenido","pagina","url"];

	for(let i=0;i < 4;i++){
		document.getElementById(array[i]).value="";
	}

}

function save(){
	let dato1 = document.getElementById("encabezado").value;
	let dato2 = document.getElementById("contenido").value;
	let dato3 = document.getElementById("pagina").value;
	let dato4 = document.getElementById("url").value;
		
	clear();		

	let objeto = new info(dato1,dato2,dato3,dato4);

	arrayObjetos.push(objeto);
}

function show(){
	console.clear();
	console.log("INFORMACION ACTUALIZADA");
	for (var i=0;i<arrayObjetos.length;i++) {
		arrayObjetos[i].show();
	}
}
