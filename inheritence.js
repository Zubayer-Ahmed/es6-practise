class Parent{
    constructor(){
        this.fatherName = "Rajkonna";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        // return this.name + " " + this.fatherName;
        return `${this.name} ${this.fatherName}`;
    }
}

const name1 = new Child("Jerry");
console.log(name1.getFullName());