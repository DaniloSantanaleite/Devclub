const list = [20,3,234,12,17,541,6,87,275,1000];

const companies = [
    {name:'Samsung', marketValue:50,CEO: 'Kim Hyun Suk', foundedOn:1938},
    {name:'Microsoft', marketValue:415,CEO: 'Satya nadella', foundedOn:1975},
    {name:'Intel', marketValue:117,CEO: 'Brian Krzanich', foundedOn:1968},
    {name:'Facebook', marketValue:383,CEO: 'Mark Zuckerberg', foundedOn:2004},
    {name:'Spotify', marketValue:199,CEO: 'Daniel Ek', foundedOn:2006},
    {name:'Apple', marketValue:845,CEO: 'Tim Cook', foundedOn:1976},
]

const plus = companies.map((ValuePlus) =>{
    const newCompanies = {
        name: ValuePlus.name,
        marketValue: ValuePlus.marketValue = ValuePlus.marketValue + ValuePlus.marketValue / 10,
        CEO: ValuePlus.CEO,
        foundedOn: ValuePlus.foundedOn
    }

    return newCompanies
})

console.log(plus)



const old = plus.filter(moreOld => {

    if(moreOld.foundedOn < 2000) {return true}


})

console.log(old)




const sum = old.reduce(((acc,total)=> acc +total.marketValue),0)

console.log(sum)





