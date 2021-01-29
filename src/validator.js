const validator = {  
  isValid: function (creditCardNumber) {
    const stringInvertido = creditCardNumber.split("").reverse().join("");
  
    let validador;
    let sumaTotal = 0;
    let sumaDigitos = 0;
 

    for (let i = 1; i < stringInvertido.length; i += 2) {
      //*//*console.log("numero par " + stringInvertido.charAt(i))//;
      const numeroPar = parseInt(stringInvertido.charAt(i) * 2);
      //*console.log("numero " + numeroPar)//;

      if (numeroPar >= 10) {
        let numeroString = numeroPar.toString(); //'10'
        sumaDigitos =
          parseInt(numeroString.charAt(0)) + parseInt(numeroString.charAt(1));
        //*console.log("suma " + sumaDigitos)//;

        sumaTotal = sumaTotal + sumaDigitos;
        //*console.log("sumaTotal " + sumaTotal)//;
      } else {
        sumaTotal = sumaTotal + numeroPar;
      }
    }

    for (let i = 0; i < stringInvertido.length; i += 2) {
      //*console.log("numero  inpar " + stringInvertido.charAt(i))//;
      let numero = parseInt(stringInvertido.charAt(i));

      sumaTotal = sumaTotal + numero;
      //*console.log("sumaTotal " + sumaTotal)//;
    }

    
    //*console.log("suma final " + sumaTotal)//;

    if (sumaTotal % 10 == 0) {
      validador = true;
    } else {
      validador = false;
    }
    return validador;
  },

  maskify: function (creditCardNumber) {
    let stringResult = "";

    for (let i = 0; i < creditCardNumber.length - 4; i++) {
      stringResult = stringResult + "*";
    }

    return (
      stringResult +
      creditCardNumber.substring(
        creditCardNumber.length - 4,
        creditCardNumber.length
      )
    );
  },
};

export default validator;