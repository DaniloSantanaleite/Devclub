const calculate = numero => {
    if(numero == 0 && numero == 10){
    const count = 11
    for (let index = 0; index < count; index += 1)
        console.log(`${numero} x ${index} = ${numero * index}`)}

    else{
        console.log("Somente é aceito número entre 0 a 10")
    }
}

calculate(11)