//text change
function textChange(){
	document.getElementById('h2').innerHTML = "hello world";
}

//show date
function showDate(){
	document.getElementById('d_h2').innerHTML = Date();
}

//bulb on-off
function bulbOn(){
	document.getElementById('img').src="images/bulbon.gif";
}
function bulbOff(){
	document.getElementById('img').src="images/bulboff.gif";
}

//font change
function fontChange(){
	document.getElementById('f_h2').style.fontSize = "60px";
}

//font family change
function fontFamily(){
	document.getElementById('ff_h2').style.fontFamily = "serif";
}

//show/hide text
function show(){
	document.getElementById('c_h2').style.display= "block";
}
function hide(){
	document.getElementById('c_h2').style.display= "none";
}

//DWrite
function writeOutput(){
	document.write('Hello World!');
}

//cLog
function cLog(){
	console.log("Hello World!");
}

//variable
var number1 = 10;
var number2 = 20;

var data = number1 + number2;

function vOutput(){
	document.getElementById('vh2').innerHTML = data;
}

//let
let num1, num2, sum;

num1 = 5;
num2 = 7;

sum = num1 + num2;

function lOutput(){
	document.getElementById('lh2').innerHTML = sum;
}

//constant
const numb1 = 30;

function cOutput(){
	document.getElementById('ch2').innerHTML = numb1;
}

//const
const x = 5;
const y = 6;
const z = x + y;

function constOutput(){
	document.getElementById('cout').innerHTML = z;
}

//mixed example
const price1 = 15;
const price2 = 20;
let total = price1 + price2;

function letOutput(){
	document.getElementById('out').innerHTML = total;
}

//without variable declaration
n1 = 20;
n2 = 30;

n1-= n2;

function wOutput(){
	document.getElementById('wvh2').innerHTML = n1;
}

//mixed
const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';

function mOutput(){
	document.getElementById("mh2").innerHTML =
	pi + "<br>" + person + "<br>" + answer;
}

//let example
let carName = "Ferrari";

function letOutput(){
	document.getElementById("demo").innerHTML = carName;
}

//let example
let a = 5 + 2 + 3;

function lettOutput(){
	document.getElementById("demo1").innerHTML = a;
}

//adding strings
let j = "John" + " " + "Doe";

function strOutput(){
	document.getElementById("demo2").innerHTML = j;
}

//adding strings
let ns = 2 + 3 + "5";

function nsOutput(){
	document.getElementById("demo3").innerHTML = ns;
}

//js dollar sign
let $$$ = 2;
let $myMoney = 5;

function dOutput(){
	document.getElementById("dh2").innerHTML = $$$ + $myMoney;
}

//js underscore
let _x = 7;
let _100 = 5;

function uOutput(){
	document.getElementById("uh2").innerHTML = _x + _100;
}

//variable redeclaration using var
var  v = 10;
// Here v is 10

{  
var v = 2;
// Here v is 2
}

// Here v is 2
function varOutput(){
	document.getElementById("varh2").innerHTML = v;
}

//variable redeclaration using var
var p = 2;
// Now p is 2

var p = 3;
// Now p is 3

function vaOutput(){
	document.getElementById("vah2").innerHTML = p;
}

//redeclaring variable using let
let  b = 10;
// Here b is 10

{  
  let b = 2;
  // Here b is 2
}

// Here b is 10
function leOutput(){
	document.getElementById("leh2").innerHTML = b;
}

//variable redeclaration using var
let q = 2;   // Allowed

{
  let q = 3;   // Allowed
}

{
  let q = 4;   // Allowed
}

function lettOutput(){
	document.getElementById("letth2").innerHTML = q;
}

//js const
// Create an Array:
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");

// Display the Array:
function carsOutput(){
	document.getElementById("carsh2").innerHTML = cars;
}

//js const
// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};

// Change a property:
car.color = "red";

// Add a property:
car.owner = "Johnson";

// Display the property:
function carOutput(){
	document.getElementById("carh2").innerHTML =  "Car owner is " + car.owner;
}

//js const
const  r = 10;
// Here r is 10

{  
const r = 2;
// Here r is 2
}

// Here r is 10
function rOutput(){
	document.getElementById("rh2").innerHTML = "The value of r is " + r;
}

//assignment operators
// Assign the value 5 to d
let d = 5;
// Assign the value 2 to e
let e = 2;
// Assign the value d + e to f
let f = d + e;
// Display f
function fOutput(){
	document.getElementById("fh2").innerHTML = "The sum of d + e is: " + f;
}

//js arithmetic
let xx = 5;
let yy = 2;
let zz = xx + yy;
function zzOutput(){
	document.getElementById("zzh2").innerHTML = zz;
}

//js arithmetic
let zzz = xx - yy;
function zzzOutput(){
	document.getElementById("zzzh2").innerHTML = zzz;
}

//js arithmetic
let xy = xx * yy;
function xyOutput(){
	document.getElementById("xyh2").innerHTML = xy;
}

//js arithmetic
let x_y = xx / yy;
function xyOut(){
	document.getElementById("xy").innerHTML = x_y;
}

//js arithmetic
let x$y = xx % yy;
function modOutput(){
	document.getElementById("modh2").innerHTML = x$y;
}

//arithmetic operations
let aa = 3;
let ax = (100 + 50) * aa;

function axOutput(){
	document.getElementById("axh2").innerHTML = ax;
}

//the '+=' operator
var pp = 10;
pp += 5;

function pOutput(){
	document.getElementById("ph2").innerHTML = pp;
}

//the '++' operator
var pp = 10;
pp ++;
inc = pp;

function incOutput(){
	document.getElementById("inch2").innerHTML = inc;
}

//the '--' operator
var pp = 10;
pp --;
dec = pp;

function decOutput(){
	document.getElementById("dech2").innerHTML = dec;
}

//the '**' operator
var pp = 10;

function expOutput(){
	document.getElementById("exph2").innerHTML = pp ** 2;
}

//the 'Math.pow()' operator
var pp = 10;

function powOutput(){
	document.getElementById("powh2").innerHTML = Math.pow(pp,2);
}

//js string operator
let text1 = "A";
let text2 = "B";
let result = text1 < text2;

function stOutput(){
	document.getElementById("sth2").innerHTML = "Is A less than B? " + result;
}

//js string operator
let t1 = "20";
let t2 = "5";
let res = t1 < t2;

function strrOutput(){
	document.getElementById("strrh2").innerHTML = "Is 20 less than 5? " + result;
}

//js string concatenation
let text = "What a ";
text += "nice day!";

function sttOutput(){
	document.getElementById("stth2").innerHTML = text;
}

//js string operator
let m = 5 + 5;
let n = "5" + 5;
let o = "Hello" + 5;

function striOutput(){
	document.getElementById("stri").innerHTML = m + "<br>" + n + "<br>" + o;
}

//js arithmetic
function preOutput(){
	document.getElementById("pre").innerHTML = 100 + 50 * 3;
}

//js arithmetic
function precOutput(){
	document.getElementById("prec").innerHTML = (100 + 50) * 3;
}

//js arithmetic
function prrOutput(){
	document.getElementById("prr").innerHTML = 100 / 50 * 3;
}

//js string
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

function stOutput(){
	document.getElementById("st").innerHTML = answer1 + "<br>" + answer2 + "<br>" + answer3;
}

//js string
let textt = "Apple, Banana, Kiwi";
let part = textt.slice(7,13);

function stringOutput(){
	document.getElementById("string").innerHTML = part; 
}

//js numbers
let k = 123456789012345678901234567890n;
let l = BigInt("123456789012345678901234567890");

function numbOutput(){
	document.getElementById("numb").innerHTML = k + "<br>" + l;
}