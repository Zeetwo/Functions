// let heading = document.getElementById ("heading");
// console.dir (heading);

let headings =document.getElementsByClassName("heading");
console.dir(headings);
console.log(headings);

let firstEl = document.querySelector ("p");
console.dir (firstEl);

let allEl = document.querySelector(".heading");
console.dir(allEl);

let buttEl = document.querySelector("#butt");
console.dir(buttEl);


let div =document.querySelector("div");
console.dir (div);

 let id = div.getAttribute("id");
 console.log (id);

 let name =div.getAttribute("name");
console.log (name);

let headr = document.querySelector("h2");
console.dir(headr);

//practice:-

let pract =document.querySelector('.hello');
console.dir (pract.innerText);

pract.innerText =pract.innerText +"from apna college students"

let divs =document.querySelectorAll(".box");

let index=0;
for (div of divs) {
    div.innerText= `new unique value ${index}`;
    index++;
}