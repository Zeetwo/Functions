let marks =[91,85,25,45,85,78]
console.log (marks)
console.log (marks[2])

let heros =["ironman", "thor", "batman", "spiderman","antman","superman"]
console.log (heros)
console.log (heros.length)
for (let index = 0; index < heros.length; index++) {
    console.log(heros[index]);
    
}
for (let hero of heros) {
    console.log(hero);
    
}

let cities=["delhi", "gujrat","kolkata"]

for (let city of cities){
    console.log(city.toUpperCase());
}

//practice:-

let numbers =[85,97,44,37,76,60]

let sum =0;

for (let val of numbers) {
    sum +=val;
  
}
let avg = sum/numbers.length;
console.log ("avg marks", avg);

let items =[250,645,300,900,50]

let i =0;
for (let val of items) {
    console.log ("value of index", val);
    let offer = val/10;
    items[i] = items[i] - offer;
    console.log ("value after offer",items[i])
    i++;
}

for (let i = 0; i< items.length; i++) {
    let offer = items[i] /10;
    items[i] -offer; 
}
console.log (items);

//Arrays Methods:-
let food =["apple", "banana", "guyava", "tomato"];
food.push("nuts")

console.log (food);

food.pop();
console.log (food);

let deleteditem =food.pop();
console.log (deleteditem);
console.log (food);

console.log (food.toString());

let cal =["150cal", "130cal", "300cal", "250cal","500cal", "750cal"];

let nutation = food.concat(cal);
console.log (nutation);

cal.unshift("50cal");
console.log (cal);

let del =cal.shift();
console.log (del);
console.log (cal);

// console.log (cal.slice(0,2));

cal.splice(2,0,"1000cal");
console.log (cal);


//Practice 02:-

let companies =["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

companies.shift();
companies.splice(1,1, "Ola");
companies.push("Amazon");
console.log (companies);

