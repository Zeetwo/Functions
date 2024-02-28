// Artimetic operators :-
let a = 5;
let b = 2;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

// unary operators :-

// ( ++ = +1), ( -- = -1)
// c++ (post)/change value from next line,
// ++c (pre)/ change value from now

let c =8;
let d =3;


console.log(c,d);
console.log(++c);
console.log(c--);
console.log(c);
console.log(c,d);
console.log(--d);
console.log(d++);
console.log(d);
console.log(c,d);

//Assignment operators :-

let e =12;
let f =10;
let g = 8;
let h = 6;
let E =15;
let F =14;

e += 2; // e = e+2
f -= 2; // f = f-2
g *=2; // g =g*2
h /=2; // h =h/2
E %=2; // E =(15/2)extra 1
F **=2 // F = 14 *14



console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(E);
console.log(F);

//Comparison Operators :-
//return bulian value

let G = 13;
let H = 11;

console.log(G==H);
console.log(G!=H);

let C =5;
let D ="5"

console.log(C==D);
console.log(C===D); // (===) for checking strictly
console.log(C!=D);
console.log(C!==D); // Not equal to % type

let A =5;
let B =3;

console.log(A>b);
console.log(A<b);
console.log(A>=b);
console.log(A<=b);

// Logical operators :-
//AND =&&
//OR =||
//NOT =!

let i =6;
let j =5;

let cond1 = i>j;
let cond2 = i!=j;

console.log(cond1 && cond2);

let cond3 = i==j;
let cond4 = i>j;

console.log(cond3 && cond4 );

console.log (cond3 || cond4);

console.log (!(i===j));

//Conditional Statements :-

let age =25;

if (age >18) {
    console.log ("You can vote");
}
if (age <18) {
    console.log ("You can't vote");
}

let mode = "normal";
let colour;

if (mode === "dark") {
    colour ="black";
}
else {
    colour ="white";
}

console.log (colour);

//odd or even :-

let num =10;

if (num%2 ===0) {
    console.log ("even")
}
else {  
    console.log ("odd")
}


//else if :-

let Mode ="normal";
let Colour;

if (mode === "dark") {
    colour ="black"
}
else if (mode === "blue"){
    colour ="blue"
}
else if (mode ==="red"){
    colour ="red"
}
else {
    colour ="white"
}
 console.log (colour)

 if (mode === "normal"){
    console.log (mode);
 }

 //Ternary Opertaors:-

 let Age =25;

 let result = age>=18 ? "adult" : "teenager"
 console.log (result);



// let Num = prompt ("enter a number");

// if (Num%5 ===0){
//     console.log (Num,"is a multipal of 5")
// }
// else {
//     console.log (Num,"isn't a multipal of 5")
// }

let score =prompt("enter your marks");

if (score>=80 && score<=100) {
    console.log ("Grade A")
}
else if(score>=70 && score<=79){
    console.log ("Grade B")
}
else if(score>=60 && score<=69){
    console.log ("Grade C")
}
else if(score>=50 && score<=59){
    console.log ("Grade D")

}else if(score<=49){
    console.log ("Grade F")
}
else {
    console.log ("Not Valid")
}