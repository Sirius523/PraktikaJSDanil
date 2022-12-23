'use strict'
//Задание 1
let minute = 45;
if (minute >= 0 && minute <= 14) {
    console.log(`1) ${minute} Входит в первую четверть`)
}if (minute >= 15 && minute <= 30) {
    console.log(`1) ${minute} Входит во вторую четверть`)  
}if (minute >= 31 && minute <= 45) {
    console.log(`1) ${minute} Входит в третью четверть`)
}if (minute >= 46 && minute <= 59) {
    console.log(`1) ${minute} Входит в четвертую четверть`)       
}   
//Задание 2
let lang = 'ru',
ru = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
en = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
i = 0;
if (lang == 'ru') {
    for(i = 0; i < ru.length; i++){
        console.log(`2)    ${ru[i]}`)
    }
} else if (lang == 'en') {
    for(i = 0; i < en.length; i++){
        console.log(`2)    ${en[i]}`)
    }
}
//Задание 3
let arr3 = prompt('Введите число: '),
str = 'Число ' + arr3;

if (arr3 >= 0 && arr3.length == 1) {
    str += " однозначное"
} else if (arr3 >= 0 && arr3.length == 2) {
    str += " двузначное"
} else if (arr3 >= 0 && arr3.length == 3) {
    str += " трехзначное"
} else if (arr3 < 0 && arr3.length == 2) {
    str += " однозначное"
} else if (arr3 < 0 && arr3.length == 3) {
    str += " двузначное"
} else if (arr3 < 0 && arr3.length == 4) {
    str += " трехзначное"
}-1
if (arr3 >= 0 ) {
    str += " положительное"
} else {
    str += " отрицательное"
}
console.log(`3) ${str}`)
//Задание 4
let red = 'no',
yellow = 'no',
green;
if (red === 'no' && yellow === 'no') {
    green = 'yes';
}else {
    green = 'no';
} if (green === 'yes') {
    console.log(`4) Горит зелёный свет, переходи дорогу!`)
}
//Задание 5
let arr5 = 1;
for (arr5; arr5 <= 12; arr5++){
    console.log(`5)     ${arr5}`);
}
//Задание 6
let arr6 = 5;
for (arr6; arr6 <= 13; arr6++){
    console.log(`6)     ${arr6}`);
}
//Задание 7
let arr7 = 0;
for (arr7; arr7 <= 16; arr7++){
    if(arr7 % 2 == 0){
    console.log(`7)     ${arr7}`);
    }
}
//Задание 8
let arr8 = [2,5,8,3,6],
sum8 = 1;
for (let i = 0; i < arr8.length; i++){
    sum8 = sum8 + arr8[i];
}
console.log(`8) ${sum8}`);