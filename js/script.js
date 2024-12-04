"use strict";

// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(firstElement);
// console.log(secondElement)
// console.log(lastElement)

// fruits.splice(1, 1, "peach");
// fruits.splice(3, 1, "banana");

// console.log(fruits);
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

// function getExtremeElements(array) {
//     // Change code below this line

//     array.splice(1, array.length - 2);
//     return array;
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// function splitMessage(message, delimiter) {
//     let words;
//     // Change code below this line
//     words = message.split(delimiter);
//     // Change code above this line
//     return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//     const words =
//         message.split(" ").filter((word) => word !== "").length * pricePerWord;
//     return words;
//     // Change code above this line
// }

// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(fruits.length - 3);

// console.log(fruits);
// console.log(firstTwoEls);
// console.log(nonExtremeEls)
// console.log(lastThreeEls);

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     const connectedArray = firstArray.concat(secondArray);
//   //   if (connectedArray.length > maxLength) {
//   //       return connectedArray.slice(0, maxLength);
//   //   }
//   // return connectedArray;

//   return connectedArray.length > maxLength ? connectedArray.slice(0, maxLength) : connectedArray
//     // Change code above this line
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//     // Change this line
//     console.log(i);
// }

// function calculateTotal(number) {
//     let totalNumber = 0;
//     for (let i = 1; i <= number; i += 1) {
//         totalNumber += i;
//     }
//     return totalNumber;
// }

// console.log(calculateTotal(18));

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//     const fruit = fruits[i];
//     console.log(fruit);
// }

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//     for (const element of order) {
//       // console.log(element);
//       total += element
//     }
//     // Change code above this line
//     return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function findLongestWord(string) {
//     // Change code below this line
//     let longestWord = "";
//     for (const word of string.split(" ")) {
//       if (word.length >= longestWord.length) {
//         longestWord = word;
//       }
//     }
//   return longestWord;
//     // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line
//     for (let i = min; i <= max; i += 1) {
//       numbers.push(i);
//     }
//     // Change code above this line
//     return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

// function filterArray(numbers, value) {
//     // Change code below this line
//     const newArray = [];
//     // for (let i = 0; i < numbers.length; i += 1) {
//     //     if (numbers[i] > value) {
//     //         newArray.push(numbers[i]);
//     //     }
//   // }

//   for (const element of numbers) {
//     if (element > value) {
//           newArray.push(element);
//     }
//   }
//     return newArray;

//     // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// function getCommonElements(array1, array2) {
//   // Change code below this line
//       const newArray = [];
// for (let i = 0; i < array1.length; i +=1) {
//   const element = array1[i];
//   if (array2.includes(element)) {
//     newArray.push(element);
//   }
// }

// for (const element of array1) {
//   console.log(element)
//   if (array2.includes(element)) {
//     newArray.push(element);
//   }
// }
// return newArray
// Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const newArray = []
// for (let i = start; i <= end; i += 1) {
//   if (i % 2 === 0) {
//     newArray.push(i)
//   }
// }
// return newArray

//     // Change code above this line
// }

// console.log(getEvenNumbers(2, 5) )
// console.log(getEvenNumbers(3, 11))
// console.log(getEvenNumbers(6, 12))
// console.log(getEvenNumbers(7, 7))
// console.log(getEvenNumbers(8, 8))

function includes(array, value) {
    // Change code below this line
    for (const number of array) {
        if (number === value) {
            return true;
        }
        // Change code above this line
    }
    return false;
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(
    includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
);
console.log(
    includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
);
