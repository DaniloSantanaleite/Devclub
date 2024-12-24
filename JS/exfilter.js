const list = [
    {name: "Danilo", vip: true},
    {name: "Diego", vip: false},
    {name: "Ingrid", vip: true},
    {name: "Max", vip: true}
];

const justVips = list.filter(client => {
    return client.vip
})

console.log(justVips)