function encriptar() {
    let texto = document.getElementById("textoEncriptar").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let  parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("image");

let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "utaf");

if (texto.length != 0) {
    document.getElementById("textoEncriptar").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con exito";
    parrafo.textContent = ":)";
    imagen.src = "img/imgd.jpg";
}else {
    imagen.src = "img/imga.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "¡Por favor! Ingrese el texto a encriptar";
    alert("¡Debes ingresar un texto!");
}
}

function desencriptar() {
    let texto = document.getElementById("textoEncriptar").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let  parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("image");

    let textoCifrado = texto
    .replace(/enter/gi,"e")
    .replace(/imes/gi,"i")
    .replace(/ai/gi,"a")
    .replace(/ober/gi,"o")
    .replace(/utaf/gi,"u");

    if (texto.length != 0) {
        document.getElementById("textoEncriptar").value = "";
        document.getElementById("textoDesencriptado").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con exito";
        parrafo.textContent = ":)";
        imagen.src = "img/imgc.jpg";
    } else {
        imagen.src = "img/imga.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "¡Por favor! Ingrese el texto a desencriptar";
        alert("¡Debes ingresar un texto!");
}
}

function copiar() {
    let respuesta = document.getElementById("textoDesencriptado");
    let button = document.getElementById("BtnCopiar");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let imagen = document.getElementById("image");

   

    if (respuesta.length != 0) {
        navigator.clipboard.writeText(respuesta.value)
        .then(() => {
            button.textContent = "Copiado";
            localStorage.setItem("textoCopiado", respuesta);
            tituloMensaje.textContent = "Texto copiado en portapeleras";
            parrafo.textContent = "¡Listo!";
            imagen.src = "img/imgb.jpg";
        })
        .catch(error => {
            console.error('Error al copiar al portapapeles:', error);
        });
    } else {
        document.getElementById("textoDesencriptado").value = "";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "";
        alert("Debes ingresar un texto");
}
}
