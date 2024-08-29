/*console.log('Hi');
const firstName = 'Dmitrii';
console.log('Hi',firstName );
let secondName = ('Iaroslavtsev');
console.log(secondName);
const age = 31;
console.log ('My age is'+ age);
const num = 10;
const num2 = 15;
console.log(num*num2);


let titleProject = 'Оценка стоиости';
console.log(titleProject);
console.log(typeof titleProject);
let screensValue = 'шаблонные, с уникальным дизайном, с анимациями';
console.log(screensValue);
let screenPrice = 100;
console.log(screenPrice);
console.log(typeof screenPrice);
let percentage = 20;
console.log(percentage);
let fullPrice = 1000;
let responsive = false;
if (responsive) {
    console.log('good');
} else {
    console.log('bad');
}
console.log(typeof responsive);

let x = 15
if (x > 10){
    console.log('Succes');
} else{
    console.log('error');
}
let a = 5;
let b = '10';
let res= a + + b
console.log(a+b);

console.log(res);
let age = +prompt('Your age');
let a = 20;
let res = age + a 
console.log(res)

let titleProject = prompt('Name');
console.log(titleProject);
let screenValue = prompt('Шаблоны, анимации, уникальный дизайн');
console.log(screenValue);
let responsive =  confirm('Adaptive');
console.log(responsive);

let product = 5*10;
console.log(product);;

let num1 = prompt ("Enter first");
let num2 = prompt ("enter the second")
let sum =  Number(num1)+ Number(num2);
console.log("Total sum is", sum);
let num1 = prompt("Enter the first num");
let num2 = prompt('Enter the second num')
let sum = Number(num1)*Number(num2);
console.log("Totals sum", sum);


let strNum= prompt("Give me number");
let final = Number (strNum);
let result = final + 10;
console.log(result);

let age = 13;
if( age>=18) {
    console.log('Acces')
} else {
    console.log("error")
};
let age = 15;
if(age >= 18){
    console.log ("Acces active")
} else if (age>=15){
    console.log("soso");
} else {
    console.log("error")
}
Напиши программу, которая проверяет значение переменной temperature и выводит в консоль:
"Жарко", если температура больше или равна 30.
"Тепло", если температура от 15 до 29.
"Холодно", если температура меньше 15.


let temperature = 10;
if(temperature>=30){
    console.log("hot")
} else if (temperature>=15){
    console.log("warm");
} else{
    console.log('cold')
}




function sayHi() {
    console.log("Hello world");
}

sayHi();

function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice");

function add ( a , b){
    return a + b; 
}
let sum = add(5,3);
console.log(sum

function checkTemperature(temperature){
    if (temperature>= 30) {
    console.log("hot");
} else if (temperature>=15) {
    console.log("warm")
} else {
    console.log("cold")
}
}
checkTemperature(17)

function calculateArea( width, hight){
    return width * hight
}
let result = calculateArea( 5, 10)
console.log(result)

function isEven(number){
    return number % 2 === 0;
}
console.log(isEven(1))

function findMax( a, b , c ){
     return Math.max( a,b,c)
}
console.log(findMax(100, 200,3000))


function toUpperCaseString(str){
    return str. toUpperCase();
}

console.log(toUpperCaseString("hello"));


function toUpperCaseString(str){
    return str. toUpperCase();
}
console.log(toUpperCaseString('second function'))


let age =2;
if ( age>=21){
    console.log("You are an adult")
} else{
    console.log("you are not adult")
}


let titleProject = prompt("Enter name of your project");

let screensValue = prompt("Template, Individual, animation ");

let responseScreen = prompt("Do you need adaptive screen?");
let responsive = responseScreen.toLowerCase() === "yes";
console.log("Need it! " + responsive);

let service1 =prompt("What type of service do you need")
console.log("Your service is" + service1)

let servicePrice1= prompt ("What is your budget?")
console.log("Your budget is" + servicePrice1);

let serviceType=  prompt("What else do you need")
console.log( "your choise is"+ serviceType)
*/
let titleProject = prompt("Enter the name of your project:");
console.log("Project Name: " + titleProject);

let screensValue = prompt("Template, Individual, or Animation?");
console.log("Screen Type: " + screensValue);

let responseScreen = prompt("Do you need an adaptive screen?");
let responsive = responseScreen.toLowerCase() === "yes";
console.log("Adaptive Screen Needed: " + responsive);

let service1 = prompt("What type of service do you need?");
console.log("Service Type: " + service1);

let servicePrice1 = prompt("What is your budget?");
console.log("Budget: " + servicePrice1);

let service2 = prompt("What other service do you need?");
console.log("Your choice is: " + service2);

let servicePrice2 = prompt("What is the price for the second service?");
console.log("Second service price is: " + servicePrice2);

// Преобразуем строки в числа
let service1PriceNumber = parseFloat(servicePrice1);
let service2PriceNumber = parseFloat(servicePrice2);

// Считаем общую сумму
let totalPrice = service1PriceNumber + service2PriceNumber;
console.log("Total price = $" + totalPrice);

// Процент для подрядчика
let partnerPercent = 0.10; // 10%

// Итоговая сумма за вычетом процента
let servicePercentPrice = totalPrice - (totalPrice * partnerPercent);

// Округляем до ближайшего целого числа
servicePercentPrice = Math.round(servicePercentPrice);

console.log("Final price after partner percentage deduction = $" + servicePercentPrice);

console.log ("final price after discount = $" + servicePercentPrice);
if(isNaN(totalPrice) || totalPrice < 0 ){
    console.log("error");

} else if (totalPrice > 50000){
    console.log("10 percent")
} else if (totalPrice > 20000){
    console.log("5%");
} else if (totalPrice > 0){
    console.log("no sale")
} else {
    console.log("your price is zero")
}