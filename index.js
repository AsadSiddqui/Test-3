// 1. Declare an empty array using JS literal notation to store
// student names in future.

// var studentName = [];
// console.log("studentName");

// 2. Declare an empty array using JS object notation to store
// student names in future.

// var newArray = new Array();
// console.log("newArray", newArray);

// 3. Declare and initialize a strings array.

// var arrStrn = ["asad", "Jawad"];

// 4. Declare and initialize a numbers array.

// var arrNum = [1, 2, 3];

// 5. Declare and initialize a boolean array.

// var booleanArr = [true];

// 6. Declare and initialize a mixed array.

// var mixArr = ["asad", 1];

// 7. Declare and Initialize an array and store available mobile
// networks in Pakistan.

// var mob = ["Jazz", "Ufone", "Telenor", "Zong"];

// 8. Declare and Initialize an array and store available education
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
// M. Phil., PhD). Show the listed qualifications in your browser
// like:

// var edu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PHIL", "PhD"];
// edu.forEach(function (element, index) {
//   document.write(`${index + 1}  )  ${element}  <br>`);
// });

// 9. Declare and initialize an empty array to store top movies of
// 2015. Add movies one by one in an array. Display the elements
// & length of array in your browser. (Use array’s length method)

// var topMovie = [
//   "Hot Girls Wanted",
//   "Drishyam",
//   "The Boy Next Door",
//   "Talvar",
//   "Detective Byomkesh Bakshy!",
// ];
// topMovie.forEach(function (element, index) {
//   document.write(`${index + 1} ) ${element}<br> `);
// });
// document.write("Lenght of the array " + topMovie.length);

// 10. Declare and Initialize an array with your favorite cars. Show
// a. First index of the array
// b. Car at first index of the array
// c.Last index of the array
// d. Car at last index of the array

// var arr = ["Audi", "Volve", "ford", "Lamborghini"];
// arr.forEach(function (element, array) {});
// document.write(
//   "First index of the array " +
//     `${arr.length - 4} <br>
//     Car at first index of the array ${arr.element} <br>
//     Last index of the array  ${arr.length - 1} <br>
//     Car at last index of the array ${arr.element}
//     `
// );

// document.write(" Car at first index of the array" + `${arr.element}<br>`);

// var arr = ["Audi", "Volve", "ford", "Lamborghini"];
// document.write(
//   "First index of the array: " +
//     `${arr.length - 4} <br>
//     Car at first index of the array: ${arr[2]} <br>
//     Last index of the array:  ${arr.length - 1} <br>
//     Car at last index of the array: ${arr[3]}
//     `
// );

// 11. Write a program to store 3 student names in an array. Take
// another array to store score of these three students. Assume
// that total marks are 500 for each student, display the scores &
// percentages of students like:

// var student = ["Michael", "John", "Tony"];
// var score = [320, 230, 480];
// var totalMarks = 500;
// document.write(
//   `Score of ${student[0]}: ${score[0]} Percentage ${
//     (score[0] / totalMarks) * 100
//   }%<br>`
// );
// document.write(
//   `Score of ${student[1]}: ${score[1]} Percentage ${
//     (score[1] / totalMarks) * 100
//   }% <br>`
// );
// document.write(
//   `Score of ${student[2]}: ${score[2]} Percentage ${
//     (score[2] / totalMarks) * 100
//   }%<br>`
// // );

// var arr = ["Audi", "Volve", "ford", "Lamborghini"];
// document.write(
//   "First index of the array: " +
//     `${arr.indexOf("Audi")} <br>
//     Car at first index of the array: ${arr.indexOf(0)} <br>
//     Last index of the array:  ${arr.lastIndexOf("Lamborghini")} <br>
//     Car at last index of the array: ${arr.lastIndexOf(3)}`
// );

// 12. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end &
// add that color to the end of the array. Display the updated
// array in your browser.
// c. Add two more color to the beginning of the array. Display
// the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color &
// color name. Then add the color to desired position/index.
// . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// Initialize an array with color names. Display the array
// elements in your browser.
// const color = ["red", "white", "black", "purple"];
// document.write(`${color}`);

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// const Int = prompt("Enter Color Name");
// const color = ["red", "white", "black"];
// color.unshift(Int);
// document.write(`${color}`);

// b. Ask the user what color he/she wants to add to the end &
// add that color to the end of the array. Display the updated
// array in your browser.

// const Int = prompt("Enter Color Name");
// const color = ["red", "white", "black"];
// color.push(Int);
// document.write(`${color}`);

// c. Add two more color to the beginning of the array. Display
// the updated array in your browser.

// const int = prompt("Enter 1st Color Name");
// const int1 = prompt("Enter 2nd Color Name");
// const color = ["green", "blue", "black"];
// color.unshift(int1);
// color.unshift(int);
// document.write(`${color}`);

// d. Delete the first color in the array. Display the updated
// array in your browser.

// const del = prompt("Enter Frist  Color");
// const color = ["green", "blue", "white"];
// const newColor = color.shift(del);
// document.write(`${color}`);

// document.write(`"green", "blue", "white"`);

// const upDate = prompt("Enter New Color");
// const color = ["green", "blue", "white"];
// const newColor = color.splice(color.length, 0, upDate);
// document.write(`${color}`);
// console.log(color);

// e. Delete the last color in the array. Display the updated
// array in your browser.
// const delLast = prompt("Enter Last Name");
// const color = ["green", "blue", "white"];
// const newColor = color.pop();
// document.write(`${color}`);

// const upDate = prompt("Enter New Color");
// const color = ["green", "blue", "white"];
// const newColor = color.splice(color.length, 0, upDate);
// document.write(`${color}`);

// f. Ask the user at which index he/she wants to add a color &
// color name. Then add the color to desired position/index.
// . Display the updated array in your browser.

// const indNum = prompt("Enter Index Number");
// const colorName = prompt("Enter Color Name");
// let color = ["green", "blue", "white"];
// color[indNum] = colorName;
// document.write(`${color}`);

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

// const indNum = prompt("Enter Index Number");
// const quatity = prompt("Enter quatity Number");
// const color = ["green", "blue", "white", "black", "purple", "pink"];
// document.write(`${color}` + "<br>");
// const newColor = color.splice(indNum, quatity);
// document.write(`${color}`);

// 13. Write a program to store student scores in an array & sort
// the array in ascending order using Array’s sort method.

// const score = [320, 230, 480, 120];
// score.sort();
// document.write(`Ordered Score of Students: ${score}`);

// 14. Write a program to sort the below mentioned array:
// var fruits = [“strawberry”, “apple”, “orange”, “banana”];

// var fruits = ["strawberry", "apple", "orange", "banana"];
// fruits.sort();
// document.write(`Ordered Fruits list: ${fruits}`);

// 15. Write a program to initialize an array with city names. Copy
// 3 array elements from cities array to selectedCities array.

// var city = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write(`${city}<br>`);
// var shCity = city.splice(2, 2);
// document.write(`Selected cities list <br> ${shCity}`);

// 16. Write a program to create a single string from the below
// mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This", "is", "my", "cat"];
// console.log(arr);
// console.log(arr.join(" "));

// let num = [1, 2, 3, 4, 5];
// // let reverseNum = num.reverse()
// console.log(reverseNum);
// console.log(num);

// var item = ["keyboard", "mouse", "printer", "monitor"];
// document.write(
//   `Device : <br> ${item} <br> Out : <br> ${item[0]} <br> Out : <br> ${item[1]} <br> Out : <br> ${item[2]} <br> Out : <br> ${item[3]}`
// );

// var item = ["keyboard", "mouse", "printer", "monitor"];
// var revItem = item.reverse();
// document.write(
//   `Device : <br> ${item} <br><br> Out : <br> ${item[0]} <br> Out : <br> ${item[1]} <br> Out : <br> ${item[2]} <br> Out : <br> ${item[3]}`
// );

// 19. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array. Display
// the following dropdown/select menu in your browser using
// document.write() method:

// var elemt = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write(`<select>`);
// for (let index = 0; index < elemt.length; index++) {
//   document.write(`<option>${elemt[index]}</option>`);
// }
// document.write(`</select>`);

// 20. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var elemt = [[], [], []];

// 21. Declare and initialize a multidimensional array representing
// the following matrix:

// for (index = 0; index < elemt.length; index++) {

//   for (let i = 0; i < elemt.length; i++) {
//     const element = elemt[index][i];
//     document.write(`${elemt[index][i]} <br>`);
//   }
// }

// var elemt = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];
// for (let index = 0; index < elemt.length; index++) {
//   for (let i = 0; i < elemt[index].length; i++) {
//     document.write(`${elemt[index][i]} `);
//   }
//   document.write(" <br>");
// }
