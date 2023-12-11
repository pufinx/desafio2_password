function verificar(){
    n1=document.getElementById("Contraseña1").value;
    n2=document.getElementById("Contraseña2").value;
    n3=document.getElementById("Contraseña3").value;

    if (n1 === "9" && n2 === "1" && n3 === "1") {
        let respuesta = document.querySelector('.password')
        respuesta.innerHTML = "La contraseña 1 es correcta";
        
    } else if (n1 === "7" && n2 === "1" && n3 === "4") {
        let respuesta = document.querySelector('.password');
        respuesta.innerHTML = "La contraseña 2 correcta"; 
        
    } else {
        let respuesta = document.querySelector('.password');
        respuesta.innerHTML = "La contraseña que ingresaste es  incorrecta ,lo siento :( ";
        
    }
};