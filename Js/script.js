"use strict";

// let number = 5;
//const leftBorderWidth = 1;

//number = 10;
//console.log(number);

//const obj = {
    //a: 50
//};

//obj.a = 10;

//console.log(obj);

//const vehicleBodyWidth = 5000;
//const vehicleBodyLength = 4000;

//console.log("Ширина кузова автомобиля: " + vehicleBodyWidth + ', длинна: ' + vehicleBodyLength);

//let number = 4.6;
//console.log(4/0);

//const person = "Alex";

//const bool = true;

//let und;
//console.log(und);

//const obj = {
    //name: "John",
    //age: 25,
    //isMarried: false
//};
//console.log(obj.name);
//console.log(obj['name']);

//let arr = ['plum.png', 'orange.jpg', 6, 'apple.png', {}];
//console.log(arr[1]);

//const arr = ['a', 'b', 'c'];
//console.log(arr[1]);

//const arrObg = {
    //0: 'a',
    //1: 'b',
    //2: 'c'
//};
//arrObg.d = '12345';

//arrObg['d'] = '12345';

//console.log(arrObg['d']);
//console.log(arrObg.d);

//console.log(arrObg[1]);

//const obj = {a: 1, b: 2};

//alert('Hello');

//const result = confirm('Are you here?');
//console.log(result);

//const answer = +prompt('Вам есть 18?', '');
//console.log(answer + 5);

//const answers = [];
//answers[0] = prompt('Как ваше имя?', '');
//answers[1] = prompt('Как ваша фамилия?', '');
//answers[2] = prompt('Сколько вам лет?', '');
//document.write(answers);
//console.log(typeof (answers));

//const category = 'toys';
//console.log('http://someurl.com/' + category);
//console.log(`http://someurl.com/${category}/5`);

//const user = 'Ivan';
//alert(`Привет, ${user}`);

//console.log('arr' + '- object');
//console.log(4 + '- object');
//console.log(4 + +'5');

//let incr = 10,
    //decr = 10;
//incr++;
//decr--;
//console.log(++incr);
//console.log(--decr);

//console.log(5%2);

//console.log(2*4 === 8);

//const isChecked = true,
    //isClose = true;
//console.log(isChecked && isClose);

//const isChecked = true,
    //isClose = false;
//console.log(isChecked || isClose);

//const isChecked = false,
    //isClose = false;
//console.log(isChecked || !isClose);



//const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');


//const personalMovieDB = {
    //count: numberOfFilms,
    //movies: {},
    //actors: {},
    //genres: [],
    //privat: false
//};

//const a = prompt('Один из последних просмотренных фильмов?', ''),
     //b = prompt('На сколько оцените его?', ''),
      //c = prompt('Один из последних просмотренных фильмов?', ''),
      //d = prompt('На сколько оцените его?', '');
//personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d;
//console.log(personalMovieDB);

//if (4 == 9) {
    //console.log('Ok!');
//} else {
    //console.log('Error');
//}

//const num = 50;
//if (num < 49) {
    //console.log('Error');
//} else if (num > 100) {
    //console.log('too much');
//} else {
    //console.log('Ok!');
//}

//(num === 50) ? console.log('Ok!') : console.log('Error');

//switch (num) {
    //case 49:
        //console.log('Неверно');
        //break;
    //case 100:
        //console.log('Неверно');
        //break;
    //case 50:
        //console.log('Верно!');
        //break;
    //default:
        //console.log('Не в этот раз');
        //break;
//}

//const hamburger = true;
//const fries = true;

//if (hamburger && fries) {
    //console.log('Я сыт!');
//}
//console.log((hamburger && fries));

//const hamburger = 5;
//const fries = 0;

//if (hamburger && fries) {
    //console.log('Я сыт!');
//}
//console.log((hamburger && fries));

//const hamburger = 2;
//const fries = 1;

//if (hamburger === 3 && fries) {
    //console.log('Все сыты!');
//} else {
    //console.log('Мы уходим');
//}

//const hamburger = 3;
//const fries = 1;
//const cola = 0;

//if (hamburger === 3 && cola === 1 && fries) {
    //console.log('Все сыты!');
//} else {
   // console.log('Мы уходим');
//}

//const hamburger = 3;
//const fries = 1;
//const cola = 0;

//console.log(hamburger === 3 && cola && fries);

//console.log(1 && 0);
//console.log(1 && 5);
//console.log(null && 5);
//console.log(0 && 'dghsfghsfg');

//const hamburger = 3;
//const fries = 0;
//const cola = 0;

//if (hamburger || cola || fries) {
    //console.log('Мы довольны');
//} else {
    //console.log('Мы ушли');
//}

//let johnReport, alexReport, samReport, mariaReport = 'done';
//console.log( johnReport || alexReport || samReport || mariaReport);

//const hamburger = 3;
//const fries = 3;
//const cola = 0;
//const nuggets = 2;

//if (hamburger === 3 && cola === 2 || fries === 3 && nuggets ) {
    //console.log('Мы довольны');
//} else {
    //console.log('Мы ушли');
//}

//console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

//console.log(!0);

console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 );
//console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
//console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
    console.log('Done!')
}

let ham;
const pasta = NaN;
const juse = 0;
const pizza = 2;

if (ham || juse || pasta === 3 || pizza) {
    console.log('Done!')
}

let broccoli;
const potato = NaN;
const water = 0;
const meat = 2;

if (broccoli && water || potato === 3 && meat) {
    console.log('Done!')
}

let num = 50;
//while (num <= 55) {
    //console.log(num);
    //num++;
//}

//do {
    //console.log(num);
    //num++;
//}
//while (num < 55);

for (let i = 1; i < 8; i++) {
    console.log(i);
}

for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}

for (let i = 1; i < 10; i++) {
    if (i ===6){
        break;
    }
    console.log(i);
}

for (let i = 1; i < 10; i++) {
    if (i ===6){
        continue;
    }
    console.log(i);
}
