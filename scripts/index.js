"use strict";

window.onload = () => {
  peopleTable();
};

function peopleTable() {
  let tableBody = document.querySelector("#tableBody");
  people.forEach((person) => {
    tableData(tableBody, person);
  });
}

function tableData(tbody, data) {
  let newRow = tbody.insertRow(-1);
  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.id;
  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.firstName;
  let cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.lastName;
  let cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.email;
  let cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.ipAddress;
}
