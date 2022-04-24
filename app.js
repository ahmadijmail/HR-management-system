"use strict";
let header = document.getElementById("headerEl");
let cardSection1 = document.getElementById("Cards");
let butel1 = document.getElementById("but1");





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

    Person.prototype.id = function () {
        return Math.floor(1000 + Math.random() * 9000);
      
      };





    
    Person.prototype.render = function() { 
    
    let fname = document.createElement("h5");
    fname.textContent=this.FullName;
    cardSection1.appendChild(fname);
    fname.style.textAlign= "center";

    
    

    let depname = document.createElement("h5");
    depname.textContent=this.Department;
    cardSection1.appendChild(depname);
    depname.style.textAlign= "center";

    let levname = document.createElement("h5");
    levname.textContent=this.Level;
    cardSection1.appendChild(levname);
    levname.style.textAlign= "center";

   
    let imglink = document.createElement("img");
    imglink.src=this.image_URL;
    imglink.style.width= "100px";     
    cardSection1.appendChild(imglink);


    //document.write(`${this.FullName} Salary is  ${this.findSalary()}JD <br>`);
    
}



cardSection1.addEventListener("submit", clicko)

function clicko (event) {
    event.preventDefault();
   
    alert(`Hello User`);
    let id = Person.prototype.id();
    let fname= event.target.name.value;
    let imgurl= event.target.imgurl.value;
    let depname= event.target.Department.value;
    let levname= event.target.Level.value;
    
    //console.log(event);

    let newUser = new Person (id,fname,depname, levname,imgurl);

    
    newUser.render();

}




let GhaziSamer = new Person(1000, "Ghazi Samer", "Administration", "Senior","./assets/Ghazi.jpg");
let LanaAli = new Person(1001, "Lana Ali", "Finance", "Senior","./assets/Lana.jpg");
let TamaraAyoub = new Person(1002, "Tamara Ayoub", "Marketing", "Senior","./assets/Tamara.jpg");
let SafiWalid = new Person(1003, "Safi Walid", "Administration", "Mid-Senior","./assets/Safi.jpg");
let OmarZaid = new Person(1004, "Omar Zaid", "Development", "Senior","./assets/Omar.jpg");
let RanaSaleh = new Person(1005, "Rana Saleh", "Development", "Junior","./assets/Rana.jpg");
let HadiAhmad = new Person(1006, "Hadi Ahmad", "Finance", "Mid-Senior","./assets/Hadi.jpg");

GhaziSamer.render();
LanaAli.render();
TamaraAyoub.render();
SafiWalid.render();
OmarZaid.render();
RanaSaleh.render();
HadiAhmad.render();




























//let butel1 = document.getElementById("but1");




/*Person.prototype.render = function(){
    document.write(`${this.FullName} Salary is  ${this.findSalary()}JD <br>`);*/



    //var val = Math.floor(1000 + Math.random() * 9000);
    //console.log(val);