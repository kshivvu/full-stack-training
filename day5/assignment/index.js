const students = [
  { name: "Aman", marks: 78, subject: "Math" },
  { name: "Riya", marks: 45, subject: "Science" },
  { name: "Kabir", marks: 32, subject: "Math" },
  { name: "Neha", marks: 90, subject: "English" },
  { name: "Arjun", marks: 67, subject: "Science" },
  { name: "Sara", marks: 25, subject: "Math" },
  { name: "Vikram", marks: 88, subject: "English" },
  { name: "Pooja", marks: 54, subject: "Science" },
  { name: "Rahul", marks: 39, subject: "Math" },
  { name: "Anita", marks: 72, subject: "English" }
];

// pass students (marks >= 40)
const pass = students.filter(s => s.marks >= 40);
console.log(pass);

// fail students
const fail = students.filter(s => s.marks < 40);
console.log(fail);

// average marks
const avg =
  students.reduce((sum, s) => sum + s.marks, 0) / students.length;
console.log(avg);

// topper
const topper = students.reduce((a, b) =>
  a.marks > b.marks ? a : b
);
console.log(topper);

// group by subject
const grouped = students.reduce((acc, s) => {
  if (!acc[s.subject]) acc[s.subject] = [];
  acc[s.subject].push(s);
  return acc;
}, {});

console.log(grouped);