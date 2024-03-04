let newbtn =document.createElement ("button");

newbtn.innerText ="Click me!"

newbtn.style.backgroundColor = "red";
newbtn.style.color ="white";


let body =document.querySelector("body");
body.append (newbtn);

let para =document.querySelector("p");

para.classList.add("newclass");