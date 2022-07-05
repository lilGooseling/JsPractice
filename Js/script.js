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

/*
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

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}
*/

//let result = '';
//const length = 7;

//for (let i = 1; i < length; i ++) {
    //for (let j = 0; j < i; j++) {
        //result += '*';
    //}
    //result += '\n';
//}

//console.log(result);

//first: for (let i = 0; i < 3; i++) {
    //console.log(`First level : ${i}`);
    //for (let j = 0; j < 3; j++) {
        //console.log(`Second level : ${j}`);
        //for (let k = 0; k < 3; k++) {
            //if (k === 2) continue first;
            //console.log(`Third level: ${k}`);
        //}
    //}
//}

/*const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');


const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};*/

/*const a = prompt('Один из последних просмотренных фильмов?', ''),
b = prompt('На сколько оцените его?', ''),
c = prompt('Один из последних просмотренных фильмов?', ''),
d = prompt('На сколько оцените его?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);*/

/*for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    if ( a != null && b != null && a !== '' && b !== '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else  if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >=30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}


console.log(personalMovieDB);*/


/*function showFirstMessage() {
    console.log('Hello World!');
}
showFirstMessage();*/

/*let  num = 20;
function showFirstMessage(text) {
    console.log(text);
    num = 10;
}
showFirstMessage('Hello World!');
console.log(num);*/

/*function calc(a, b) {
    return(a + b);
}
console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));*/

/*function ret() {
    let num = 50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);*/

/*const logger = function () {
    console.log('Hello');
};
logger();*/

/*const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(amount * curr);
}
convert(500, usdCurr);
convert(500, eurCurr);*/

/*const  usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return amount * curr;
}
function promotion(result) {
    console.log(result * discount);
}
promotion(convert(500, usdCurr));

function test() {
    for (let i =0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done');
}
test();

function doNothing() {};
console.log(doNothing() === undefined);*/

//const str = 'test';
//console.log(str.length);

/*const arr = [1, 2, 4];
console.log(arr.length);

const str = 'test';
console.log(str[2]);
console.log(str.toUpperCase());

const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit'));
console.log(fruit.indexOf('q'));

const logg = 'Hello world';
console.log(logg.slice(6, 11));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));*/








/*let numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');


function start() {

    while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms === 0) {
        numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');
        console.log(numberOfFilms);
        console.log(typeof numberOfFilms);

    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};*/

/*const a = prompt('Один из последних просмотренных фильмов?', ''),
b = prompt('На сколько оцените его?', ''),
c = prompt('Один из последних просмотренных фильмов?', ''),
d = prompt('На сколько оцените его?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);*/


/*function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
            b = prompt('На сколько оцените его?', '');
        if ( a != null && b != null && a !== '' && b !== '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else  if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >=30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel ();



function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB)
    }
}
showMyDB();

function writeYourGenres() {
    for (let j = 1; j <= 3; j++) {
        personalMovieDB.genres[j - 1] = prompt(`Ваш любимый жанр ${j}`);
    }
}
writeYourGenres();*/







/*function first() {
    //Do something
    setTimeout(function () {
        console.log(1);
    }, 500);
}
function second() {
    console.log(2);
}

first();
second();


function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошла урок!');
}

learnJS('JavaScript', done);*/


/*const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('Test');
    }
};
options.makeTest();

const {border, bg} = options.colors;
console.log(border);
console.log(bg);*/


//console.log(Object.keys(options).length);

//console.log(options.name);
//delete options.name;
//console.log(options);

/*let counter = 0;
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);*/


//const arr = [2, 3, 6, 8, 10];
//arr.pop();
//arr.push(10);
//console.log(arr);
/*for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}*/
/*for (let value of arr) {
    console.log(value);
}*/

/*arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});*/

//const str = prompt('', '');
//const products = str.split(', ');
//products.sort();
//console.log(products.join('; '));

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);
function compareNum(a, b) {
    return a - b;
}

let a = 5,
    b = a;
b = b + 5;
console.log(b);
console.log(a);


const obj = {
    a: 5,
    b: 1
};
/*const copy = obj;
copy.a = 10;
console.log(copy);
console.log(obj);*/

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};
const newNumbers = copy(numbers);
newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers);