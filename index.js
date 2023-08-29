
//! 

//! super() треба для того щоб визвати всі попередні задачі з constructor() і передати його в новий class

class Employee{
    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    get nameInfo() {
        return this.name
    }
    set nameInfo(newName){
        this.name = newName
    }
    get ageInfo(){
        return this.age
    }
    set ageInfo(newAge){
        this.age = newAge
    }
    get salaryInfo(){
        return this.salary
    }
    set salaryInfo(newSalary){
        this.salary = newSalary
    }
}

class Programer extends Employee{
    constructor(name, age, salary, lang){
        super(name, age, salary);
        this.lang = lang;
    }
    get salaryInfo(){
        return this.salary *= 3
    }
    get langInfo(){
        return this.lang
    }
    set langInfo(newLang){
        this.lang = newLang
    }
}
const max = new Employee("Max", "25", "6000")
const liza = new Employee("Liza", "23", "5000")
const alex = new Programer("Alex", "27", "8000", "6")

console.table(max)
console.table(liza)
console.table(alex)
console.log("get Alex salary", alex.salaryInfo)