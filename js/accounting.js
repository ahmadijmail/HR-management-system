"use strict";
let allinfo = [];
let tableEl = document.getElementById("table");
function Person(id, name, department, level, image, salary) {
  this.employeeId = id;
  this.fullName = name;
  this.department = department;
  this.level = level;
  this.image = image;
  this.salary = salary;
  allinfo.push(this);
  createTable(department, Number.parseFloat(salary));
}



Person.prototype.renderTable = function () {
  let allinfoCounts = 0;
  let allinfoSalary = 0;
  for (let [department, values] of Object.entries(tableData)) {
    let trTd = document.createElement("tr");
    tableEl.appendChild(trTd);

    let depName = document.createElement("td");
    depName.textContent = department;
    trTd.appendChild(depName);

    let numberOfEmplouees = document.createElement("td");
    numberOfEmplouees.textContent = values.employeeCount;
    trTd.appendChild(numberOfEmplouees);

    let salaryAvg = document.createElement("td");
    salaryAvg.textContent = values.salaryTotal;
    trTd.appendChild(salaryAvg);

    let salaryTotal = document.createElement("td");
    salaryTotal.textContent = values.salaryAvg;
    trTd.appendChild(salaryTotal);

    allinfoCounts += values.employeeCount;
    allinfoSalary += values.salaryTotal;
  }

  let total = document.createElement("td");
  total.textContent = "Total";
  total.classList = "total";
  tableEl.appendChild(total);

  let salaryallinfo = document.createElement("td");
  salaryallinfo.textContent = allinfoCounts;
  salaryallinfo.classList = "total";
  tableEl.appendChild(salaryallinfo);

  let salaryAllTotal = document.createElement("td");
  salaryAllTotal.textContent = allinfoSalary;
  salaryAllTotal.classList = "total";
  tableEl.appendChild(salaryAllTotal);

  let salaryAllAvg = document.createElement("td");
  salaryAllAvg.textContent = allinfoSalary / allinfoCounts;
  salaryAllAvg.classList = "total";
  tableEl.appendChild(salaryAllAvg);
};

let tableData = {};
function createTable(department, salary) {
  if (!tableData[department]) {
    tableData[department] = {
      employeeCount: 1,
      salaryTotal: salary,
      salaryAvg: salary,
    };
  } else {
    let employeeCount = tableData[department].employeeCount;
    let salaryTotal = tableData[department].salaryTotal;
    tableData[department].employeeCount = employeeCount + 1;
    tableData[department].salaryTotal = salaryTotal + salary;
    tableData[department].salaryAvg =
      tableData[department].salaryTotal / (employeeCount + 1);
  }
}

let GhaziSamer = new Person(
  1000,
  "Ghazi Samer",
  "Administration",
  "Senior",
  "../assets/Ghazi.jpg",
  "1700"
);
let LanaAli = new Person(
  1001,
  "Lana Ali",
  "Finance",
  "Senior",
  "../assets/Lana.jpg",
  "1500"
);
let TamaraAyoub = new Person(
  1002,
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "../assets/Tamara.jpg",
  "1900"
);
let SafiWalid = new Person(
  1003,
  "Safi Walid",
  "Administration",
  "Mid-Senior",
  "../assets/Safi.jpg",
  "1300"
);
let OmarZaid = new Person(
  1004,
  "Omar Zaid",
  "Development",
  "Senior",
  "../assets/Omar.jpg",
  "2000"
);
let RanaSaleh = new Person(
  1005,
  "Rana Saleh",
  "Development",
  "Junior",
  "../assets/Rana.jpg",
  "700"
);
let HadiAhmad = new Person(
  1006,
  "Hadi Ahmad",
  "Finance",
  "Mid-Senior",
  "../assets/Hadi.jpg",
  "1400"
);

allinfo[0].renderTable();

// function getData() {
//   let stringfiykey = localStorage.getItem("userinformation");
//   let arrdata = JSON.parse(stringfiykey);
//   if (arrdata != null) {
//     for (let i = 0; i < arrdata.length; i++) {
//       new Person(
//         arrayData[i].EmployeeID,
//         arrayData[i].FullName,
//         arrayData[i].Department,
//         arrayData[i].Level,
//         arrayData[i].image_URL,
//         arrayData[i].salary
//       );
//     }
//   }
//  allinfo[0].renderTable();
// }
// getData();

