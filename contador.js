let buton = document.getElementById("buton")
let input = document.getElementById("input")
let input2 = document.getElementById("input2")

let contadorp = (strin,palabra) => {
    
    // declaro una variable con un contador, que aumentara cada vez que se itere sobre el array y encuentre un valor con la condicional IF

    let contador = 0
    let palabras = strin.split(" ")

    // Ahora yo tengo, un array de "Strin"
    // Escribo en consola, el strin transformado en array

    console.log(palabras)
    
    for(i = 0; i <= palabras.length; i++){
        if(palabras[i] == palabra){
            contador++
        }
    }
    console.log(`Su string ingresado tiene en total ${contador} concordancias`)
    }

buton.addEventListener("click",() => {
    
contadorp(input.value,input2.value)
    
}

)
