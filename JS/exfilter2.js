const companies = [
    {name:'Samsung', marketValue:50,CEO: 'Kim Hyun Suk', foundedOn:1938},
    {name:'Microsoft', marketValue:415,CEO: 'Satya nadella', foundedOn:1975},
    {name:'Intel', marketValue:117,CEO: 'Brian Krzanich', foundedOn:1968},
    {name:'Facebook', marketValue:383,CEO: 'Mark Zuckerberg', foundedOn:2004},
    {name:'Spotify', marketValue:199,CEO: 'Daniel Ek', foundedOn:2006},
    {name:'Apple', marketValue:845,CEO: 'Tim Cook', foundedOn:1976},
]


const listA = companies.filter(bestCompanies =>{
    
    if (bestCompanies.foundedOn >= 1975 && bestCompanies.marketValue >= 200) {return true}
    return false
})
console.log(listA)