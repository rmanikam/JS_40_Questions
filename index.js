//  let array = [10, 2, 5, 12, 7];
//  for(var i = 0; i <= array.length / 2; i = i+ 2)
//  {
//    let temp = array[i];
//    array[i] = array[i + 1];
//    array[i + 1] = temp;
//  }

// console.log(array);

// console.log(array);

// let array = [4, 10, 5, 7, 6, 18];

//  array.fill(45, 1, 4);

// console.log(array);

// let array = [4, 8, 7, 13, 12];

// let ans = array.reduce((accum, currentValue, index) =>
// {
//   return accum + currentValue;
// },1);

// console.log(ans);

// let array = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];

// let output = array.filter((item, index) =>
// {
//    return array.indexOf(item) === index
// i was not able to write syntax correctly
// note array.indexOf(item) gives index and not value
// })

//console.log(output);
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

// let output = arr.reduce ((acc, currentValue) =>
// {
//     const index = acc.findIndex((item) =>
//     {
//       return item.employeeName === currentValue.employeeName
//     })
//         if(index === -1)
//         {
//             acc.push({employeeName: currentValue.employeeName,
//                        occurences: 1
//                      })

//         }
//         else{
//             acc[index].occurences++
//         }
//         return acc;
// },[])

//  console.log(output);

// function arr2obj(arr) {
// Create an empty object
//   let obj = {};

//   arr.forEach((v) => {
// Extract the key and the value
//  let key = v[0];
//  let value = v[1];
//  console.log(key);
//  console.log(value);

// Add the key and value to
// the object
//     obj[key] = value;
//     console.log(obj[key])
//   });

// console.log(obj);

// Return the object
//   return obj;
// }

//

// let arr = [
//   ["John", 12],
//   ["Jack", 13],
//   ["Matt", 14],
//   ["Maxx", 15],
// ];
// let temp = arr[0];

// arr[0] = arr[1];

// arr[1] = temp;

// let obj = arr.reduce((acc, currentValue) => {
//   let key = currentValue[0];
//   let value = currentValue[1];
//   acc[key] = value;
//   return acc;
// }, {});
// console.log(obj);

// How to remove falsy values from an array in JavaScript

// logic here is all the falsy values wont go inside if condition.
// ist way(how i did it)
// let arr = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];

//   const result = arr.filter((value, index) =>
//   {
//    if(value !== 0 || value !== undefined || value !== "" || value !== NaN || value !== false)
//    {
//       return value;
//    }
//   })

// console.log(result);

// let arr = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];

// const result = arr.filter((value) =>
// {
//    if(value)
//    {
//       return value;
//    }

// })
// console.log(result);

// let arr = [93, 17, 56, 91, 98, 33, 9, 38, 55, 78, 29, 81, 60];

// arr = arr.sort();
// console.log(arr);
// let n = window.prompt("Enter value of n");
// let output = arr.slice(-n);
// console.log(output);

// var largArr = new Array();
// var arr = new Array(93, 17, 56, 91, 98, 33, 9, 38, 55, 78, 29, 81, 60);

// findLargest3();

// function findLargest3() {
//   arr.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));
//    console.log(arr)
//   console.log(arr[0]);
//   console.log(arr[1]);
//   console.log(arr[2]);

//   console.log(arr.slice(0, 3));
// }

// const arr1 = [10, 20, 30, 40, 50];
// const arr2 = [10, 20, 34, 32, 11];

// const newArray = arr2.map((item, index) =>
// {
//    if(!arr1.includes(item))
//    {
//       arr1.push(item);
//    }
//    return arr1;
// })

// console.log(newArray[0]);

// const arr1 = [10, 20, 30, 40, 50];
// const arr2 = [10, 20, 34, 32, 11];
// let newArray = [...arr1,...arr2]
// console.log(newArray);
// newArray = newArray.filter((res,b) =>
// {
// console.log(res);
// console.log(b);
// console.log(newArray.indexOf(res));
// newArray.indexOf((res) === b)
// })

// console.log(newArray);

// const arr = [1, 2, 3, 4, 5];

// const output = arr.splice(0, 1);

// console.log(output);
// const output1 = arr.splice(4, 0, 6);

// console.log(arr);

//11.How to remove n elements from the end of a given array in JavaScript
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let n = window.prompt("Enter value of n");
// let y = arr.splice(-n);
// console.log(y);
// console.log(arr);

//12. How to create an object from two arrays in JavaScript
// let a = [1, 2, 3, 4];
// let b = ["ram", "shyam", "sita", "gita"];

// let obj1 = a.reduce((acc, currValue, index) =>
// {
//    acc[a[index]] = b[index];
//    return acc;
// },{})

// console.log(obj1);

// let arr1 = [1, 2, 3, 4, 5, 77, 876, 453];
// let arr2 = [1, 2, 45, 4, 231, 453];

// let arr3 = arr1.filter((item) =>
// {
//    return arr2.includes(item);
// })

// console.log(arr3);

// 14.How to truncate an array in JavaScript
// const num = [1, 2, 3, 4, 5, 6];
// num.splice(4);
// console.log(num);

// 15.How to convert a number into array in JavaScript
//  var myInt = 235345;
// let output = myInt.toString().split("");
// console.log(output);
// output = output.map((res) =>
// {
//   return parseInt(res); // parseInt converts string back to number
// })

// console.log(output);

//16.How to print unique elements from two unsorted arrays using JavaScript
//

//sample output
// [58,95,20,51,33,80]

// var arr3 = arr1.concat(arr2);
// var res;
// arr3 = arr3.filter((item, index) =>
// {
//    console.log(item);
//    console.log(index);
//    return arr3.indexOf((res) === index);
// })

// console.log(arr3); // note this is wrong

// Create an empty array that would store the unique elements from the two arrays.
// Iterate over all elements of array1 using a loop.
// Set the initial flag value as 0 for each iteration.
// In that loop Iterate over all elements of array2 using another loop and check if array1[element] is present in array2.
// If present, remove the element from array2 using splice() method and set the flag to 1.
// If array2 has been fully traversed for array1[element] and the flag is still equal to 0, add the array1[element] to the unique elements array.
// Repeat steps 4-6 for each element in array1.
// Finally, push array2 to the unique elements array since all duplicate elements have been removed from array2

//16.How to print unique elements from two unsorted arrays using JavaScript
// var arr1 = [54, 71, 58, 95, 20];
// var arr2 = [71, 51, 54, 33, 80];
// let newArray = [...arr1,...arr2]
// newArray =  newArray.filter((res) => {
//console.log(!(arr1.includes(res)));
//console.log(!arr2.includes(res));
//console.log(!(arr1.includes(res) && arr2.includes(res)));
//   return !(arr1.includes(res) && arr2.includes(res))
// } )
// console.log(newArray);

// let arr1 = [1, 2, 3, 4, 5, 77, 876, 453];
// let arr2 = [1, 2, 45, 4, 231, 453];
// let result = [];

// arr1.forEach((val) => arr2.includes(val) && result.push(val));

// console.log(result);

//17. How to search the max value of an attribute in an array object
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

// var c = 0;
// const ans = arr.map((item) =>
// {
//    if(c < item.a && item.a > item.b)
//    {
//       c = item.a;
//       // console.log(c);
//    }
//    else if(c < item.b && item.b > item.a)
//    {
//       c = item.b;
//       // console.log(c);
//    }
//    return c;
// })

// console.log(ans[arr.length -1]);

// 2nd way

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

// const ans = arr.reduce((acc, currValue) => {
//   if (acc < currValue.a && currValue.a > currValue.b) {
//     acc = currValue.a;
//     // console.log(c);
//   } else if (acc < currValue.b && currValue.b > currValue.a) {
//     acc = currValue.b;
//     // console.log(c);
//   }
//   return acc;
// },0);

// console.log(ans);

//18.How to get a list of associative array keys in JavaScript
// var arr = {
//   Newton: "Gravity",
//   Albert: "Energy",
//   Edison: "Bulb",
//   Tesla: "AC",
// };

// console.log(Object.keys(arr));

// for(var key in arr)
// {
//    if(arr.hasOwnProperty(key))
//    {
//       console.log(key)
//    }
// }

// var arr = {
//   Newton: "Gravity",
//   Albert: "Energy",
//   Edison: "Bulb",
//   Tesla: "AC",
// };

// for(var i in arr)
// {
//    console.log(i);
// }

//19. Convert comma separated string to array using JavaScript
// let originalString = "One, Two, Three, Four, Five";
// originalString = originalString.split(",")
// console.log(originalString);

// 20.Extract unique objects by attribute from array of objects.
// let arr = [
//   { name: "Geeks", id: 10 },
//   { name: "GeeksForGeeks", id: 10 },
//   { name: "Geeks", id: 20 },
//   { name: "Geeks", id: 10 },
// ];
//sample output
// [ { name: 'Geeks', id: 10 },
//   { name: 'GeeksForGeeks', id: 10 } ]

//  const ans = arr.reduce((acc, curr) =>
// {
//    if(acc.filter(item => (acc.name === item.name).length === 0))
//    {
//       acc.push(curr);
//    }
//    return acc;
// },[])

// console.log(ans);

// let arr = [
//   { name: "Geeks", id: 10 },
//   { name: "GeeksForGeeks", id: 10 },
//   { name: "Geeks", id: 20 },
//   { name: "Geeks", id: 10 },
// ];

// arr = arr.reduce((a, b) => {
//   console.log(a)
//   if (a.filter((res) => res.name === b.name).length === 0) {
    // note console.log(res) will print { name: "Geeks", id: 10 } first time
    // next time it will print { name: "Geeks", id: 10 },   { name: "GeeksForGeeks", id: 10 },
    // next time it will print { name: "Geeks", id: 10 },   { name: "GeeksForGeeks", id: 10 }, { name: "Geeks", id: 20 },

//     a.push(b);
//   }
//   return a;
// }, []);
// console.log(arr);

//21. Write a JavaScript function to get the number of occurrences of 
//each letter in specified string
// let str = "thequickbrownfoxjumpsoverthelazydog";

// let arr = str.split("");

// const arr1 = arr.reduce((acc, currentValue, index) =>
// {
//   if(!acc[currentValue])
//   {
//     acc[currentValue] = 1
//   }
//   else{
//     acc[currentValue]++
//   }
//   return acc;
// }, {});

// console.log(arr1);

// 22.Write a function get the apperance of string2 in string1
// let str = "thequickbrownfoxjumpsoverthelazydog";
// let str1 = "o";

// const arr = str.split("");


// let count = 0;
// let y = arr.filter((item) =>
// {
  
//   if(item.includes(str1))
//   {
//     count++;
//     return count;
//   }
  
  
// })

// console.log(y.length);


// let str = "thequickbrownfoxjumpsoverthelazydog";
// str = str.split('')
// let str1 = "o";
// debugger
// const res = str.filter( res => res == str1).length
// debugger
// console.log(res);
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


// let ans = arrayNew.filter((item) =>
// {
//  console.log(item);
//   item.filter((item1) =>
//   {
//     console.log(item1);
//     item1[0].info.filter((item2) =>
//     {
//      console.log(item2);
//       item2.CompanyDetails.filter((item3) =>
//       {
//         console.log(item3);
        
//         console.log({place: item3.place});
        
//       })
//     })
//   })
  
// })

// 2nd way
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

// for(i of arrayNew){
//   for(j of i){
//     for(k of j){
//       for(l of k.info){
//         for(m of l.CompanyDetails){
//           console.log({place:m.place});
//         }
//       }
      
//     }
//   }
// }

// 24. write a function which help us to get the two index 
//of the target value which will be passed in function when
// we will any to number from array.
// let targetArray = [10, 20, 30, 40, 50, 34, 32, 11];
//sample  output
// if target value is 90 the we will get the index as:
// {index1:40, index2:50}

// let value = 90;
// let output = [];
// for(var i = 0; i < targetArray.length; i++)
// {
//   for(var j = i + 1; j < targetArray.length; j++)
//   {
//     if(targetArray[i] + targetArray[j] === value)
//     {
//        output.push({index1: targetArray[i], index2: targetArray[j]})
       
//     }
//   }
// }

// console.log(output);


//25. Reverse a given string using JavaScript
// var str = "Full Stack Tutorials";

// var arr = str.split("").reverse().join("");

// console.log(arr);

//30. write a function to get the factorial of n number

// var n = window.prompt("Enter value of n");
// let ans = 1;
// for(var i = 1; i <= n; i++)
// {
//   ans = ans * i;
// }
//  console.log(ans);

//31. prepare object form array.
//sample input
// const parentArray = [
//   [
//     {
//       key: 123,
//       value: "India",
//     },
//     {
//       key: 124,
//       value: "USA",
//     },
//     {
//       key: 125,
//       value: "Japan",
//     },
//     {
//       key: 126,
//       value: "Denmark",
//     },
//     {
//       key: 127,
//       value: "Austria",
//     },
//   ],
//   [
//     {
//       key: 124,
//       value: "Kenya",
//     },
//     {
//       key: 126,
//       value: "UK",
//     },
//     {
//       key: 123,
//       value: "Germany",
//     },
//     {
//       key: 127,
//       value: "Spain",
//     },
//     {
//       key: 125,
//       value: "Portugal",
//     },
//   ],
// ];


// const ans = parentArray.reduce((acc, currentValue, index) =>
// {
//   console.log(acc);
//   console.log(currentValue);
//    currentValue.map((res) =>
//    {
//     console.log(res);
//     console.log(acc[res.key]);
//       if(!acc[res.key])
//       {
//         acc[res.key] = [res.value]
//       }
//       else
//       {
//         acc[res.key].push(res.value)
//       }
//       return acc;
//    },{})
  
//   return acc;
// }, {})

// console.log(ans);
//sample output
// {
//    '123': [ 'India', 'Germany' ],
//    '124': [ 'USA', 'Kenya' ],
//    '125': [ 'Japan', 'Portugal' ],
//    '126': [ 'Denmark', 'UK' ],
//    '127': [ 'Austria', 'Spain' ]
// }














//32.How to print nested array ?
//Input : [1, 5, 8, [9, 10, 24, 20, [39, 48], 89], 105, 99]
// Output : 1, 5, 8, 9, 10, 24, 20, 39, 48, 89, 105, 99

// let arr = [1, 5, 8, [9, 10, 24, 20, [39, 48], 89], 105, 99];

// arr.flat(2);
// console.log(arr);

// console.log("a");
// function login(email, password) {
//   setTimeout(() => {
//     return { usertoken: "randomId" };
//   }, 3000);
// }
// const token = login("abc@gmail.com", "1234");
// console.log(token);
// console.log("c");

//35. This is object how can we destructure

// const employee = {
//   firstName: "Marko",
//   lastName: "Polo",
//   position: "Software Developer",
//   yearHired: 2017,
// };


// const {firstName, lastName, position, yearHired} = employee;

// console.log(firstName);
// console.log(lastName);
// console.log(position);
// console.log(yearHired);

// let arr = [1, 3, 5, 7, 9, 10];

// let arr1 = arr.reverse();
// console.log(arr1);

// arr1  = arr1.map((item) =>
// {
//   return item * 2;
// })

// console.log(arr1);

// console.log(x);
// var x = 5;
// console.log(x);

// output is undefined
// 5



// console.log(x);
// let x = 5;
// console.log(x);


// output is Uncaught ReferenceError: Cannot access 'x' before initialization

// function codeHoist() {
//   a = 10;
//   let b = 50;
// }
// codeHoist();
// console.log(a);
// console.log(b);

// 10
// Uncaught ReferenceError: b is not defined

// let students = [
//   { id: "001", name: "Anish", sports: "Cricket" },
//   { id: "002", name: "Smriti", sports: "Basketball" },
//   { id: "003", name: "Rahul", sports: "Cricket" },
//   { id: "004", name: "Bakul", sports: "Basketball" },
//   { id: "005", name: "Nikita", sports: "Hockey" },
// ];

// let output = students.filter((value) =>
// {
//   return value.sports === "Basketball"
// })

// console.log(output);

//40.Transform array of string into object using reduce()
// var pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

// const output = pets.reduce((acc, currValue, index) =>
// {
//   acc[index] = currValue
//   return acc;
// },{})

// console.log(output);