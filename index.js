
// Creating Objects in JavaScript Syntax.

class Cat{
    constructor(name, breed, age){
        this.name = name
        this.breed = breed
        this.age = age
        this.favFood = []
    }
    introduce(){
        return `Hi, my name is ${this.name}`
    }
    addFood = (food)=>{
        this.favFood.push(food)
    }
    loopThroughFoods(){
        this.favFood.forEach(this.logFood)
    }
    logFood = (food)=>console.log(`Hi, my name is ${this.name}, and I love to eat ${this.food}`)
}

// let joe = new Cat('Joe', 'Domestic Long Hair', 9)
// joe.addFood('fish')
// joe.addFood('chicken')
// joe.addFood('brownies')


// console.log(joe.loopThroughFoods())






/*
For practice, create a Dogs class.
The dog will have several attributes including name, breed, sex and age.
methods: introduction, addFood, loopThroughFoods, logFood
*/

class Dog{
    constructor(name, breed, sex, age){
        this.name = name
        this.breed = breed
        this.sex = sex
        this.age = age
        this.favFood = []
    }
    introduce = ()=>{
        return `Hi, my name is ${this.name}`
    }
    addFood = (food)=>{
        this.favFood.push(food)
    }
    loopThroughFoods = ()=>{
        this.favFood.forEach(this.logFood)
    }
    logFood = (food)=>{
        console.log(`Woof woof, my name is ${this.name} and I love eating ${food}`)
    }
}

let rex = new Dog("Rex", "Dalmatian", "Male", 1)
rex.addFood("Fish Bones")
rex.addFood("Beef")
rex.addFood("Chicken")

console.log(rex.loopThroughFoods())







class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
        console.log(`Width: ${width}, height: ${height}`)
    }
}

// new Rectangle(10,20)