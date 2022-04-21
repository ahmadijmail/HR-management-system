"use strict";



function Person(EmployeeID, FullName, Department, Level, image_URL, salary){
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.image_URL = image_URL;
    this.salary = salary;
}

Person.prototype.findSalary = function(){
    let Min, Max;
    if (this.Level == "Senior"){
        Min = 1500; Max = 2000;
    }
    else if(this.Level == "Mid-Senior"){
        Min = 1000; Max = 1500; }
    else if(this.Level == "Junior"){
        Min = 500; Max = 1000;    }
        
    let randomSalary = (Math.random() * (Max-Min) ) + Min;
    var Salary = randomSalary - (randomSalary * (7.5/100));
    return Math.round(Salary * 100) / 100;
    }

    Person.prototype.render = function(){
    document.write(`${this.FullName} Salary is  ${this.findSalary()}JD <br>`);
}

let GhaziSamer = new Person(1000, "Ghazi Samer", "Administration", "Senior","IMG");
let LanaAli = new Person(1001, "Lana Ali", "Finance", "Senior","IMG");
let TamaraAyoub = new Person(1002, "Tamara Ayoub", "Marketing", "Senior","IMG");
let SafiWalid = new Person(1003, "Safi Walid", "Administration", "Mid-Senior","IMG");
let OmarZaid = new Person(1004, "Omar Zaid", "Development", "Senior","IMG");
let RanaSaleh = new Person(1005, "Rana Saleh", "Development", "Junior","IMG");
let HadiAhmad = new Person(1005, "Hadi Ahmad", "Finance", "Mid-Senior","IMG");

GhaziSamer.render();
LanaAli.render();
TamaraAyoub.render();
SafiWalid.render();
OmarZaid.render();
RanaSaleh.render();
HadiAhmad.render();

