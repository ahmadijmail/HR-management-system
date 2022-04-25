"use strict";
let header = document.getElementById("headerEl");
let cardSection1 = document.getElementById("Cards");
let butel1 = document.getElementById("but1");
let allinfo=[];

function Person(EmployeeID, FullName, Department, Level, image_URL, salary){
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.image_URL = image_URL;
    this.salary = salary;

    allinfo.push(this);
    
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
    
    let EmployeeID = document.createElement("h5");
    EmployeeID.textContent=this.EmployeeID;
    cardSection1.appendChild(EmployeeID);
    EmployeeID.style.textAlign= "center";

    let FullName = document.createElement("h5");
    FullName.textContent=this.FullName;
    cardSection1.appendChild(FullName);
    FullName.style.textAlign= "center";
   

    let Department = document.createElement("h5");
    Department.textContent=this.Department;
    cardSection1.appendChild(Department);
    Department.style.textAlign= "center";

    let Level = document.createElement("h5");
    Level.textContent=this.Level;
    cardSection1.appendChild(Level);
    Level.style.textAlign= "center";

   
    let image_URL = document.createElement("img");
    image_URL.src=this.image_URL;
    image_URL.style.width= "100px";     
    cardSection1.appendChild(image_URL);

    let salary = document.createElement("h5");
    Level.textContent=this.salary;
    cardSection1.appendChild(salary);
    salary.style.textAlign= "center";




    //document.write(`${this.FullName} Salary is  ${this.findSalary()}JD <br>`);
    
}



cardSection1.addEventListener("submit", clicko)

function clicko (event) {
    event.preventDefault();
   
    alert(`Hello User`);
    let EmployeeID = Person.prototype.id();
    let FullName= event.target.FullName.value;
    let image_URL= event.target.image_URL.value;
    let Department= event.target.Department.value;
    let Level= event.target.Level.value;
    let salary = Person.prototype.findSalary();
    //console.log(event);

    let newUser = new Person (EmployeeID, FullName, Department, Level ,image_URL,salary);

    
    newUser.render();
    savedata(allinfo);
    

}
          

function savedata (data) {
 let stringfiyinfo = JSON.stringify(data);   
localStorage.setItem("userinformation" , stringfiyinfo)

}



function getdata () {

    let stringfiykey = localStorage.getItem("userinformation");
    
    console.log(typeof stringfiykey);

    let arrdata = JSON.parse(stringfiykey);
    
    console.log(typeof arrdata);

    if (arrdata != null) {
        for (let i = 0; i < arrdata.length; i++) {
            new Person(arrdata[i].EmployeeID, arrdata[i].FullName, arrdata[i].Department, arrdata[i].Level, arrdata[i].image_URL, arrdata[i].salary);
            
        }
    }
    
}





function renderall (){
    for (let i = 0; i < allinfo.length; i++) {
        allinfo[i].render(); 
    }
    
}

getdata();

renderall();








let GhaziSamer = new Person(1000, "Ghazi Samer", "Administration", "Senior","./assets/Ghazi.jpg","1700");
let LanaAli = new Person(1001, "Lana Ali", "Finance", "Senior","./assets/Lana.jpg","1500");
let TamaraAyoub = new Person(1002, "Tamara Ayoub", "Marketing", "Senior","./assets/Tamara.jpg","1900");
let SafiWalid = new Person(1003, "Safi Walid", "Administration", "Mid-Senior","./assets/Safi.jpg","1300");
let OmarZaid = new Person(1004, "Omar Zaid", "Development", "Senior","./assets/Omar.jpg","2000");
let RanaSaleh = new Person(1005, "Rana Saleh", "Development", "Junior","./assets/Rana.jpg","700");
let HadiAhmad = new Person(1006, "Hadi Ahmad", "Finance", "Mid-Senior","./assets/Hadi.jpg","1400");




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