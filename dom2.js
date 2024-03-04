// let div =document.querySelector("div");
// console.log (div);

// let id = div.getAttribute("id");
//  console.log (id);

//  let name =div.getAttribute("name");
// console.log (name);

// let para = document.querySelector("p");
// console.log (para.getAttribute("class"));
// console.log (para.setAttribute("class", 'newclass'));

// div.style.backgroundColor= "green";

// div.style.fontsize ="25px";

// div.style.textAlignLast ="center";

// let newbut =document.createElement ("button");
// newbut.innertext ="click me";
// console.log (newbut);

// let div =document.querySelector("div");
// div.after(newbut);

let newhead =document.createElement ("h1");
newhead.innerHTML ="<i> Hi, i am new heading! </i>";

document.querySelector("body").prepend(newhead);

let para =document.querySelector("p");
para.remove();