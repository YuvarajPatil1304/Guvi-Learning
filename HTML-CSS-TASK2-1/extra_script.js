//Title
let first = document.createElement("h1");
first.id = "title";
first.innerText = "Pagination";
document.body.appendChild(first);

//Description
let second = document.createElement("p");
second.id = "description";
second.innerText = "Day 15 Task";
document.body.appendChild(second);

//table
let third = document.createElement("div");  
third.className = "table-responsive";
document.body.appendChild(third);

//table content
let fourth = document.createElement("table");
fourth.className = "table table-bordered";
fourth.tagName = "TABLE";
let innerTable = document.createElement("table");
innerTable.className = fourth.className.split(' ')[0];
fourth.appendChild(innerTable);
let child1 = document.createElement("thead");
innerTable.appendChild(child1);
let trow = document.createElement("tr");
let thead = document.createElement("th");
child1.appendChild(trow);
child1.appendChild(thead);
let child2 = document.createElement("tbody");
innerTable.appendChild(child2);
innerTable.firstElementChild.tagName = "THEAD";
innerTable.lastElementChild.tagName = "TBODY";
third.appendChild(fourth);
console.log(fourth.className);