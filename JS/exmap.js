const list = [
    {name: "Danilo", vip: true},
    {name: "Diego", vip: false},
    {name: "Ingrid", vip: true},
    {name: "Max", vip: true}
];

const newList = list.map ((client) => {

    const newClient = {
        name: client.name,
        vip: client.vip,
        sector: client.vip ? "Black" : "Green"
    }
    return newClient

})

console.log(newList)