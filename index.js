// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

/* Psuedocode
Loop through the array
Compare current value to all the other values in the array

*/
let arr = [33, 21, 14, 3, 21, 21, 334, 579, 34, 565, 4345, 3987, 3];
let cleanArr = [];
let counter = 0;

function removeDupe(array) {
  for (let i = 0; i < array.length; i++) {
    if (cleanArr.indexOf(array[i]) == -1) {
      cleanArr.push(array[i]);
    }
  }
  return cleanArr;
}

console.log(removeDupe(arr));
