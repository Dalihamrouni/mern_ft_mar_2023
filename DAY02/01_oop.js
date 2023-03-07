// const myBook = {
//     title : "JS Hard Parts",
//     pages : 1000,
//     author :"Mark",
//     publishYear:2023
// }
//  // What's  a class ? 
// //  ! blueprint  to create objects  = factory that creates objects 

// class Book {
//     // Constructor 
//     constructor (title, pages, author, year) {
//         // Attributes : What the class can Have ?
//         this.title = title
//         this.pages = pages
//         this.author = author
//         this.publishYear = year || 2022
//     }
// }

// const harryPotter = new Book("Harry Potter", 500, "Raed", 2023);
// const ethics = new Book("Ethics", 600, "Spinoza", 1892);
// console.log(ethics.author);


class Car {
    constructor(manufacturer, model, color, power) {
        // Attributes
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.power = power;
        this.miles = 0
    }
    // Methods : What the class ca do (actions)
    drive() {
        this.miles+=10
        console.log(`${this.manufacturer} ${this.model} has driven ${this.miles} KM `);
        return this
    }
}
const carOne = new Car("Ram", 1500, "Gray", 200)
console.log(carOne);
carOne.drive().drive().drive().drive().drive()
console.log(carOne);

//  Inheritance 

class Tesla extends Car {
    constructor (model, color,power,autopilot){
        super("Tesla", model,color,power)
        this.autopilot = autopilot || false
    }
}
const modelX = new Tesla("X", "White", 500)
console.log(modelX);
modelX.drive().drive().drive()
console.log(modelX);
