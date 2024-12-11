const dadosBancarios ={
    name: "Danilo de Santana Leite",
    age: 23,
    genre: "Male",
    account: 123456-7,
    agencia: 111,
    bank: "WeBank",
}

for ( let dados in dadosBancarios){
    console.log(`${dados} : ${dadosBancarios[dados]}`)
}