//Function:-

console.log("hello");

"abc".toUpperCase();

[1,2,3].push(5);

function myfunction () {
    console.log ("Welcome to mr.zeetwo");
    console.log ("this is goutam");
}
myfunction();
myfunction();


function myfunction1 (msg ,n) { //input parameter
    console.log (msg ,n);
}

myfunction1("i love JS" ,"zeetwo"); //argument

function mysum (m ,n) { 
    console.log (m *n);
}

mysum(100 ,500); 

function sum (x,y) { 
    s= x + y;
    return s; //no value exceute after retrun
}

let val = sum(5 ,6); 
console.log(val);

//Arrow Function :-

const arrowsum = (a ,b) => {
    console.log (a+b);
}

console.log (arrowsum);

//Multiplication Function 

let multisum = (c ,d)=> {
    console.log (c* d);
}

console.log (multisum(5,6))

const printhello =() => { 
    console.log ("hello");
}

//practice :- (count vowels)

function countvowels (str) {
    let count =0;
    for (const charc of str) {
        if (
            charc ==="a" || 
            charc === "e" || 
            charc === "i" || 
            charc ==="o" || 
            charc ==="u"
        ) {
            count++;
        }
    }
return count;
}

const countvow =(str) => {
    let count =0;
    for (const charc of str) {
        if (
            charc ==="a" || 
            charc === "e" || 
            charc === "i" || 
            charc ==="o" || 
            charc ==="u"
        ) {
            count++;
        }
    }
return count;

}

//Methods:-
//For each Loop in Arras :- (higher order function /Method)

let arr = [1,2,3,4,5];

arr.forEach( (val) => { 
    console.log (val);
  
});

// Practice Question1:-

let num = [1,2,3,4,5,6,7];

num.forEach ((val) => {
    console.log (val*val);  
});

//other method

let nums =[ 5,8,9,10,12];

let calsqr = (num) => {
    console.log (num*num);
};
nums.forEach (calsqr);


//Map Methods :-

let num1 =[ 55,20,64];

let newarr = num1.map ((val) =>{
    return val *2;
});

console.log (newarr);

//Filter Method :- (Even value)

let nearr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

 let evenarr = nearr.filter ((val)=>{
    return val%2 ===0;
 });

 console.log (evenarr)

// Greater than 10 filter :-

 let up3arr = nearr.filter ((val)=>{
    return val >10;
 });

 console.log (up3arr)

 //Reduce Method :- (+sum)

 let arrsum =[2,5,8,10];

 let finalsum = arrsum.reduce( (res, val) =>{
    return res +val;
 });
 console.log (finalsum);

 //Find out largest Number:-

 let finalbig = arrsum.reduce( (res, val) =>{
    return res >val ? red : val;
 });
 console.log (finalbig);


 //Practice questions :-

 let marks =[85,90,86,75,95,92,93,80,56,79,89,58];

 
 let passmarks = marks.filter( (num) =>{
    return num >80 ;
 });
 console.log (passmarks);

//Practice questions 02:-

let n = prompt ("enter your no...");

let narr = [];

for (let i=1; i<=n; i++ ) {
    narr[ i-1] =i; 
}
 console.log (narr);

//Practice questions 03:-

let newsum = narr.reduce( (res, val) =>{
    return res +val;
 });
 console.log (newsum);

 let factorial = narr.reduce( (res, val) =>{
    return res * val;
 });
 console.log (factorial);


