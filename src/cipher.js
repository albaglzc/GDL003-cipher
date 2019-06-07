window.cipher = {
//texto: texto que introduce el usuario en el formulario
//shift: espacios que se recorrerá el texto. en el ejemplo es shift, en el repo es offset
  encrypt: function(textoUsuario, shift) {
    let textoCodificar = texto.value;
    let result = "";
    //recorrer cada letra de la palabra que se va a cifrar
    for (let i = 0; i < textoUsuario.length; i++) {

         //codigo para cada letra
        let c = text.charCodeAt(i);

        // formula de michelle para cifrar. funciona solo con mayúsculas, por el rango 65 a 90 (ascii)
        if(c >= 65 && c <=  90) {
           result += String.fromCharCode((c - 65 + shift) % 26 + 65);
        }
    }
return result;
  }
}
