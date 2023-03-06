
//  Named function and has problem of hoisting
function pow(e){
    // console.log(this);
    return e**3
}
// console.log(pow(3));
// Named function and we did solve the hoisting problem
const x = function pow(e) {
    // console.log(this);
    return e**3
}
// console.log(x(3));

// Anonymous Function

const y = function (e) {
    return e**3
}
// console.log(y(3));
// Anonymous Arrow function 
const s =  (e)  => { 
    // console.log(this);
    return e**3
}
// console.log(s(3));

// Anonymous One line Arrow function 
const z =  (e)  =>  e**3

// console.log(z(3));


// -Callback Function 

// function sayHi() {
//     console.log("HI 🙋‍♂️🙋‍♀️👋");
// }

setTimeout(() => {
    console.log("HI 🙋‍♂️🙋‍♀️👋 ♐");
}, 5000)