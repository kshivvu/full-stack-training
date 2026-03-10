// Question 1
// Check if all students passed (marks >= 40)

const nums1 = [15, 20, 30];

const result = nums1.every(n => n > 10);
console.log("Q1 - Are all numbers > 10?", result);

// Example for marks
const marks = [50, 60, 45, 70];
const allPassed = marks.every(m => m >= 40);
console.log("All students passed:", allPassed);



console.log("------------");


// Question 2
// Get students who passed (marks ≥ 40)

const nums2 = [10, 60, 30, 80];

const passedStudents = nums2.filter(n => n >= 40);
console.log("Q2 - Students who passed:", passedStudents);



console.log("------------");


// Question 3
// Find first student with marks greater than 80

const nums3 = [10, 25, 90, 70];

const found = nums3.find(n => n > 80);
console.log("Q3 - First number greater than 80:", found);



console.log("------------");


// Question 4
// Flatten arrays

const arr = [1, 2, [3, 4]];

console.log("Flatten 1 level:", arr.flat());

const arr2 = [10, 20, [30]];
console.log("Flatten with level 2:", arr2.flat(2));



console.log("------------");


// Question 5
// Print all names

const names = ["Aman", "Riya", "Kabir"];

names.forEach(name => {
  console.log("Name:", name);
});



console.log("------------");


// Question 6
// Print double of each number

const nums4 = [20, 30, 80];

nums4.forEach(n => {
  console.log("Double:", n * 2);
});


// Question 7
// Extract names from student objects

const students = [
  { name: "Aman", age: 20, class: "nuersery", batch: 2023, year: 2 },
  { name: "Riya", age: 21, class: "nuersery", batch: 2023, year: 2 },
  { name: "Kabir", age: 22, class: "nuersery", batch: 2022, year: 3 }
];

const namess = students.map(s => s.name);
console.log(namess);


// Check if any number > 25
const nums = [10, 25, 45];

const hasGreaterThan25 = nums.some(n => n > 25);
console.log(hasGreaterThan25);


// Question 8
// Check if any number is negative

const arr1 = [12, -13, 7, 5];

const hasNegative = arr1.some(n => n < 0);
console.log(hasNegative);


// Question 9
// Check if any student failed (marks < 40)

const marks1 = [55, 72, 38, 90];

const failed = marks1.some(m => m < 40);
console.log(failed);


// Sort numbers

const numbers = [40, 10, 25, 5];

numbers.sort((a, b) => a - b);
console.log(numbers);