var texto = ["Laura;Santander;50" , "Álvaro;Castro;50" , 
"Igor;Castro;60", "Ivan;Santander;40" , "Mónica;Zamora;30" , "Javi;Bilbao;30" , "David;Bilbao;50" , "José Luis;Bilbao;60"];

;

var contador = 0;
var padre = document.getElementById("tabla");





function mostrar(num){

	for(var i = 0;i<texto.length;i++){

		if(parseInt(contador) > 0){

			//Si ya se ha ejecutado el script al menos una vez, eliminará los elementos que se crearon anteriormente.
			var eliminar = document.getElementById(""+i+"");
			padre.removeChild(eliminar);

		}


		//extraemos los usuarios, provincias o cuotas, según el parámetro que entre en la llamada a la función
		var usuarios = texto[i].split(";");
		var usuario = document.createTextNode(usuarios[num]);

		//creamos una fila y le añadimos un id para poder reemplazarlas o eliminarlas en siguientes ejecuciones
		var fila = document.createElement("tr");
		fila.setAttribute("id", ""+i+"");

		//creamos una columna
		var columna = document.createElement("td");

		//añadimos las filas y las columnas a la tabla
		padre.appendChild(fila);
		columna.appendChild(usuario);
		fila.appendChild(columna);

	}

	parseInt(contador++);
}








