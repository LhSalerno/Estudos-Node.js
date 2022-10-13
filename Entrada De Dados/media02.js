/* Programa que calcula media*/

var readlineSync = require('readline-sync');
var a1 = 0;
var a2 = 0;
var a3 = 0;
var a4 = 0;
var a5 = 0;
var total =0;
var media =0;

console.log('Programa que faz a media de cinco numeros');
a1 = parseFloat(readlineSync.question('1 Valor: '));
a2 = parseFloat(readlineSync.question('2 Valor: '));
a3 = parseFloat(readlineSync.question('3 Valor: '));
a4 = parseFloat(readlineSync.question('4 Valor: '));
a5 = parseFloat(readlineSync.question('5 Valor: '));
total = a1 + a2 + a3 + a4 + a5;
media = total /5;

console.log('total: ' + total);
console.log('media: ' + media);