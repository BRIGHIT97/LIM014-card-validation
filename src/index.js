import validator from './validator.js';

/*console.log(validator);*/
  
document.getElementById("validar").addEventListener("click", validarCard); 


function validarCard(event){
    event.preventDefault();
 
    var userNumInput = document.getElementById("cardNumber").value;
    var expiry = document.getElementById("expiry").value;
    var cardCode = document.getElementById("cardCode").value;
    
    
    if ((userNumInput == "") || (expiry== "") ||(cardCode == "") ) {  //COMPRUEBA CAMPOS VACIOS
        alert("Los campos no pueden quedar vacios");
        return false;
    }

    let tarjetaValida = validator.isValid(userNumInput);
    let enmascarado = validator.maskify(userNumInput); 
    
   
    if (tarjetaValida == true){
    
        document.getElementById("secondContainer").innerHTML = "La tarjeta " + enmascarado + " es válida" ;
        
    }
    else {
    
        document.getElementById("secondContainer").innerHTML = "La tarjeta " + enmascarado + " es inválida";
         
        

    }

}


