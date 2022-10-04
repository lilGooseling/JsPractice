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

/*const box = document.querySelector('.box2');
const block = document.querySelector('.block');

console.log(block);*/

/*if (block) {
    console.log(block.textContent);
}*/

//console.log(block?.textContent);
//console.log(1 + 2);

/*const userData = {
    name: 'Ivan',
    age: null,
    say: function () {
        console.log('Hello');
    }
};

userData.say();
userData.hey?.();*/
/*if ( userData && userData.skills && userData.skills.js) {
    console.log(userData.skills.js);
}*/
//console.log(userData.skills?.js);



/*const boxesQuery = document.querySelectorAll('.box3');
const boxesGet = document.getElementsByClassName('box3');

boxesQuery.forEach(box => {
    if (box.matches('.this')) console.log('this one');
});
console.log(boxesQuery[0].closest('.wrapper'));

boxesQuery[0].remove();
boxesGet[0].remove();

for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.classList.add('box3');
    document.body.append(div);
}

console.log(boxesQuery);
console.log(boxesGet);
console.log(Array.from(boxesGet));*/



/*const obj = {
    'name': 'Test',
    //[Symbol('id')]: 1
    [Symbol('id')]: 1,
    getId: function () {
        return this[id];
    }
};

let id = Symbol("id");
//obj[id] = 1;
console.log(Object.getOwnPropertySymbols(obj));
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

//for (let value in obj) console.log(value);

const myAwesomeDb = {
    movies: [],
    actors: [],
    //[Symbol('id')]: 123
    [Symbol.for('id')]: 123
};

// Сторонний код библиотеки

myAwesomeDb.id ='141536';
console.log(myAwesomeDb[Symbol.for('id')]);
console.log(myAwesomeDb);


const birthday = Symbol('birthday');

const user = {
    name: 'Alex',
    surname: 'Smith',
    //birthday: '20/04/1993',
    [birthday]: '20/04/2022',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};

Object.defineProperty(user, 'showMyPublicData', {enumerable: false});
for (let key in user) console.log(key);
console.log(Object.getOwnPropertyDescriptor(user, birthday));

Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
});*/





//Object.defineProperty(user, 'birthday', {value: prompt('Date?'), enumerable: true, configurable: true});
//console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));

//Object.defineProperty(user, 'name', {writable: false});
//Object.defineProperty(user, 'gender', {value: 'male'});
//console.log(Object.getOwnPropertyDescriptor(user, 'gender'));
//user.name = 'joja';

//writable
//enumerable
//configurable



/*const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};

for (const key in user) {
    console.log(user[key]);
}*/

/*for (const key of user) {
    console.log(key);
}*/


/*const arr = ['b', 'a', 'c'];
Array.prototype.someMethod = function () {};

console.dir(arr);

for (const key in arr) {
    console.log(key);
}*/

/*for (const key of arr) {
    console.log(key);
}*/

/*const str = 'string';
for (const key in str) {
    console.log(str[key]);
}*/



/*onst salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function () {
        console.log('Hello')
    }
};

salaries[Symbol.iterator] = function () {
    return {
        current: this.john,
        last: this.ann,

        next() {
            if (this.current < this.last) {
                this.current = this.current + 500;
                return {done: false, value: this.current}
            } else {
                return {done: true}
            }
        }
    }
};

for (let res of salaries) {
    console.log(res);
}*/


/*const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/2022',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};
//console.log(typeof(Object.keys(user)[0]));
const userMap = new Map(Object.entries(user));
console.log(userMap);

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);


const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 15000, 25000];

const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});*/

//console.log(map);
//console.log(map.get(shops[0]));
//console.log(map.has(shops[0]));
//map.delete(key);
//map.clear();
//map.size;

//map.set(shops[0], 5000);
//map.set(shops[1], 15000);
//map.set(shops[2], 25000);
//map.keys();


/*console.log(map.keys());
for (let shop of map.keys()) {
    console.log(shop);
}

const goods = [];
for (let shop of map.keys()) {
    goods.push(Object.keys(shop)[0])
}
console.log(goods);

for (let price of map.values()) {
    console.log(price);
}

for (let [shop, price] of map.entries()) {
    console.log(price, shop);
}

map.forEach((value, key, map) => {
    console.log(key, value);
});*/





//const arr = [1, 1, 2, 2, 4, 5, 6, 5];
/*const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];

function unique(arr) {
    return Array.from(new Set(arr));
}
console.log(unique(arr));*/


//const set = new Set(arr);
//set.add('Ivan');
//console.log(set);


//set.delete(value);
//set.has(value);
//set.clear();
//set.size;

//for (let value of set) console.log(value);
/*set.forEach((value, valueAgain, set) => {
    console.log(value, valueAgain);
});*/

//console.log(set.values());
//console.log(set.keys());
//console.log(set.entries());



//const bigint = 12345678909876543211234567890n;
//const sameBigint = BigInt(12345678909876543211234567890);
//console.log(typeof(bigint));

/*console.log(1n + 2n);

let bigint = 1n;
let number = 2;
console.log(bigint + BigInt(number));
console.log(Number(bigint) + number);*/


/*const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');*/

/*console.log(btns[0].classList.length);
console.log(btns[0].classList.item(0));
console.log(btns[1].classList.add('green'));
console.log(btns[3].classList.add('yellow'));
console.log(btns[5].classList.add('purple'));
console.log(btns[7].classList.add('sky'));
console.log(btns[0].classList.remove('blue'));
console.log(btns[0].classList.toggle('blue'));

if (btns[1].classList.contains('green')) {
    console.log('green');
}*/

/*btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('green')) {
        btns[1].classList.add('green');
    } else {
        btns[1].classList.remove('green');
    }
});*/
//console.log(btns[0].className);

/*wrapper.addEventListener('click', (event) => {
    /*if (event.target && event.target.tagName === 'BUTTON') {
        console.log('Hello');
    }*/
    /*if (event.target && event.target.classList.contains('blue')) {
        console.log('Hello');
    }*/
    /*if (event.target && event.target.matches('button.green')) {
        console.log('Hello');
    }
});*/

/*const btn = document.createElement('button');
btn.classList.add('green');
wrapper.append(btn);*/






/*const timerId = setTimeout(function () {
    console.log('Hello');
}, 2000);*/

/*const timerId = setTimeout(function (text) {
    console.log(text);
}, 2000, 'Hello');*/


/*const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box5');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos === 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);*/




/*btn.addEventListener('click', () => {
    timerId = setInterval(logger, 2000);
});*/


/*function logger() {
    if (i===3) {
        clearInterval(timerId);
    }
    console.log('text');
    i++;
}*/

/*let id = setTimeout(function log() {
    console.log('Hello');
    id = setTimeout(log, 5500);
}, 5500);*/



/*const someRes = getData();
const node = document.querySelector('.class');

setInterval(function () {
    if (node) {
        node.innerHTML = someRes;
    }
}, 1000);*/


/*function outer() {
    const potentiallyHugeArray = [];
    return function inner() {
        potentiallyHugeArray.push('Hello');
        console.log('Hello!!!');
    }
}
const sayHallo = outer();*/


/*function createElement() {
    const div = document.createElement('div');
    div.id = 'test';
    document.body.append(testDiv);
}
createElement();
//const testDiv = createElement();
//document.body.append(testDiv);

function deleteElement() {
    document.body.removeChild(document.getElementById('test'));
}
deleteElement();*/




//let user = {name: 'Ivan'};

//const arr = [user];

//let map = new Map();
//let map = new WeakMap();
//map.set(user, 'data');

//user = null;
//console.log(user);
//console.log(arr[0]);
//console.log(map.keys());
//console.log(map.has(user));


/*let cache = new WeakMap();

function cacheUser(user) {
    if (!cache.has(user)){
        cache.set(user, Date.now());
    }
    return cache.get(user);
}

let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(alex);

lena = null;
console.log(cache.has(lena));
console.log(cache.has(alex));

let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'World', from: 'Alex'},
    {text: '.....', from: 'Maria'},
];

let readMassages = new WeakSet();
readMassages.add(messages[0]);*/
//readMassages.add(messages[1]);

/*messages.shift();
console.log(readMassages.has(messages[0]));*/


//const now = new Date();
//const now = new Date(0);
//const now = new Date(-4567765432456);
//console.log(now);
//console.log(now.getFullYear());
//console.log(now.getMonth());
//console.log(now.getDate());
//console.log(now.getDay());
//console.log(now.getHours());
//console.log(now.getUTCHours());
//console.log(now.getTimezoneOffset());
//console.log(now.getTime());
//console.log(now.setHours(18));
//console.log(now);

//const now = new Date('2022-09-08');
//new Date.parse('2022-09-08');

/*let start = new Date();
for (let i = 0; i < 100000; i++) {
    let some = i**3;
}
let end = new Date();
alert(`Цикл отработал за ${end - start} миллисекунд`);*/



/*const box = document.querySelector('.box6'),
      btn = document.querySelector('button');*/

//const width = box.clientWidth;
//const height = box.clientHeight;

//console.log(width, height);

//const width = box.offsetWidth;
//const height = box.offsetHeight;

//console.log(width, height);

//const width = box.scrollWidth;
//const height = box.scrollHeight;

//console.log(width, height);

/*btn.addEventListener('click', () => {
    //box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
})*/

//console.log(box.getBoundingClientRect());
//console.log(box.getBoundingClientRect().top);

//const style = window.getComputedStyle(box);
//console.log(style);
//console.log(style.display);

//console.log(document.documentElement.clientWidth);
//console.log(document.documentElement.scrollTop);

//window.scrollBy(x, y)
//window.scrollTo(x, y)

/*const box = document.querySelector('.box7');

let observer = new MutationObserver(mutationRecords => {
    console.log(mutationRecords);
});

observer.observe(box, {
    childList: true
});

observer.disconnect();*/


/*const num = new Number(3);
console.log(num);*/

/*function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    }
}

User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} вышел`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);*/



//1) Обычная функция: This = window, но усли Use strict - undefined

/*function showThis() {
    console.log(this);
}
showThis();

function showThisNew(a, b) {
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThisNew(4, 5);

//2 Контекст у методов объекта - сам объект*/

/*const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);
    }
};
obj.sum();*/


//3 this в конструкторах и классах - это новый экземпляр объекта


/*function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log('Hello' + this.name);
    };
}
let ivan = new User('Ivan', 23);
ivan.hello();*/


//4 ручная привязка this: call, apply, bind

/*function saySurname() {
    console.log(this);
    console.log(this.surname);
}*/

/*function saySurname(name) {
    console.log(this);
    console.log(this.surname + name);
}

const user = {
    surname: 'Brown'
};

saySurname.call(user, 'Harry');
saySurname.apply(user, ['Harry']);



function count(num) {
    return this*num;
}*/

//const double = count.bind(2);
//console.log(double(3));
//console.log(double(23));




//const btn = document.querySelector('button');

/*btn.addEventListener('click', function () {
    console.log(this);
    this.style.backgroundColor = 'yellow';
});*/

/*const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this);
            console.log(this.num);
        };
        say();
    }
};
obj.sayNumber();*/

/*const double = (a) => {
    return a*2;
};*/
// Укороченная запись: const double = (a) => a*2;
/*const double = a => a*2;
console.log(double(4));


btn.addEventListener('click', (e) =>  {
    e.target.style.backgroundColor = 'green';
});*/




/*class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height*this.width;
    }
}

class ColoredRectangleWithText extends Rectangle{
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}
const div = new ColoredRectangleWithText(25, 10, 'Hello', 'plum');
div.showMyProps();
console.log(div.calcArea());



const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);
console.log(square.calcArea());
console.log(long.calcArea());*/




/*const log = function (a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'other', 'operator', 'usage');


function calcOrDouble(number, basis = 2) {
    //basis = basis || 2;
    console.log(number*basis);
}
calcOrDouble(3);*/


/*const persone = {
    name: 'Alex',
    tel: '+123456789',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};*/

//console.log(JSON.stringify(persone));
//console.log(JSON.parse(JSON.stringify(persone)));

/*const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);*/



// Ajax и общение с сервиром, XMLHttpRequest


/*const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();*/

    //status
    //statusText
    //response
    //readyState

    /*request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);

            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Что то пошло не так';
        }
    })*/


    /*request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response);

            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Что то пошло не так';
        }
    })*/

    // readystatechange событие
    // load событие



    //Promise



    //Дерево коллбэков

    /*console.log('Запрос данных...');

    const req = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Подготовка данных...');

            const product = {
                name: 'TV',
                price: 2000
            };

            resolve(product);
        }, 2000);
    });*/

    /*req.then((product) => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                product.status = 'order';
                resolve(product);
            }, 2000);
        });
    }).then(data => {
        data.modify = true;
        return data;
    }).then(data => {
        console.log(data);
    }).catch(() => {
        console.error('Произошла ошибка');
    }).finally(() => {
        console.log('Finally')
    });*/

    /*setTimeout(() => {
       console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000
        };

        setTimeout(() => {
            product.status = 'order';
            console.log(product);
        }, 2000);
    }, 2000);*/



    /*const test = time => {
        return new Promise(resolve => {
            setTimeout(() => resolve(), time);
        });
    };*/

    //test(1000).then(() => console.log('1000 ms'));
    //test(2000).then(() => console.log('2000 ms'));

    /*Promise.all([test(1000), test(2000)]).then(() => {
        console.log('All');
    });*/

    /*Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});*/


/*fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify({name: 'Alex'}),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(json => console.log(json));*/




// Методы перебора массивов
// 1.Filter


/*const names = ['Ivan', 'Ann', 'Sara', 'Alexandr'];

const shortNames = names.filter(function (name) {
    return name.length < 5;
});

console.log(shortNames);*/

//2.Map

/*const answers = ['IvAn', 'ANNE', 'Hello'];
const results = answers.map(item => {
    return item.toLowerCase();
});
console.log(results);*/

/*let answers = ['IvAn', 'ANNE', 'Hello'];
answers = answers.map(item => item.toLowerCase());
console.log(answers);*/


//Some/ every

/*const some = [2, 'hello', 'hi'];
//console.log(some.some(item => typeof(item) === 'number'));
console.log(some.every(item => typeof(item) === 'number'));*/



//Reduce

/*const arr = [4, 5, 1, 3, 2, 6];
const res = arr.reduce((sum, current) => sum + current);
console.log(res);*/

const arr = ['apple', 'pear', 'plum'];
const res = arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(res);



const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
    .filter(item => item[1] === 'person')
    .map(item => item[0]);
console.log(newArr);