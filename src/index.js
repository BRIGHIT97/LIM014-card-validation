import validator from './validator.js';

/*console.log(validator);*/
  
document.getElementById("validar").addEventListener("click", validarCard); 


function validarCard(event){
    event.preventDefault();
 
    const userNumInput = document.getElementById("cardNumber").value;
    const expiry = document.getElementById("expiry").value;
    const cardCode = document.getElementById("cardCode").value;
    
    
    if ((userNumInput == "") || (expiry== "") ||(cardCode == "") ) {  //COMPRUEBA CAMPOS VACIOS
        alert("Los campos no pueden quedar vacios");
        return false;
    }

    let tarjetaValida = validator.isValid(userNumInput);
    let enmascarado = validator.maskify(userNumInput); 
    
   
    if (tarjetaValida == true){
    
        document.getElementById("secondContainer").innerHTML = "La tarjeta es válida" ;
       /*document.querySelector('.valido').style.display="block";*/
    }
    else {
    
        document.getElementById("secondContainer").innerHTML = "La tarjeta NO es inválida";
        /*document.querySelector('.novalido').style.display="block";*/

    }

    document.getElementById("cardNumber").value = enmascarado;
}



