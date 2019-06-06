/*
//texto que introduce el usuario en el formulario
let textoDelUsuario = texto.value;
//número de espacios que se recorrerá el texto
let shift;
//función cifrar o codificar texto:
function encrypt() {
    let result = "";
    if (mode == "ceaser"){

        //recorrer cada letra de la palabra que se va a cifrar
        for (let i = 0; i < text.length; i++) {

             //codigo para cada letra
            let c = text.charCodeAt(i);

            // formula para cifrar. funciona con mayúsculas por el rango 65 a 90
            if(c >= 65 && c <=  90) {
               result += String.fromCharCode((c - 65 + shift) % 26 + 65);


            }
        }
    }
    return result;
}

function decrypt(text,shift){
    var result = "";
    shift = (26 - shift) % 26;
    result = encrypt(text,shift);
    return result;
}
*/
window.cipher = {
  encode: function(string, offset) {
    return "textoCifrado"
  }
},
{
  decode: function(string, offset) {
    return "textoDescifrado"
  }
}
