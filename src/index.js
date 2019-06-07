// acá debes escuchar eventos del DOM, invocar `cipher.encode()`
//  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.


 /*let encrypt = document.getElementById("mostrarCifrado");
let decrypt = document.getElementById("mostrarDescifrado");

//escuchar eventos
encrypt.addEventListener("click", function() {console.log(window.cipher.encode())});
decrypt.addEventListener("click", function() {console.log(window.cipher.decode())});
/*mostrarCifrado.addEventListener("click", function()
{

}
document.getElementById("mostrarCifrado").addEventListener("click", function(){
  let textoDelUsuario= document.getElementById("texto").value;
  }
*/
 function regresar(){
    first.style.display = "block";
    second.style.display = "none";
    third.style.display = "none";
}
    function encrypt(){
  first.style.display = "none";
  second.style.display = "block";
  third.style.display = "none";
document.getElementById("texto").innerHTML=
window.cipher.encrypt(textoUsuario, shift)

}
function decrypt(){
  first.style.display = "none";
  second.style.display = "none";
  third.style.display = "block";
}
