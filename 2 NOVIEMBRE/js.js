class Usuarios{

	constructor(usuario, provincia, cuota){

		this.usuario = usuario;
		this.provincia = provincia;
		this.cuota = cuota;

	}


	generarTabla(contador){

		if(parseInt(contador) == 0){
			var tbody = document.createElement("tbody");
			tbody.setAttribute("id", "table-body");
			document.getElementById("tabla").appendChild(tbody);
		}

		var fila = document.createElement("tr");
		fila.setAttribute("id", ""+contador+"")
		fila.setAttribute("class", "fila");
		//creamos columnas
		var columna1 = document.createElement("td");
		columna1.appendChild(document.createTextNode(this.usuario));
		var columna2 = document.createElement("td");
		columna2.appendChild(document.createTextNode(this.provincia));
		var columna3 = document.createElement("td");
		columna3.appendChild(document.createTextNode(this.cuota));
		//añadimos las filas y las columnas a la tabla
		document.getElementById("table-body").appendChild(fila);
		fila.appendChild(columna1);
		fila.appendChild(columna2);
		fila.appendChild(columna3);

	}


	mostrarUsuarios(contador){
		
		this.generarTabla(contador);

	}

	mostrarProvincia(contador, provincia){


		if(this.provincia == provincia)
			this.generarTabla(contador);


	}

	mostrarCuota(contador, cuota){

		if(this.cuota < cuota)
			this.generarTabla(contador);

	}

}




var texto = ["Laura;Santander;50" , "Álvaro;Castro;50" , 
"Igor;Castro;60", "Ivan;Santander;40" , "Mónica;Zamora;30" , "Javi;Bilbao;30" , "David;Bilbao;50" , "José Luis;Bilbao;60"];

var objetos = [];

var contador = 0;

for(var i = 0; i < texto.length; i++){

	var usuarios = texto[i].split(";");
	objetos[i] = new Usuarios(usuarios[0],usuarios[1],usuarios[2]);
	
}

function mostrar(num){


	var tbody = document.getElementById("table-body");
	tbody.parentNode.removeChild(tbody);


	switch(num){

		case 0:
			for(var i = 0; i < objetos.length; i++)
				objetos[i].mostrarUsuarios(i);	
		break;
		case 1:
			var provincia = prompt("Indica una provincia");
			for(var i = 0; i < objetos.length; i++)
				objetos[i].mostrarProvincia(i, provincia);	
		break;
		case 2:
			var cuota = prompt("Indica una cuota");
			for(var i = 0; i < objetos.length; i++)
				objetos[i].mostrarCuota(i, cuota);

	}

	parseInt(contador++);

}















