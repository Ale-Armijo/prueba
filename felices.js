"use strict"

document.getElementById("mensaje").style.display="none";
document.addEventListener("click", ver, false);
function ver (){
    document.getElementById("mensaje").style.display="inline-block";
    document.getElementById("saludos").style.backgroundColor="gold";
    document.getElementById("mensaje").style.position="fixed";
    document.getElementById("mensaje").style.top="40%";
    document.getElementById("foto").src="foto.jpg";
}