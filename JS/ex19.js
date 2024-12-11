let min = 0;
let max = 10;
let sorteio = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(sorteio)

if(sorteio === 10){
    console.log("Você é o ganhandor")
}else{
    console.log("PERDEU!!")
}