//variables para DOM
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const informacion = document.querySelector(".informacion");
const infomsg1 = document.querySelector(".informacion-msg1");
const infomsg2 = document.querySelector(".informacion-msg2");
const btncopiar = document.querySelector(".copiar");
//llave de encriptacion
const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
//caracteres no válidos
const excluidos = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù'ñÑA-Z]/g;

// Muestra resultados encriptación
function btnEncriptar(){
	if (validar(textArea.value)) {
		const textoEncriptado = encriptar(textArea.value);
		mensaje.value = textoEncriptado;
		textArea.value = "";
		mensaje.style.backgroundImage = "none";
		infomsg1.style.visibility = "hidden";
		infomsg2.style.visibility = "hidden";
		btncopiar.style.display = "block";
	}
}

// Función encriptar
function encriptar(stringEncriptada){
	//console.table(matrizCodigo)	
	stringEncriptada = stringEncriptada.toLowerCase();

	for (let i = 0; i < matrizCodigo.length; i++) {
		if(stringEncriptada.includes(matrizCodigo[i][0])) {
			stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
			console.log(stringEncriptada);
		}
	}
	return stringEncriptada
}

// Muestra resultados desencriptación
function btnDesencriptar(){
	if (validar(textArea.value)) {
		const textoEncriptado = desencriptar(textArea.value);
		mensaje.value = textoEncriptado;
		textArea.value = "";
	}	
}

// Función desencriptar
function desencriptar(stringDesencriptada){
	//console.table(matrizCodigo)	
	stringDesencriptada = stringDesencriptada.toLowerCase();

	for (let i = 0; i < matrizCodigo.length; i++) {
		if(stringDesencriptada.includes(matrizCodigo[i][1])) {
			stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
			console.log(stringDesencriptada);
		}
	}
	return stringDesencriptada
}

//Función validación de caracteres
function validar(textoEntrada) {
    if(textoEntrada == "") {
        infomsg1.style.color = "red";
        return false;
    }
    //infomsg1.style.visibility = "visible";
    //infomsg1.style.color = "#000000";

    if(textoEntrada.match(excluidos)) {
        informacion.style.color = "red";        
        return false;
    }
    informacion.style.color = "#343A40";
    return true;
}

//Función copiar mensaje
function copiarMensaje(){
    navigator.clipboard.writeText(mensaje.value);
}
