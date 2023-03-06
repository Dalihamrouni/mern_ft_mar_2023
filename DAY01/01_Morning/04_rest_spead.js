
// * Complex Data TYPES (arrays and objects ) ARE PASSED BY REFERENCE NOT BY VALUE  
const a  = [10,20,30]
const b = a 
const c  = [...a]
a.push(200);
b.push(900)
c.push(90000)

console.log("a =  ", a); // ? a = 10,20,30,200
console.log("b =  ",b); // ? b = 10,20,30,900 // b = 10,20,30,200,900
console.log("c =  ",c); // ? b = 10,20,30,900 // b = 10,20,30,200,900

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };
const bob  = {...person}
console.log(bob);