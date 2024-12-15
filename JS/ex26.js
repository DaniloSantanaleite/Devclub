const calculate = numero => {
    const count = 11
    for (let index = 0; index < count; index += 1)
        console.log(`${numero} x ${index} = ${numero * index}`)
}

calculate(5)