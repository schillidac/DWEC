//ejercicio 2

function mostrarEnlaces(num){

	var lista = document.links;
	document.getElementById("texto").value = lista[num].href

}

//ejercicio 3

function cambiarFondo(num){

	var fondo = document.getElementsByTagName("body");

	switch (parseInt(num)) {
		case 0:
			fondo[0].style.backgroundImage = 'url("muestra1.jpg")';
			break;
		case 1:
			fondo[0].style.backgroundImage = 'url("muestra2.jpg")';
			break;
		case 2:
			fondo[0].style.backgroundImage = 'url("muestra3.jpg")';
			break;
		case 3:
			fondo[0].style.backgroundImage = 'inherit';
	}

}

//ejercicio 4

function insertarLista(){

	var elemento = document.createElement("li");
	var texto = document.createTextNode("nueva lista");
	elemento.appendChild(texto);

	var padre = document.getElementById("lista");

	padre.appendChild(elemento);

}

//ejercicio 5

