// For Loop:-
console.log ("It's Zeetwo")
for (let index = 1; index <=5; index++) {
    console.log ("It's Zeetwo") 
}

let sum =0;
for (let i = 1; i <=5; i++) {
     sum=sum+i;  
}
console.log (sum);
for (let i = 1; i <=5; i++) {
    console.log ("i=", i);
}
//While Loop:-

let i =1;
while (i<=10) {
    console.log ("It's Zeetwo");
    i++; 
}
//do while Loop:-
//it's always run for 1 time then check the condition

let a =20;
do {
    console.log ("a=", a);
    a++; 
}
    while (a<=10);

//for-of-loop :-

let str ="javascript";

let size =0;
for (let i of str) {
    console.log ("i=",i)
    size++
}

console.log ("string size",size);

//for-in-loop :-

let student ={
    name: "raj tou",
    age: 25,
    cgpa: 9.1,
    ispass: true,
};

for (let key in student) {
    console.log ("key=" ,key ,"value=", student[key]);
}

//practice Loop:-

for (let i = 1; i <=100; i++) {
    if (i%2 !==0) 
    console.log (i)
}

// let gamenum = 25;

// let usernum = prompt(" Guess the Lucky number--");
// while (usernum != gamenum){
//     usernum =prompt ( "Your guess is wrong | Try again--")
// }

// console.log ("Congratluations , Your guess the right number")


//Strings:-

let str1 ="zeetwo"

console.log (str1[3]);

//Template Literals :-

let specialstring =`This is a template literals ${1+2+3}`;
console.log (specialstring)


let obj ={
    item : "pen",
    price:10,
};

let optout =`The cost of ${obj.item} is ${obj.price} rupess`;
console.log(optout);

//Escape Charactor:-
// (\n)=Next line
//(\t)=Tab Space
//escape charactor will count as a single charactor in length

console.log ("It's Ze\tetwo");
console.log ("My name\nis Zeetwo");

//String Methods:-

let str2 ="It's Goutam";

let newstr = str2.toUpperCase();

console.log (newstr)

let newstr1 = str2.toLowerCase();

console.log (newstr1)

let str3 ="     hello my name is goutam      ";

console.log (str3.trim()); 

//.trim = remove spaces from front & back of a paragraph

let str4 ="12345678910111213";
console.log (str4.slice(5,10));

let str5 = "my name";
let str6 = "is zeetwo";

let res =str5.concat(str6);
console.log (res);

let res1 ="we can add more "+ str5 +str6;
console.log (res1)

console.log (res1.replace( "d", "p"))
console.log (res1.replaceAll( "d", "p"))

console.log (res1.charAt(4));


let fullname = prompt("Enter your full name...(no space)")

let username = `@${fullname}${fullname.length}`;
console.log (username);

//or
// let username1 = "@"+ fullname + fullname.length ;
// console.log (username1);
