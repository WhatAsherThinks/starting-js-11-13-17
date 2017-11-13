//this declaires the variable myVar
var myVar;
//this sets the myVar variable to the number .7
myVar = .7;

// this declares the ny=Name variable and it sets it to the string value Asher
var myName = 'Asher';

//quotes are very important. if you have single quote for things like contarctions, then surround it in double quotes. otherwise, preceeed the quote with a backslash \
var mySentence = "What's up?";
var thing = "and he said \"What's up\" to me";


//strings cannot break lines by default
var myLongString = "This actually isn't too long.";

//this us concatenation, adding two strings together. to add a space, you have to do it manually; by putting quotes between: =myName + " " + "DeMadet" or this way: nyName + " DeMadet"
var myFulllName = myName + " " + 'DeMadet';


//Booleans are either true or flase
var myBoolean = false;


var numA = 14;
var numB = 27;

//addition in js is done with the plus + symbol
var sumOfAandB = numA + numB;

//this reassigs the value of the numA variable to 32. This does not affect the line above, but will affect the line below
numA = 32;

//subtraction is done with the hyphen - symbol
var numAMinusNumB = numA - numB;

//multiplication is done with the astreck * symbol
var numC = 3 * 3;

//division is done with forward  slash / symbol
var numD = 4 / 2;

//Exponnents are done with **
var myExponent = 2 ** 4;

//modulus is done with a percent % returning the remainder after division, 5 % 2 = 1
var myModulus = 5 % 2;

//This creates the me variable and assignes to be an object
var me = {
  //objects are made of names key value pairs. put a comma after each key value. The Last value does not get a comma!!
  name: "Asher DeMadet",
  age: 25,
  isGreat: true,
  head: {
    eyes: 2,
    hairColor: 'blonde',
    glasses: true
  }
};
//properties on the me object would generally be accessed usng dot notation. for example: me.name would return Asher DeMadet, me.head.eyes would return 2

console.log(me.age);

//this sets the age propery on the me object to the value of 30
me.age = 30;

console.log(me.age);

//arrays are key value pairs where the key is a number, arrays are created using [], each element within an array is separated by commas,
var myArr = [55, "Tiger", true, me];

// arrays in JavaScript start with a 0 index, to access elements within an array use [] with the index number, myArr[0] would be 55. myArr[3] would be ture.
console.log(myArr[0]);

var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday'];

//objects can holdl arrays as the value for properties
//this ass a hobbies property to the me object and sets it to be an array
me.hobbies = ['Code', 'Music', 'Food', 'Games'];

console.log(me.hobbies[0]);

var something;
// something is undefined. the variable has been declared but a value has not been set, thats okay
console.log(something);

//this wont work because it has not been definded. it will throw and error and stop executing any further script by default
//console.log(somethingElse);

//null is nothing
var nothing = null;

//this is a function declaration that create a function called sayHello
function sayHello(){
  console.log("Welcome to JavaScript City Dude!")
}
//functuon declarations fo not end in a semicolon ;

//this calls or invokes the sayHellofunction
sayHello();

//variabls created within a function are only available within the function, this is called function scope
function sayHelloTo(name) {
  var message = "Welcome to JavaScript" + name + "!";
  console.log(message);
}

sayHelloTo("Meeeeeee!!!");

sayHelloTo("Richard Simmons");
sayHelloTo('Paul Newman');

//this is a function expression that creates afunction called sumNums
var sumNums = function(firstNum, secondNum){
  var sum = firstNum + secondNum;
  //This will return the value of the sum variable to there the function is called
  return sum;
};

sumNums(2,2);

//console.log(sumNums(2,2) );

var mySum = sumNums(923,13454);
