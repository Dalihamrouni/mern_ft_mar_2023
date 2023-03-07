// *                    MAP                 

const array1  = [1,4,9,16]

// for (let i=0; i<array1.length; i++){
//     console.log("From For ",array1[i]);
// }
const x = (y)=> {
    return y*2+3*y-3
}
const array2 = array1.map((bob, h) => {
    // console.log(bob, h);
    return x(bob)
})
// console.log(array1);
// console.log(array2);

const animals  = ["leopard 🐆", "giraffe 🦒 ","zebra 🦓", "elephant 🐘", "monkey 🐵", "lion 🦁"];

const happyAnimals = animals.map((animal)=>{
    return `${animal} is Happy 🎈`
})
// console.log(happyAnimals);

// *                            FILTER                                  

// for (let i=0 ; i<animals.length;i++){
//     if (animals[i].length>8){
//         console.log(animals[i]);
//     }
// }
const longNameAnimals = animals.filter(animal=> animal.length>8) // Implicit return 

// const longNameAnimals = animals.filter(animal=>{return  animal.length>8}) // Explicit return 

// console.log(longNameAnimals);


const animalsWithOs = animals.filter(animal=> animal.includes("o"))

// console.log(animalsWithOs);

// *                                Combine MAP & FILTER                    

const animalsWO = animals.filter(animal=> animal.includes("o")).map(animal=> `${animal} <==> Contains O <==>`)
// console.log(animalsWO);

const people =[
    {name:"Alex", age:23},
    {name:"Sarah", age:17},
    {name:"Max", age:28},
    {name:"Amelia", age:18},
    {name:"Bob", age:30},
    {name:"Mary", age:16},
    {name:"Sue", age:28},
    {name:"George", age:38},
];
const peopleOver18 = people.filter(person=>person.age>17).map(r=>`${r.name} is over 18 🎈`)
console.log(peopleOver18);