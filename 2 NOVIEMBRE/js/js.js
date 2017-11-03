/*
	He decidido hacerlo con POO porque creo que es más fácil separar conceptos y queda más claro a la hora de leer el código
*/

class Usuarios{

	//constructor con los tres atributos que tenía cada usuario
	constructor(usuario, provincia, cuota){

		this.usuario = usuario;
		this.provincia = provincia;
		this.cuota = cuota;
	}

	//método que se encarga de mostrar usuarios
	//he dedidido que devuelva las columnas y filas directamente porque con un innerHTML se puede meter dentro de un elemento sin necesidad de crear decenas de elementos y nodos de texto
	mostrarUsuarios(){
		
		return "<tr><td>" +this.usuario+ "</td><td>" +this.provincia+ "</td><td>" +this.cuota+ "</td></tr>";
	}
	//método que se encarga de mostrar las provincias
	//he dedidido que devuelva las columnas y filas directamente porque con un innerHTML se puede meter dentro de un elemento sin necesidad de crear decenas de elementos y nodos de texto
	//si la provincia que entra poro parámetro es igual a la del objeto con la que se le compara, se muestra.
	mostrarProvincia(provincia){

		if(this.provincia.toUpperCase() == provincia.toUpperCase())
			return "<tr><td>" +this.usuario+ "</td><td>" +this.provincia+ "</td><td>" +this.cuota+ "</td></tr>";
		else
			return "";
	}
	//método que se encarga de mostrar usuarios
	//he dedidido que devuelva las columnas y filas directamente porque con un innerHTML se puede meter dentro de un elemento sin necesidad de crear decenas de elementos y nodos de texto
	//entran dos parametros, la cuota por la que queremos filtrar, y menormayor que valdrá 0 o 1, 0 para menor que y 1 para mayor que
	//si la cuota que entra por parametro es menor o mayor que la del objeto con la que se le compara, se muestra
	mostrarCuota(cuota, menormayor){

		if(this.cuota < cuota && parseInt(menormayor) == 0)
			return "<tr><td>" +this.usuario+ "</td><td>" +this.provincia+ "</td><td>" +this.cuota+ "</td></tr>";
		else if(this.cuota > cuota && parseInt(menormayor) == 1)
			return "<tr><td>" +this.usuario+ "</td><td>" +this.provincia+ "</td><td>" +this.cuota+ "</td></tr>";
		else
			return "";
	}
}

//se crean los objetos y se almacenan en un array para ser recorrido después
var usuarios = [new Usuarios("Laura","Santander",50) ,new Usuarios("Álvaro","Castro",50) ,new Usuarios("Igor","Castro",60) ,new Usuarios("Ivan","Santander",40) ,new Usuarios("Mónica","Zamora",30) ,new Usuarios("Javi","Bilbao",30) ,new Usuarios("David","Bilbao",50) ,new Usuarios("José Luis","Bilbao",60)];

//funcion que se encarga de recoger los eventos, en este caso en qué elemento hacemos click
//pueden entrar dos parametros de entrada, num servirá para saber por qué atributo queremos filtrar y mayormenor sólo entrará en caso de que se quiera filtrar por cuota
function mostrar(num, menormayor){

	//se guarda en la variable contenido la cabecera de la tabla
	var contenido = '<thead><tr><th class="tableth">Usuario</th><th class="tableth">Provincia</th><th class="tableth">Cuota</th></tr></thead><tbody id="tbody"></tbody>';
	var provincia = "";
	var cuota = "";

	//se recorre el array de objetos
	for(var i = 0; i < usuarios.length; i++){
		//si num vale 0 es porque se ha pulsado el botón de mostrar usuarios
		if(num == 0)
			contenido += usuarios[i].mostrarUsuarios();
		//si num vale 1 es porque el usuario ha decidido filtrar por provinvia
		else if(num == 1){
			//provincia valdrá lo que el usuario haya metido en el campo que aparece cuando se quiere filtrar por provincia
			provincia = document.getElementById("provincia").value;
			//por cada iteracción del for se hace una llamada al objeto correspondiente y se le pasa como parametro la provincia
			//el metodo mostraProvincia del objeto se encarga de hacer las comparaciones, y según el resultado devuelve un string vacío o una fila de la tabla
			contenido += usuarios[i].mostrarProvincia(provincia);
		}
		//si num no vale ni 0 ni 1 es porque el usuario quiere filtrar por cuota
		else{
			//cuota vale el valor que el usuario añade en el campo que aparece cuando se quiere filtrar por cuotta
			cuota = document.getElementById("cuota").value;
			//el metodo mostrarCuota se encarga de hacer las comparaciones, y según el resultado devuelve un string vacío o una fila de la tabla
			contenido += usuarios[i].mostrarCuota(cuota, menormayor);
		}
	}
	//por cada iteracción del for se ha ido concatenando a la variable contenido cada uno de los resultados que devuelven los métodos de los objetos
	//se añade a la tabla mediante un innerHTML
	document.getElementById("tabla").innerHTML = contenido;
}

//este metodo sirve para mostrar u ocultar botones y campos según lo que se quiera mostrar en la tabla
function opciones(num){

	if(num == 1){
		document.getElementById("camposprovincia").style.display = "block";
		document.getElementById("camposcuota").style.display = "none";
		document.getElementById("cabecera").style.marginBottom = '100px';
	}
	else if(num == 2){
		document.getElementById("camposcuota").style.display = "block";
		document.getElementById("camposprovincia").style.display = "none";
		document.getElementById("cabecera").style.marginBottom = '100px';
	}
	else{
		document.getElementById("camposcuota").style.display = "none";
		document.getElementById("camposprovincia").style.display = "none";
		document.getElementById("cabecera").style.marginBottom = '30px';
		mostrar(num);
	}
}














