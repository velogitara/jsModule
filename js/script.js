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

// function includes(array, value) {
//     // Change code below this line
//     for (const number of array) {
//         if (number === value) {
//             return true;
//         }
//         // Change code above this line
//     }
//     return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(
//     includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
// );
// console.log(
//     includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
// );

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }
// }
// console.log(keys, values);
// console.log(apartment);

// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         }
//         console.log(propCount);
//     }
//     // Change code above this line
//     return propCount;
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     values.push(apartment[key]);
// }

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line
//     const values = Object.values(salaries);
//     for (let value of values) {
//         totalSalary += value;
//     }

//     // Change code above this line
//     return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     // Change code below this line
//     for (const { name, price } of products) {
//         if (name === productName) {
//             return price;
//         }
//     }
//     return null;

//     // Change code above this line
// }

// function getAllPropValues(propName) {
//     // Change code below this line
//     let newArrayKeyName = [];
//     for (const product of products) {
//         if (Object.keys(product).includes(propName)) {
//             newArrayKeyName.push(product[propName]);
//         }

//     }
//     return newArrayKeyName;
//     // Change code above this line
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("category"));

// function add(...args) {
// let sum = 0
//   for (const arg of args) {
//     sum += arg
//   }
//   return sum
// }

// // Change code below this line
// function addOverNum(i, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > i) {
//     total += arg;
//        }
//   }

//   return total;
//   // Change code above this line
// }

// Change code below this line
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line

//   for (const element of args) {
//     if (array.includes(element)) {
//       matches.push(element);
//     }
//   }

//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//         // Change code below this line
//         this.books.splice(this.books.indexOf(oldName), 1, newName);
//         // Change code above this line
//         return this.books;
//     },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("Dungeon chronicles", "Haze"));

// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         const { name: newPotionName } = newPotion;
//         for (const { name } of this.potions) {
//             if (name === newPotionName) {
//                 return `Error! Potion ${newPotionName} is already in your inventory!`;
//             }
//         }
//         this.potions.push(newPotion);
//         return this.potions;
//         // return (this.potions = [...this.potions, newPotion]);
//     },
//     removePotion(potionName) {
//         for (let i = 0; i < this.potions.length; i += 1) {
//             const { name } = this.potions[i];
//             if (potionName === name) {
//                 this.potions.splice(i, 1);
//                 return this.potions;
//             }
//         }

//         return `Potion ${potionName} is not in inventory!`;
//     },
//     updatePotionName(oldName, newName) {
//         const { potions } = this;

//         for (const potion of potions) {
//             if (potion.name === oldName) {
//                 console.log("found matching name", potion.name);
//                 potion.name = newName;
//                 console.log(this.potions);
//                 return this.potions;
//             }
//         }

//         return `Potion ${oldName} is not in inventory!`;
//     },
//     // Change code above this line
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// // console.log(atTheOldToad.removePotion("Dragon breath"));
// // console.log(atTheOldToad.getPotions());
// console.log(
//     atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
// );
// console.log(
//     atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
// );

// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(allTags);

// const tagStats = allTags.reduce((acc, tag) => {
//     console.log(acc);
//     // if (acc[tag]) {
//     //     acc[tag] += 1;
//     //     return acc;
//     // }
//     // acc[tag] = 1;
//     // return acc;
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1
//     }
// }, {});

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza));

// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, onSuccess, onError) {
//         const foundPizza = this.pizzas.find(pizza => pizza === pizzaName );
//         if (foundPizza) {
//             return onSuccess(pizzaName)
//         }
//         return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//     },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//     return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line

//     // for (let i = 0; i < orderedItems.length; i += 1) {
//     //     totalPrice += orderedItems[i];
//     // }
//     orderedItems.forEach((el, i, array) => (totalPrice += el));

//     // Change code above this line
//     return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line

//     // for (let i = 0; i < firstArray.length; i += 1) {
//     //     if (secondArray.includes(firstArray[i])) {
//     //         commonElements.push(firstArray[i]);
//     //     }
//     // }
//     firstArray.forEach((el) => {
//          if (secondArray.includes(el)) {
//              commonElements.push(el);
//          }
//     })

//     return commonElements;
//     // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// function changeEven(numbers, value) {
//     // Change code below this line
//     const newArray = [];
//     numbers.forEach((el) => {
//         if (el % 2 === 0) {
//             newArray.push(el + value)
//         }else (newArray.push(el))
//     });
// return newArray;

// }
// // Change code above this line

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));


const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets;