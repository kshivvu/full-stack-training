//1 Function with Default Parameter

function calculateTotal(price, deliveryFee = 50) {
  return price + deliveryFee;
}



//2. Greeting Function with Default Parameter


function greetUser(name, greeting = "Goodbye") {
  return greeting + " " + name;
}



//3. OUtput and why

function greet(name = "Guest") {
  return "Hello " + name;
}

console.log(greet(undefined));  //Hello Guest why? because dafault parameter is used when value is undefined 
console.log(greet(null)); //null is not undefined so deafult parameter is not used
console.log(greet("")); //empty string is also a valid input



//4.Output of Logical Operators

console.log(0 || "Hello");
console.log("" || "World");
console.log("JS" && 100);
console.log(null && "Test");


//output:-
// Hello
// World
// 100
// null
// Why
// || (OR operator)

// Returns first truthy value

//  0 || "Hello"
// 0 is falsy → returns "Hello"

//  "" || "World"
// "" is falsy → returns "World"

// && (AND operator)

// Returns first falsy value or last value

//  "JS" && 100

// "JS" is truthy

// returns next value → 100

//  null && "Test"

// null is falsy

// returns null immediately


//5) Output of || vs ??

console.log(0 || 10);
console.log(0 ?? 10);

console.log(null || 20);
console.log(null ?? 20);

//Output
// 10
// 0
// 20
// 20
// Why
// || (OR)

// Returns first truthy value

//  0 || 10

// 0 is falsy → returns 10

// ?? (Nullish Coalescing)

// Returns right side only if value is null or undefined

//  0 ?? 10

// 0 is not null/undefined

// returns 0

//  null || 20

// null is falsy → returns 20

//  null ?? 20

// null triggers ??

// returns 20



 //6. Debug the code


 //give code

 function showMessage(message) {
  const finalMessage = message || "No message provided";
  return finalMessage;
}

console.log(showMessage(""));



// this is always going to return "No message provided" becayse "" empty string is a falsy value

//v\berter fix would be to use ?? because it replaces only null or undefined values

function showMessage(message) {
  const finalMessage = message ?? "No message provided";
  return finalMessage;
}

console.log(showMessage(""));


//7. Code 

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(i, j);
  }
}


//8, code 


function fizzBuzz() {
  for (let i = 1; i <= 20; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    else {
      console.log(i);
    }

  }
}

fizzBuzz();