class Usuarios{

	constructor(usuario, provincia, cuota){

		this.usuario = usuario;
		this.provincia = provincia;
		this.cuota = cuota;

	}

	mostrarUsuarios(){

		//creamos una fila y le añadimos un id para poder reemplazarlas o eliminarlas en siguientes ejecuciones
		var fila = document.createElement("tr");
		fila.setAttribute("class", "filas");
		//creamos columna
		var columna = document.createElement("td");
		this.usuario = document.createTextNode(this.usuario);
		columna.appendChild(this.usuario);
		//añadimos las filas y las columnas a la tabla
		document.getElementById("tabla").appendChild(fila);
		fila.appendChild(columna);

	}

	mostrarProvincia(provincia){


		if(this.provincia == provincia){

			//creamos una fila y le añadimos un id para poder reemplazarlas o eliminarlas en siguientes ejecuciones
			var fila = document.createElement("tr");
			fila.setAttribute("class", "filas");
			//creamos columnas
			var columna1 = document.createElement("td");
			var columna2 = document.createElement("td");
			this.usuario = document.createTextNode(this.usuario);
			columna1.appendChild(this.usuario);
			this.provincia = document.createTextNode(this.provincia);
			columna2.appendChild(this.provincia);
			//añadimos las filas y las columnas a la tabla
			document.getElementById("tabla").appendChild(fila);
			fila.appendChild(columna1);
			fila.appendChild(columna2);

		}

	}

	mostrarCuota(){

		var columna = document.createElement("td");
		this.cuota = document.createTextNode(this.cuota);
		columna.appendChild(this.cuota);

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

	if(parseInt(contador) > 0){
		var eliminar = document.getElementById("fila");
		document.getElementById("tabla").removeChild(eliminar[i]);
	}


	switch(num){

		case 0:
			for(var i = 0; i < objetos.length; i++)
				objetos[i].mostrarUsuarios();	
		break;
		case 1:
			var provincia = prompt("Indica una provincia");
			for(var i = 0; i < objetos.length; i++)
				objetos[i].mostrarProvincia(provincia);	
		break;
		case 2:

	}

	parseInt(contador++);

}















