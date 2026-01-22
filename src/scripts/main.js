'use strict';

const list = document.querySelector('ul');

function getSalary(item) {
  return Number(item.dataset.salary.replace(/[$,]/g, ''));
}

function sortList(list) {
  const itemsArray = Array.from(list.children);

  itemsArray.sort((a, b) => getSalary(a) - getSalary(b));

  list.innerHTML = '';

  itemsArray.forEach((item) => list.append(item));
}

function getEmployees(list) {
  const itemsArray = Array.from(list.children);

  return itemsArray.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: Number(item.dataset.salary.replace(/[$,]/g, '')),
    age: Number(item.dataset.age),
  }));
}

sortList(list);

const employees = getEmployees(list);

console.log(employees);
