// const person = { 
//     firstName: 'Bob', 
//     lastName: 'Marley', 
//     email: 'bob@marley.com', 
//     password: 'sekureP@ssw0rd9', 
//     username: 'barley', 
//     createdAt: 1543945177623
// };
// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// const personFirstName = person.firstName
// const personLastName = person["lastName"]
// // console.log("PERSON FullName = " , personFirstName, personLastName);
// const {firstName:x,lastName:y} = person;
// // console.log("FROM DESTRUCTURING  === ",x);

// const secondItem = animals[1]
// const [,second,,v] = animals
// console.log(second, v);

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
  const {addresses:[,{city:x}]} = person

  console.log(x);