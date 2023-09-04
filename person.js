class Person {
    constructor(name){
        this.name = name;
    }

    sayMyName(){
        return `Hello world. My name is ${this.name}!`;
    }
}

module.exports = {
    Person,
}