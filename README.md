# JavaScript-preparation
JS interview 
# block scoped vs function scoped
let a = 1;
{
         let a = 2; 
         console.log(a);
}
console.log(a); // 2 1 why ? block er vetor er let o bairer let alada

var a = 1;
{
         var a = 2; 
         console.log(a);
}
console.log(a); // 2 2 why ? var er vetor er variable bairer ta override korse

var a = 1;
function varTest(){
        var a = 2;
        console.log(a);
}
varTest();
console.log(a); // 2 1 function er vetor er var alada thats why var function scoped ar let block scoped

//primitive data type are immutable once created that can not changes : deep copy dont pass reference jodio reassigne kora jay.
//non primitive are mutable once created can be changed it allows shallow copy

# Hoisting
//Hoisting means variables and functions are moved to the top of their scope before execution.
console.log(x);
var x = 10; // undefined
Variables declared with var are hoisted to the top of their function or global scope and initialized with undefined.
Variables declared with let and const are also hoisted, but they are not initialized. They are in a "temporal dead zone" (TDZ) until the declaration is encountered.

isNaN("abc"); // true
falsy value : false 0 "" null undefined NaN

*A function stored inside a variable.

*Spread operator is used to expand elements of an array or object.

The Temporal Dead Zone (TDZ) is the period between when a variable is hoisted (declared) and when it's initialized with a value, during which the variable cannot be accessed.

Simple Definition
Temporal: Time-based (not spatial/location-based)
Dead Zone: Area where accessing the variable causes an error
Zone: The section of code where the variable exists but can't be used

*Template literals allow string interpolation using backticks `.


