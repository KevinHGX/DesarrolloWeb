
/*
encabezado
contenido
pie de pagina
URL

*/

var arrayObjetos = [];

class info{
	constructor(d1,d2,d3,d4){
		this.encabezado = d1;
		this.contenido = d2;
		this.piePagina = d3;
		this.url = d4;
	}

	mostrar(){
		console.log("-------------------------------");
		console.log(this.encabezado);
		console.log(this.contenido);
		console.log(this.piePagina);
		console.log(this.url);
	}
}

function begin(){

	let dato1 = prompt("Ingresa el encabezado");
	let dato2 = prompt("Ingresa el contenido");
	let dato3 = prompt("Ingresa el pied pagina");
	let dato4 = prompt("Ingresa e URL");
	
	let objeto = new info(dato1,dato2,dato3,dato4);

	arrayObjetos.push(objeto);

	alert("Listo");
}

function show(){
	console.clear();
	console.log("INFORMACION ACTUALIZADA");
	for (var i=0;i<arrayObjetos.length;i++) {
		arrayObjetos[i].mostrar();
	}
}

