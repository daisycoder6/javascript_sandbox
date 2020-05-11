/*

Demonstration of Functions and Scope in Javascript.

Functions are the basic building blocks that allow 
us to structure our code in to logical blocks.

It makes it easier to debug, reuse and understand



*/


// A function that doesn't take inputs and doesn't return anything

// Declaring the function
function idontneedinputs_or_outputs(){
	console.log('Hello');
} 

// Function won't do anything until we call it
idontneedinputs_or_outputs()


// A function that doesn't take inputs but returns a value

// Declaring the function
function idontneedinputs(){
	//console.log('Hello');
	return 'Returning Hello';
} 

// Function won't do anything until we call it
returnedvariable = idontneedinputs();
console.log(returnedvariable);


// A function that takes an input 
// Inputs are also called arguments or parameters

// Declaring the function


function ineedinputs(favouriteanimal){
	console.log(favouriteanimal);

} 

// Function won't do anything until we call it
ineedinputs('Horse');

// What if we try and print favourite animal

//console.log(favouriteanimal)

//we get an error, the favourite animal variable only exists withing the function



// What is Scope

//Let's define some variables.

// Global Scope vs Function scope
var myvar = 15;
let mylet = 30;
const myconst = 45;



function logmyvariables(){

	//Define varibales which are local to the function.

	var myvar = 1500;
	let mylet = 678;
	const myconst = 98;

	console.log('Function Scope', myvar, mylet, myconst);

}

console.log('Global Scope', myvar, mylet, myconst);
logmyvariables()

// Block level scope ( IF, FOR LOOPS)

if(true){

	var myvar = 4000;
	let mylet = 69;
	const myconst = 56;

	console.log('Block Scope', myvar, mylet, myconst);

}

// Now let's check the global scope again

console.log('Global Scope', myvar, mylet, myconst);
logmyvariables()

// What's the easiest way to avoid this kinf of confusion
//NEVER USE VAR
