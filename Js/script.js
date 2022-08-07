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

/*const arr = [2, 13, 26, 8, 10];
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
};*/
/*const copy = obj;
copy.a = 10;
console.log(copy);
console.log(obj);*/

/*function copy(mainObj) {
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
//console.log(newNumbers);
//console.log(numbers);

const add = {
    d: 17,
    e: 20
};
console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);*/

/*const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'butterfly';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);

const array = ['a', 'b'];
const newAarray = [...array];
console.log(newAarray);

const q = {
    one: 1,
    two: 2
};
const newObj = {...q};
console.log(newObj);*/

/*let str = 'some';
let strObj = new String(str);
console.log(typeof (str));
console.log(typeof (strObj));

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('hello');
    }
};

const john = Object.create(soldier);*/
//const john = {
    //health: 100
//};
//john.__proto__ = soldier;
/*Object.setPrototypeOf(john, soldier);
console.log(john.armor);
john.sayHello();*/







/*const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start:  function () {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели','');

        while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) || personalMovieDB.count === 0) {
            personalMovieDB.count = prompt('Сколько фильмов Вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else  if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >=30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB)
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },*/
    /*writeYourGenres: function() {
        for (let j = 1; j < 2; j++) {
            //let genre = prompt(`Ваш любимый жанр ${j}`);

            //if (genre === '' || genre == null) {
                //console.log('Вы ввели некорректные данные');
                //j--;
            //} else {
                //personalMovieDB.genres[j - 1] = genre;
            //}
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
            if (genres === '' || genres == null) {
                console.log('Вы ввели некорректные данные');
                j--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};

personalMovieDB.start();
//personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();*/

/*const a = prompt('Один из последних просмотренных фильмов?', ''),
b = prompt('На сколько оцените его?', ''),
c = prompt('Один из последних просмотренных фильмов?', ''),
d = prompt('На сколько оцените его?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);*/







/*function hello() {
    console.log('Hello World');
}
hello();
function hi() {
    console.log('Say hi!');
}
hi();
const arr = [1, 14, 4, 30, 54],
      sorted = arr.sort(compareNum);
function compareNum(a, b) {
    return a-b;
}
console.log(sorted);*/


/*console.log(typeof (String(null)));
console.log(typeof (5 + ''));

const num = 5;
console.log('flowershop/catalog/' + num);

const fontSize = 26 + 'px';
console.log(fontSize);

console.log(typeof (Number('4')));
console.log(typeof (+'5'));
console.log(typeof (parseInt('15px', 10)));

let switcher = null;
if (switcher) {
    console.log('working...');
}
switcher = 1;
if (switcher) {
    console.log('working...');
}

console.log(typeof (Boolean('4')));
console.log(typeof (!!'12345'));*/


/*let number = 5; debugger
function logNumber() {
    //let number = 4; debugger
    console.log(number);debugger
}

number = 6;
logNumber();debugger

number = 8;
logNumber();debugger*/

/*function createCounter() {
    let counter = 0;

    const myFunction = function () {debugger
        counter = counter + 1;debugger
        return counter;debugger
    };

    return myFunction;
}
debugger
const increment = createCounter();debugger
const c1 = increment();debugger
const c2 = increment();debugger
const c3 = increment();debugger
console.log(c1, c2, c3);*/

/*{
    let msg = 'Hello';
}
console.log(msg);

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        let num = 3;
    }
    console.log(num);
}*/

/*let name = 'John';
function sayHi() {
    alert('Hi, ' + name);
}
name = 'Pete';
sayHi();*/

/*function makeWorker() {
    let name = 'Pete';
    return function () {
        alert(name);
    };
}
let name = 'John';
let work = makeWorker();
work();*/

/*let phrase = 'Hello';
function say(name) {
    alert( ` ${phrase}, ${name}`);
}
say('John');*/

/*function sayHiBye(firstName, lastName) {
    function getFullName() {
        return firstName + '' + lastName;
    }
    alert('Hello, ' + getFullName() );
    alert('Bye, ' + getFullName() );
}*/

//Вопросы для примера
/*let x = 5;
alert(x++);*/

//[] + false - null + true
/*console.log([] + false - null + true);*/

/*let y = 1;
let x = y= 2;
alert(x);*/

// [] + 1 + 2
//console.log([] + 1 + 2);

//alert('1'[0]);

//console.log( 2 && 1 && null && 0 && undefined);

//console.log( !!( 1 && 2) === (1 && 2));

//alert( null || 2 && 3 || 4);

/*const a = [1,2,3];
const b = [1,2,3];
console.log( a == b);*/

//alert( + 'infinity');

//console.log( 'Ёжик' > 'Яблоко');

//console.log(0 || '' || 2 || undefined || true || false);


/*const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);*/

/*const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

//console.dir(box);
//box.style.backgroundColor = 'plum';
//box.style.width = '500px';

box.style.cssText = 'background-color: plum; width: 500px';

btns[1].style.borderRadius = '100%';
btns[3].style.backgroundColor = 'cornflowerblue';
btns[0].style.backgroundColor = 'blueviolet';

for (let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = 'powderblue';
}

hearts.forEach(item => {
    item.style.backgroundColor = 'palegoldenrod';
});

const div = document.createElement('div');
//const text = document.createTextNode('lavender ice cream recipe');

div.classList.add('pink');

//document.body.append(div);

wrapper.append(div);
//wrapper.appendChild(div);

//wrapper.prepend(div);
//hearts[0].before(div);
//hearts[0].after(div);
//wrapper.insertBefore(div, hearts[0]);

//circles[0].remove();
//wrapper.removeChild(hearts[1]);

//hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[0]);

//div.innerHTML = '<h1>Hello World</h1>';
//div.textContent = 'Hello';

//div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');*/


//const btns = document.querySelectorAll('button'),
      //overlay = document.querySelector('.overlay');

/*btn.onclick = function () {
    alert('Click');
};*/

/*btn.addEventListener('click', () => {
    alert('Click');
});*/
/*btn.addEventListener('click', () => {
    alert(' Second click');
});*/


//let i = 0;
/*const deleteElement = (e) => {
    //e.target.remove();
    console.log(e.currentTarget);
    console.log(e.type);
    //i++;
   // if (i === 1) {
        //btn.removeEventListener('click', deleteElement);
    //}
};*/
/*btn.addEventListener('click', (e) => {
    console.log(e.target);
    e.target.remove();
    //console.log('Hover');
});*/

//btn.addEventListener('click', deleteElement);
//overlay.addEventListener('click', deleteElement);

/*btns.forEach((btn) => {
    btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});*/

//console.log(document.body);
//console.log(document.body);
//console.log(document.documentElement);
//console.log(document.body.childNodes);

//console.log(document.body.firstChild);
//console.log(document.body.lastChild);
//console.log(document.body.firstElementChild);
//console.log(document.body.lastElementChild);


//console.log(document.querySelector('#current').parentNode);
//console.log(document.querySelector('#current').parentNode.parentNode);
//console.log(document.querySelector('#current').parentElement);
//console.log(document.querySelector('[data-current="3"]').nextElementSibling);

/*for (let node of document.body.childNodes) {
    if (node.nodeName === '#text') {
        continue;
    }
    console.log(node);
}*/


/*pow(2, 1);
pow(2, 2);
pow(2, 3);
pow(2,4);*/

/*function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}*/

/*function pow(x, n) {
    if (n===1) {
        return x;
    } else {
        return x * pow( x, n - 1);
    }
}*/


let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],

        semi: {
            students: [{
                name: 'Test',
                progress: 100
            }]
        }
    }
};

/*function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}*/
//console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }
        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}
const result = getTotalProgressByRecursion(students);
console.log(result[0]/result[1]);


/*window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
        //console.log(e.touches);
        //console.log(e.targetTouches);
        console.log(e.changedTouches);
    });*/


    /*box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('Move');
    });*/

    /*box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('End');
    });*/

//});




//const p = document.querySelectorAll('p');
//console.log(p);



/*const box = document.querySelector('.box2');
const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);


let userName;
let userKey;
console.log(userName ?? userKey ?? 'User');*/

const box = document.querySelector('.box2');
const block = document.querySelector('.block');

console.log(block);

/*if (block) {
    console.log(block.textContent);
}*/

//console.log(block?.textContent);
//console.log(1 + 2);

const userData = {
    name: 'Ivan',
    age: null,
    say: function () {
        console.log('Hello');
    }
};

userData.say();
userData.hey?.();
/*if ( userData && userData.skills && userData.skills.js) {
    console.log(userData.skills.js);
}*/
console.log(userData.skills?.js);


