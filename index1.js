// 1. Swap array element;

// let array = [10, 2, 5, 12, 7, 8];
// var temp = 0;

// if (array.length % 2 === 0) {
//   for (var i = 0; i < array.length; i += 2) {
//     temp = array[i];
//     array[i] = array[i + 1];
//     array[i + 1] = temp;
//   }
// } else {
//   for (var i = 0; i < array.length - 1; i += 2) {
//     temp = array[i];
//     array[i] = array[i + 1];
//     array[i + 1] = temp;
//   }
// }
// console.log(array);

// 2. fill the array with 45 from start index is 1 to end index is 4
// let array = [4, 10, 5, 7, 6, 18];

// array.splice(1,3,45,45,45)
// console.log(array);

// 3. find the sum of all elements of a given array
// let arr = [4, 8, 7, 13, 12];
//sample output
//sum = 45;

// 4. filter out the non-unique values in an array
// let array = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];

// const output = array.filter((item, index) =>
// {
//     return array.indexOf(item) === index
// })

// console.log(output)
//sample output
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 5. count number of occurrences of repeated names in an array of objects
// let arr = [
//   {
//     employeeName: "Ram",
//     employeeId: 23,
//   },
//   {
//     employeeName: "Shyam",
//     employeeId: 24,
//   },
//   {
//     employeeName: "Ram",
//     employeeId: 21,
//   },
//   {
//     employeeName: "Ram",
//     employeeId: 25,
//   },
//   {
//     employeeName: "Kisan",
//     employeeId: 22,
//   },
//   {
//     employeeName: "Shyam",
//     employeeId: 20,
//   },
// ];

// const output = arr.reduce((acc, currValue) =>
// {

//     const index = acc.findIndex((item) =>
//     {
//         return item.employeeName === currValue.employeeName
//     })

//     if(index === -1)
//     {
//         acc.push({employeeName: currValue.employeeName, occurences: 1})
//     }

//     else{
//         acc[index].occurences++
//     }

//     return acc;
//    },[])

//    console.log(output);

// 6. convert two-dimensional array into an object in JavaScript
// let arr = [
//   ["John", 12],
//   ["Jack", 13],
//   ["Matt", 14],
//   ["Maxx", 15],
// ];
//sample ouput

// let temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

// const output = arr.reduce((acc, currValue) =>
// {
//     let key = currValue[0];
//     let value = currValue[1];
//     acc[key] = value;

//     return acc;
// }, {});
// console.log(output);

// 7. How to remove falsy values from an array in JavaScript
// let arr = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];

// const output = arr.filter((item) =>
// {
//     if(item)
//     {
//         return item;
//     }
// })

// console.log(output);

// 8.How to get n largest elements from array in JavaScript
// let arr = [93, 17, 56, 91, 98, 33, 9, 38, 55, 78, 29, 81, 60];

// arr.sort();
// let y = arr.splice(-3, 3);
// console.log(y);

// let arr = [93, 17, 56, 91, 98, 33, 9, 38, 55, 78, 29, 81, 60];
// arr.sort();
// let n = window.prompt("Enter value of n ");

// let output = arr.slice(-n);

// console.log(output);

// 9.How to find every element that exists in any of two given arrays once using JavaScript
// sample input

// const arr1 = [10, 20, 30, 40, 50];
// const arr2 = [10, 20, 34, 32, 11];

// const newArray = arr1.map((item) => {
//   if (!arr2.includes(item)) {
//     arr2.push(item);
//   }
//   return arr2;
// });

// console.log(newArray[0]);

// const arr1 = [10, 20, 30, 40, 50];
// const arr2 = [10, 20, 34, 32, 11];

// let newArray = [...arr1, ...arr2];

// newArray = newArray.filter((res, b)=>
// {
//    return newArray.indexOf(res) === b
// })

// console.log(newArray);

// 10.How to find all elements in a given array except for the first one using JavaScript
// const arr = [1, 2, 3, 4, 5];

// let ans = arr.slice(1);

// console.log(ans);

// ans.splice(4, 0, 6)

// console.log(ans);
//2nd Way

// const arr = [1, 2, 3, 4, 5];

// let ans = arr.splice(0, 1);

// console.log(ans);

// console.log(arr);

// arr.splice(4, 0, 6);

// console.log(arr);

// 11.How to remove n elements from the end of a given array in JavaScript
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // sample output if n=3
// [1, 2, 3, 4, 5, 6]

// let n = window.prompt("Enter value of n");

// let ans = arr.splice(-n, 3);

// console.log(ans);

// console.log(arr);
//12.How to create an object from two arrays in JavaScript
// let a = [1, 2, 3, 4];
// let b = ["ram", "shyam", "sita", "gita"];

// const obj1 = a.reduce((acc, currValue, index) =>
// {
//     acc[a[index]] = b[index];
//     return acc;
// },{});

// console.log(obj1);
//sample output
// obj1 = {
//   1: "ram",
//   2: "shyam",
//   3: "sita",
//   4: "gita",
// };

// 13.How to get the same value from another array and
// assign to object of arrays
// let arr1 = [1, 2, 3, 4, 5, 77, 876, 453];
// let arr2 = [1, 2, 45, 4, 231, 453];

// const output = arr1.reduce((acc, currValue) =>
// {
//     if(arr2.includes(currValue))
//     {
//         acc.push(currValue);
//     }
//     return acc;
// },[])

// console.log(output);

// 14.How to truncate an array in JavaScript
// const num = [1, 2, 3, 4, 5, 6];

// 1. Using splice

// let ans = num.splice(0,3);
// console.log(ans);
// console.log(num);
// 2. Using length

// num.length = 3;
// console.log(num);

// 15.How to convert a number into array in JavaScript
// var myInt = 235345;

//  myInt.toString().split("");

// myInt = parseInt(myInt)

// console.log(myInt);

// 16.How to print unique elements from two unsorted arrays using JavaScript
// var arr1 = [54, 71, 58, 95, 20];
// var arr2 = [71, 51, 54, 33, 80];

// const output = [...arr1, ...arr2];

// const newOutput = output.filter((res) =>
// {

//     return !(arr1.includes(res) && arr2.includes(res))

// })

// console.log(newOutput);

// 17. How to search the max value of an attribute in an
// array object
// var arr = [
//   {
//     a: 10,
//     b: 25,
//   },
//   {
//     a: 30,
//     b: 5,
//   },
//   {
//     a: 20,
//     b: 15,
//   },
//   {
//     a: 50,
//     b: 35,
//   },
//   {
//     a: 40,
//     b: 45,
//   },
// ];

// const output = arr.reduce((acc, currValue) =>
// {
//     if(acc < currValue.a && currValue.a < currValue.b)
//     {
//         acc = currValue.b;
//     }
//     else if(acc < currValue.b && currValue.b < currValue.a)
//     {
//         acc = currValue.a;
//     }
//     else if(acc > currValue.b && acc < currValue.a)
//     {
//         acc = currValue.a;
//     }
//     else if(acc > currValue.a && acc < currValue.b)
//     {
//         acc = currValue.b;
//     }
//     return acc;
// }, 0)

// console.log(output);

// 18.How to get a list of associative array keys in JavaScript
// var arr = {
//   Newton: "Gravity",
//   Albert: "Energy",
//   Edison: "Bulb",
//   Tesla: "AC",
// };

// for( var i in arr)
// {
//     console.log(i)
// }

// for(var key in arr)
// {
//     if(arr.hasOwnProperty(key))
//     {
//         console.log(key);
//     }
// }

// let originalString = "One, Two, Three, Four, Five";

// console.log(originalString.split(" , "));

// 20.Extract unique objects by attribute from array of objects.
// let arr = [
//   { name: "Geeks", id: 10 },
//   { name: "GeeksForGeeks", id: 10 },
//   { name: "Geeks", id: 20 },
//   { name: "Geeks", id: 10 },
// ];

// const output = arr.reduce((acc, currValue) =>
// {
//     const index = acc.findIndex(item => item.name === currValue.name)

//     if(index === -1)
//     {
//         acc.push(currValue)
//     }
//     return acc;
// },[])

// console.log(output);

//21. Write a JavaScript function to get the number of occurrences
//of each letter in specified string
// let str = "thequickbrownfoxjumpsoverthelazydog";
// let arr = str.split("");

// const output = arr.reduce((acc, currValue) =>
// {

//  if(!acc[currValue])
//  {
//     acc[currValue] = 1;
//  }

//     else{
//         acc[currValue]++;
//     }
//     return acc;
// },{});

// console.log(output);

// 22.Write a function get the apperance of string2 in string1
// let str = "thequickbrownfoxjumpsoverthelazydog";
// let str1 = "o";

// let arr = str.split("");

// let count = 0;
// const output = arr.filter((item) =>
// {
// if(item === str1)
// {
//     count++;
//     return count;

// }
// })

//  console.log(output.length);

// 23.find the value of place in below array using js
// const arrayNew = [
//   [
//     [
//       {
//         name: "Sid",
//         age: 23,
//         info: [
//           {
//             course: "B.tech",
//             place: "solan",
//             CompanyDetails: [
//               {
//                 name: "Expandimo",
//                 place: "Mohali",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   ],
// ];

// const output = arrayNew.filter((item) => {
//   item.filter((item1) => {
//     item1[0].info.filter((item2) => {
//       item2.CompanyDetails.filter((item3) => {
//         console.log(item3.place);
//       });
//     });
//   });
// });

// 24. write a function which help us to get the two index
// of the target value which will be passed in function
// when we will any to number from array.
//let targetArray = [10, 20, 30, 40, 50, 34, 32, 11];
//sample  output
//if target value is 90 the we will get the
// index as: {index1:40, index2:50}
// let output = [];

// var targetValue = 90;
// for(var i = 0; i < targetArray.length; i++)
// {

//     for(var j = i + 1; j < targetArray.length; j++)
//     {
//         if(targetArray[i] + targetArray[j] === targetValue)
//         {

//             output.push({index1: targetArray[i], index2: targetArray[j]})
//         }
//     }
// }

// console.log(output);

//25. Reverse a given string using JavaScript
// var str = "Full Stack Tutorials";

// var arr = str.split("");
//  arr.reverse();

// console.log(arr);

//27.What will be the output of following js code snippet
// const number = undefined + 11;
// if (number === NaN) {
//   document.write("NaN");
// } else if (number === 11) {
//   document.write("11");
// } else {
//   document.write("other");
// }

//28.Find the output
// var a = 3;
// var b = a++;
// var c = ++a;
// console.log(a, b, c);

// 29. What will be the output of both the fucntions
// function func1() {
//   return {
//     name: "Full Stack Tutorials",
//   };
// }
// console.log(func1());
// function func2() {
//   return;
//   {
//     name: "Full Stack Tutorials";
//   }
// }
// console.log(func2());

//30. write a function to get the factorial of n number
// let number  = window.prompt("Enter value of number");
// var ans = 1;
// for(var i = 1; i <= number; i++)
// {
//     ans = ans*i;
// }

// console.log(ans);
//31. prepare object form array.
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

const output = parentArray.reduce((acc, currValue) =>
{
    // let ans = currValue.map;
     currValue.map((res) =>
   {
    if(!acc[res.key])
    {
        acc[res.key] = [res.value]
    }
    else{
        acc[res.key].push(res.value)
    }
    // return ans;
   })
   return acc;
}, {})
 


console.log(output);

//32.How to print nested array ?
// const arr = [1, 5, 8, [9, 10, 24, 20, [39, 48], 89], 105, 99];

//  arr.flat(2);
// console.log(arr);

//33.Will I be getting my user token ?
// console.log('a');
// function login(email, password) {
//       setTimeout(() => {
//           return {usertoken: "randomId"}
//       },3000);
// }
// const token = login("abc@gmail.com", "1234");
// console.log(token);
// console.log("c");

//34.What is the output of the following code?
// const promise = new Promise((res) => res(2));
// promise
//   .then((v) => {
//     console.log(v);
//     return v * 2;
//   })
//   .then((v) => {
//     console.log(v);
//     return v * 2;
//   })
//   .finally((v) => {
//     console.log(v);
//     return v * 2;
//   })
//   .then((v) => {
//     console.log(v);
//   });

//35. This is object how can we destructure
// const employee = {
//   firstName: "Marko",
//   lastName: "Polo",
//   position: "Software Developer",
//   yearHired: 2017,
// };

// const { firstName, lastName, position, yearHired } = employee;

// console.log(firstName);
// console.log(lastName);
// console.log(position);
// console.log(yearHired);

//36.How to use map() on an array in reverse order
// with JavaScript and also double each array element ?

// let arr = [1, 3, 5, 7, 9, 10];
// arr.reverse();
// const output = arr.map((item) =>
// {
//     return item * 2;
// })

// console.log(output);

//37.Ouput for the both scenario
// scenario 1
// console.log(x);
// var x=5;
// console.log(x);
//scenario 2
// console.log(x);
// let x=5;
// console.log(x);

//38. what would be the value of a and b.
// function codeHoist() {
//   a = 10;
//   let b = 50;
// }
// codeHoist();
// console.log(a);
// console.log(b);

//39.Find out the name of players who plays basketball ?
// let students = [
//   { id: "001", name: "Anish", sports: "Cricket" },
//   { id: "002", name: "Smriti", sports: "Basketball" },
//   { id: "003", name: "Rahul", sports: "Cricket" },
//   { id: "004", name: "Bakul", sports: "Basketball" },
//   { id: "005", name: "Nikita", sports: "Hockey" }
// ]

// const output = students.filter((item) =>
// {
//     return item.sports === "Basketball"
// })

// console.log(output);
//40.Transform array of string into object using reduce()
// var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// const output = pets.reduce((acc, currValue) =>
// {
//     if(!acc[currValue])
//     {
//         acc[currValue] = 1;
//     }
//     else{
//         acc[currValue]++;
//     }
//     return acc;
// },{});

// console.log(output);