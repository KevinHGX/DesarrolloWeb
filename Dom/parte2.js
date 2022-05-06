
var array = ["encabezado","contenido","pagina","url"];
var arrayInfo = [];
var listView;

function clear(){

	for(let i=0;i < 4;i++){
		document.getElementById(array[i]).value="";
	}
}

function save(){
	let dato1 = document.getElementById("encabezado").value;
	arrayInfo.push(dato1);
	let dato2 = document.getElementById("contenido").value;
	arrayInfo.push(dato2);
	let dato3 = document.getElementById("pagina").value;
	arrayInfo.push(dato3);
	let dato4 = document.getElementById("url").value;
	arrayInfo.push(dato4);
		
	clear();

	createList();		
}

function update(){
	document.getElementById("contenedor").appendChild(listView);
}


function createList(){

	listView = document.createElement('ol');

	for(var i=0;i<arrayInfo.length;i++)
	{
	    var listViewItem=document.createElement('li');
	    listViewItem.appendChild(document.createTextNode(array[i]+" >> "+arrayInfo[i]));
	    listView.appendChild(listViewItem);
	}

	//listView.innerHTML="<hr>";

	arrayInfo = [];

	console.log("saved")
}


