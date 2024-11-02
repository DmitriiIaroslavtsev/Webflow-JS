/*let x = 56;
if (x > 10){
    console.log ( "Условие верно")
} else{
    console.log( 'Усвлрие не верно')
}

let a = 10;
let b = 20;
console.log (a+b)

let age =  prompt(' Укажите Ваш возраст');
console.log(age)*/


let titleProject = prompt(' Укажите название проекта')
console.log( titleProject);
let screenValue = prompt('шаблонные, с уникальным дизайном, с анимациями' ) 
console.log (screenValue);
let responsiveScreen = prompt ("Нужен ли респонсивный сайт? (введите 'да' или 'нет')");
let responsive = responsiveScreen. toLowerCase()=== "да";
console.log(responsive);
let service1 = prompt('Какой сервис Вам нужен?');
console.log(service1);
let servicePrice = parseFloat (prompt( ' Сколько это стоит')); 
console.log(servicePrice);
let service2 = prompt( 'Какие еще услуги Вам нужны?');
console.log(service2);
let servicePrice2 =  parseFloat(prompt('Сколько стоит эта услуга?'));
console.log(servicePrice2);
let screenPrice =parseFloat (prompt('сколько стоит один экран?'));
console.log (screenPrice);
let discount = 0.15;
let fullPrice = screenPrice + servicePrice + servicePrice2;
console.log( `Общая стоимость проекта: ${fullPrice}`);
let servicePercentPrice = fullPrice * (1 - discount);

console.log(`Цена после скидки: ${servicePercentPrice}`);
if ( fullPrice>50000){
    console.log ('Скидка 15процентов');
} else if (fullPrice > 20000 && fullPrice  <= 50000 ) {
    console.log('Скидка 10 процентов');
} else if ( fullPrice >0 && fullPrice <=20000) {
    console.log('Нет скидки')
} else{
    console.log ('Ошибка')
}

