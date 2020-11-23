// declaro una funcion que resiva un valor y verifique si se lea igual al revez o al derecho


let derecho = (palabra) => {

    let palabra2 = ""
    
    for (i = palabra.length -1; i >= 0; i--){
   palabra2 = palabra2.concat("",palabra.charAt(i))
}
   if(palabra == palabra2){
       console.log("La palabra ingresada es un palindromo")
   }
   else{
       console.error("Ups su palabra no es un palindromo")
   }
}

derecho("eces")