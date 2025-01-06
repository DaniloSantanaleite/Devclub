const button = document.getElementById("convert-button")
const select = document.getElementById("Select-Currency")


const  dolar = 6.15
const  euro = 7.00
const Bitcoin = 160000

const convertValue = () => {
    const input = document.getElementById("input-real").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value-text")


    realValueText.innerHTML = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
    }).format(input)

if(select.value === "US$ Dolar Americano"){
    currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(input/dolar)
}


if(select.value === "€ Euro"){
    currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
    }).format(input/euro)
}

if(select.value === "Bitcoin"){
    currencyValueText.innerHTML = new Intl.NumberFormat('ja-JP', {
        style: 'currency',
        currency: 'BTC',
    }).format(input/Bitcoin)
}

}
changeCurrency = () =>{
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("Currency-img")
    if(select.value === '€ Euro'){
        currencyName.innerHTML = "Euro"
        currencyImg.src= "./assets/Euro.png"
    }

    if(select.value === 'US$ Dolar Americano'){
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src= "./assets/estados-unidos .png"
    }

    if(select.value === 'Bitcoin'){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src= "./assets/bitcoin-image.png"
    }

    convertValue()
}

button.addEventListener("click", convertValue)
select.addEventListener("change",changeCurrency)


