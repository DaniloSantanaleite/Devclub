const number = () => {
    return 20
}


for (let index = 1; index <= number(); index += 1){
    console.log(index)
}

console.log(`O número digitado foi ${number()}`)