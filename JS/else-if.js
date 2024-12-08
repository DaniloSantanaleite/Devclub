const salary = 950

if(salary >= 1500){
    console.log('Visto aprovado')
}else if(salary >= 1000 && salary <= 1400){
    console.log('Remuneração inferior a R$ 1500')
}else if(salary <= 900){
    console.log('Renda mensal está fora do padrão')
}else{
    console.log('Não está conforme exigência')
}