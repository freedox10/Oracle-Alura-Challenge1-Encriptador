const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const infomsg1 = document.querySelector(".informacion-msg1");
const infomsg2 = document.querySelector(".informacion-msg2");
const btncopiar = document.querySelector(".copiar");

// Muestra resultados encriptación
function btnEncriptar(){
	const textoEncriptado = encriptar(textArea.value);
	mensaje.value = textoEncriptado;
	textArea.value = "";
	mensaje.style.backgroundImage = "none";
	infomsg1.style.visibility = "hidden";
	infomsg2.style.visibility = "hidden";
	btncopiar.style.display = "block";
}

// Función encriptar
function encriptar(stringEncriptada){
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
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
	const textoEncriptado = desencriptar(textArea.value);
	mensaje.value = textoEncriptado;
	textArea.value = "";
	
}

// Función desencriptar
function desencriptar(stringDesencriptada){
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
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

//Función copiar mensaje
function copiarMensaje(){
    navigator.clipboard.writeText(mensaje.value);
}
