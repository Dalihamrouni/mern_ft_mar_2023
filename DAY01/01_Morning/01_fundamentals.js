var x = "hello"
// console.log(x);


function sayHi(){
     x = "Hi"
    return x
}

console.log(sayHi());
console.log(x);

function sayHi(){
     var x = "Hi"
    return x
}
console.log(sayHi());
console.log(x);