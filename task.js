// 1. Swap array element;
let array = [10, 2, 5, 12, 7];

// 2. fill the array with 45 from start index is 1 to end index is 4
let array = [4, 10, 5, 7, 6, 18];

// 3. find the sum of all elements of a given array
let arr = [4, 8, 7, 13, 12];
//sample output
sum = 45;

// 4. filter out the non-unique values in an array
let array = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];
// sample output
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 5. count number of occurrences of repeated names in an array of objects
let arr = [
  {
    employeeName: "Ram",
    employeeId: 23,
  },
  {
    employeeName: "Shyam",
    employeeId: 24,
  },
  {
    employeeName: "Ram",
    employeeId: 21,
  },
  {
    employeeName: "Ram",
    employeeId: 25,
  },
  {
    employeeName: "Kisan",
    employeeId: 22,
  },
  {
    employeeName: "Shyam",
    employeeId: 20,
  },
];
//sample output
Output: [
    {employeeName: "Ram", occurrences: 3},
    {employeeName: "Shyam", occurrences: 2},
    {employeeName: "Kisan", occurrences:  1}
] 

// 6. convert two-dimensional array into an object in JavaScript
let arr = [
  ["John", 12],
  ["Jack", 13],
  ["Matt", 14],
  ["Maxx", 15],
];
//sample ouput



obj = {
  Jack: 13,
  John: 12,
  Matt: 14,
  Maxx: 15,
};

// 7. How to remove falsy values from an array in JavaScript
let arr = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];
// sample output
array = [23, "gfg", true, 12, "hi", []];


// 8.How to get n largest elements from array in JavaScript
let arr = [93, 17, 56, 91, 98, 33, 9, 38, 55, 78, 29, 81, 60];
//sample output if n=3; 98,93,91

// 9.How to find every element that exists in any of two given arrays once using JavaScript
// sample input
const arr1 = [10, 20, 30, 40, 50];
const arr2 = [10, 20, 34, 32, 11];
// sample output
const newArray = [10, 20, 30, 40, 50, 34, 32, 11];

// 10.How to find all elements in a given array except for the first one using JavaScript
const arr = [1, 2, 3, 4, 5];
//sample output
[
  2,
  3,
  4,
  5,
  6
]

// 11.How to remove n elements from the end of a given array in JavaScript
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// sample output if n=3
[1, 2, 3, 4, 5, 6]
 
//12.How to create an object from two arrays in JavaScript
let a = [1, 2, 3, 4];
let b = ["ram", "shyam", "sita", "gita"];
//sample output
obj1 = {
  1: "ram",
  2: "shyam",
  3: "sita",
  4: "gita",
};

// 13.How to get the same value from another array and 
// assign to object of arrays
let arr1 = [1, 2, 3, 4, 5, 77, 876, 453];
let arr2 = [1, 2, 45, 4, 231, 453];
//sample output
[1, 2, 4, 453]

// 14.How to truncate an array in JavaScript
const num = [1, 2, 3, 4, 5, 6];

// 15.How to convert a number into array in JavaScript
var myInt = 235345;
//sample output
[2, 3, 5, 3, 4, 5 ]

// 16.How to print unique elements from two unsorted arrays using JavaScript
var arr1 = [54, 71, 58, 95, 20];
var arr2 = [71, 51, 54, 33, 80];
//sample output
[58,95,20,51,33,80]

// 17. How to search the max value of an attribute in an array object
var arr = [
  {
    a: 10,
    b: 25,
  },
  {
    a: 30,
    b: 5,
  },
  {
    a: 20,
    b: 15,
  },
  {
    a: 50,
    b: 35,
  },
  {
    a: 40,
    b: 45,
  },
];
//sample output
50
// 18.How to get a list of associative array keys in JavaScript
var arr = {
  Newton: "Gravity",
  Albert: "Energy",
  Edison: "Bulb",
  Tesla: "AC",
};
//sample output
Newton
Albert
Edison
Tesla

// 19. Convert comma separated string to array using JavaScript
let originalString = "One, Two, Three, Four, Five";
//sample output 
["One, Two, Three, Four, Five"].

// 20.Extract unique objects by attribute from array of objects.
let arr = [
  { name: "Geeks", id: 10 },
  { name: "GeeksForGeeks", id: 10 },
  { name: "Geeks", id: 20 },
  { name: "Geeks", id: 10 },
];
//sample output 
[ { name: 'Geeks', id: 10 }, 
  { name: 'GeeksForGeeks', id: 10 } ]
  

//21. Write a JavaScript function to get the number of occurrences of 
//each letter in specified string
let str = "thequickbrownfoxjumpsoverthelazydog";


// 22.Write a function get the apperance of string2 in string1
let str = "thequickbrownfoxjumpsoverthelazydog";
let str1 = "o";

// 23.find the value of place in below array using js
const arrayNew = [
  [
    [
      {
        name: "Sid",
        age: 23,
        info: [
          {
            course: "B.tech",
            place: "solan",
            CompanyDetails: [
              {
                name: "Expandimo",
                place: "Mohali",
              },
            ],
          },
        ],
      },
    ],
  ],
];
//sample output
{place: "Mohali"}

// 24. write a function which help us to get the two index of the target value which will be passed in function when we will any to number from array.
let targetArray = [10, 20, 30, 40, 50, 34, 32, 11];
//sample  output
//if target value is 90 the we will get the index as: {index1:40, index2:50}

//25. Reverse a given string using JavaScript
var str = "Full Stack Tutorials";

//27.What will be the output of following js code snippet
const number = undefined + 11;
if (number === NaN) {
  document.write("NaN");
} else if (number === 11) {
  document.write("11");
} else {
  document.write("other");
}

//28.Find the output
var a = 3;
var b = a++;
var c = ++a;
console.log(a, b, c);

// 29. What will be the output of both the fucntions
function func1() {
  return {
    name: "Full Stack Tutorials",
  };
}
console.log(func1());
function func2() {
  return;
  {
    name: "Full Stack Tutorials";
  }
}
console.log(func2());

//30. write a function to get the factorial of n number

//31. prepare object form array.
//sample input
const parentArray = [
  [
    {
      key: 123,
      value: "India",
    },
    {
      key: 124,
      value: "USA",
    },
    {
      key: 125,
      value: "Japan",
    },
    {
      key: 126,
      value: "Denmark",
    },
    {
      key: 127,
      value: "Austria",
    },
  ],
  [
    {
      key: 124,
      value: "Kenya",
    },
    {
      key: 126,
      value: "UK",
    },
    {
      key: 123,
      value: "Germany",
    },
    {
      key: 127,
      value: "Spain",
    },
    {
      key: 125,
      value: "Portugal",
    },
  ],
];
//sample output
{
   '123': [ 'India', 'Germany' ],
   '124': [ 'USA', 'Kenya' ],
   '125': [ 'Japan', 'Portuga
   l' ],
   '126': [ 'Denmark', 'UK' ],
   '127': [ 'Austria', 'Spain' ]
}

//32.How to print nested array ?
Input : [1, 5, 8, [9, 10, 24, 20, [39, 48], 89], 105, 99]
Output : 1, 5, 8, 9, 10, 24, 20, 39, 48, 89, 105, 99

//33.Will I be getting my user token ?
console.log('a');
function login(email, password) {
      setTimeout(() => {
          return {usertoken: "randomId"}
      },3000);
}
const token = login("abc@gmail.com" , "1234");
console.log(token);
console.log('c');

//34.What is the output of the following code?
const promise = new Promise(res => res(2));
promise.then(v => {
        console.log(v);
        return v * 2;
    })
    .then(v => {
        console.log(v);
        return v * 2;
    })
    .finally(v => {
        console.log(v);
        return v * 2;
    })
    .then(v => {
        console.log(v);
    });

//35. This is object how can we destructure
const employee = {
  firstName: "Marko",
  lastName: "Polo",
  position: "Software Developer",
  yearHired: 2017
};

//36.How to use map() on an array in reverse order with JavaScript and also double each array element ?
let arr = [1, 3, 5, 7, 9, 10];
//sample output
let arr1 = [20,18,14,10,6,2];

//37.Ouput for the both scenario
// scenario 1
console.log(x);
var x=5;
console.log(x);
//scenario 2
console.log(x);
let x=5;
console.log(x);

//38. what would be the value of a and b.
function codeHoist(){
  a = 10;
  let b = 50;
}
codeHoist();
console.log(a);
console.log(b);

//39.Find out the name of players who plays basketball ?
let students = [
  { id: "001", name: "Anish", sports: "Cricket" },
  { id: "002", name: "Smriti", sports: "Basketball" },
  { id: "003", name: "Rahul", sports: "Cricket" },
  { id: "004", name: "Bakul", sports: "Basketball" },
  { id: "005", name: "Nikita", sports: "Hockey" }
]

//40.Transform array of string into object using reduce()
var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
/*
sample Output:
 { 
    dog: 2, 
    chicken: 3, 
    cat: 1, 
    rabbit: 1 
 }
 */



