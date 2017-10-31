class Usuarios{

	constructor(usuario, provincia, cuota){

		this.usuario = usuario;
		this.provincia = provincia;
		this.cuota = cuota;
	}

	mostrarUsuarios(){
		
		return "<tr><td>" +this.usuario+ "</td><td>" +this.provincia+ "</td><td>" +this.cuota+ "</td></tr>";
	}

	mostrarProvincia(provincia){

		if(this.provincia.toUpperCase() == provincia.toUpperCase())
			return "<tr><td>" +this.usuario+ "</td><td>" +this.provincia+ "</td><td>" +this.cuota+ "</td></tr>";
		else
			return "";
	}

	mostrarCuota(cuota, menormayor){

		if(this.cuota < cuota && parseInt(menormayor) == 0)
			return "<tr><td>" +this.usuario+ "</td><td>" +this.provincia+ "</td><td>" +this.cuota+ "</td></tr>";
		else if(this.cuota > cuota && parseInt(menormayor) == 1)
			return "<tr><td>" +this.usuario+ "</td><td>" +this.provincia+ "</td><td>" +this.cuota+ "</td></tr>";
		else
			return "";
	}
}

var usuarios = [new Usuarios("Laura","Santander",50) ,new Usuarios("Álvaro","Castro",50) ,new Usuarios("Igor","Castro",60) ,new Usuarios("Ivan","Santander",40) ,new Usuarios("Mónica","Zamora",30) ,new Usuarios("Javi","Bilbao",30) ,new Usuarios("David","Bilbao",50) ,new Usuarios("José Luis","Bilbao",60)];

function mostrar(num, menormayor){

	var contenido = '<thead><tr><th class="tableth">Usuario</th><th class="tableth">Provincia</th><th class="tableth">Cuota</th></tr></thead><tbody id="tbody"></tbody>';
	var provincia = "";
	var cuota = "";

	for(var i = 0; i < usuarios.length; i++){
		if(num == 0)
			contenido += usuarios[i].mostrarUsuarios();
		else if(num == 1){
			provincia = document.getElementById("provincia").value;
			contenido += usuarios[i].mostrarProvincia(provincia);
		}
		else{
			cuota = document.getElementById("cuota").value;
			contenido += usuarios[i].mostrarCuota(cuota, menormayor);
		}
	}
	document.getElementById("tabla").innerHTML = contenido;
}

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














