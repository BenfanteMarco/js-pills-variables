let number = 100;
console.log(number);

const pi = 3.14;
console.log(pi);

// pi = 3.1416;
// console.log(pi);

let radius = 8;
let circle = radius * 2 * pi;
console.log(circle);

let nome = 'Carlo';
console.log(nome);
nome = 'Marco';
console.log(nome);

let greet = 'Ciao, Mondo!';
console.log(greet);

let greet = 'Come stai, Mondo?';
console.log(greet);

let greetGeneral = greet+'Come stai?';
console.log(greetGeneral);

let greetGeneral2 = `${greet}Come stai?`;
console.log(greetGeneral2);

//  //  //  //  //  //

let num = 40;
let num2 = 34;
let comparison;

if(num > num2){
    comparison = num;
}
else{
    comparison = num2;
}
console.log(comparison);

let stringA = 'ciao';
let stringB = 'ciao';

let comparison;

if(stringA == stringB){
    comparison = 'stringhe uguali';
}
else{
    comparison = 'stringhe non uguali';
}

console.log(comparison);

let number = 50;

let comparison;

if(number == '50'){
    comparison = true;
}
else{
    comparison = false;
}

console.log(comparison);

// // // // // // // // //

for(let i=1; i<=42; i++){
    console.log(i);
}

for(let i=42; i<=1; i++){
    console.log(i);
}

// // // // // // // // // //

const numbers = [1,2,3,4,5,6,7,8];
console.log(nummbers);

const fruits = ['mela','banana','pesca','pera'];
console.log(fruits);

console.log(fruits.length);

 // // // // // // // // // // //

 function printCiaoMondo(){
    alert('Ciao Mondo');
 }

 printCiaoMondo();

 function somma(num1, num2){
    let result = num1 + num2;
    return result;
 }

 let sum = somma(23,34);
 console.log(sum);

 function getOneStringFromTwo(string1, string2){
    return string1 +''+ string2;
 }

 console.log(getOneStringFromTwo('ciao', 'mondo'));