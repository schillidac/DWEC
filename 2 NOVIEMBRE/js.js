var texto = ["Laura;Santander;50" , "Álvaro;Castro;50" , 
"Igor;Castro;60", "Ivan;Santander;40" , "Mónica;Zamora;30" , "Javi;Bilbao;30" , "David;Bilbao;50" , "José Luis;Bilbao;60"];
var caja = document.getElementById("caja"); 

function mostrar(num){

	

	switch(parseInt(num)){
		case 0:
			for(var i = 0; i<texto.length; i++){

				var usuario = texto[i].split(";");
				caja.innerHTML += usuario[0] + "<br>";

			}
		break;
		case 1:

			var provincia = prompt("Dime una provincia");
			

			

			for(var i = 0; i<texto.length; i++){

				var provincias = texto[i].split(";");

				if(provincia.toUpperCase() == provincias[1].toUpperCase())
					alert(provincias[0]);

					

			}



	}


}








