// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;


//  if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log('Бронзовый партнёр, скидка 2%');
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log('Серебряный партнёр, скидка 5%');
//     discount = 0.05;

// } else if(totalSpent >= 5000) {
//     console.log('Золотой партнёр, скидка 10%');
//     discount = 0.1;
//  } else {
//      console.log('не партнёр, скидка 0%');
// }

// payment -= payment * discount;


// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100} %`,
// );

// totalSpent += payment;

// console.log(`Общая сумма потраченного в магазине: ${totalSpent}`);


// function makeMessage (name, price) {
//   // Change code below this line
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// };

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line

// const totalPrice = (orderedQuantity * pricePerDroid + deliveryFee)
// message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
//   // Change code above this line
//     console.log(message)
//   return message;
// }

// makeOrderMessage(4, 300, 100);



// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
// const totalPrice = pricePerDroid * orderedQuantity;
// if(totalPrice > customerCredits){
//   message = 'Insufficient funds!';
// } else {
//   message = `You ordered ${orderedQuantity} droids, you have ${customerCredits-totalPrice} credits left`
// }
//   // Change code above this line
//   return message;

// }
// console.log(makeTransaction(3000, 5, 23000));

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));



// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// if(ordered === 0){
//   message = 'There are no products in the order!'
// } else if(available < ordered){
//   message = 'Your order is too large, there are not enough items in stock!'
// } else{
//   message = 'The order is accepted, our manager will contact you'
// }
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50))
// console.log(checkStorage(100, 130))
// console.log(checkStorage(100, 0))
// console.log(checkStorage(200, 300))





// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   // if (password === null) {
//   //   message = "Canceled by user!";
//   // } else if (password === ADMIN_PASSWORD) {
//   //   message = "Welcome!";
//   // } else {
//   //   message = "Access denied, wrong password!";
//   // }
//   switch(password){
//     case ADMIN_PASSWORD:
//     message = "Welcome!";
//     break;

//     case null:
//     message = "Canceled by user!";
//     break;

//   default:
//   message = "Access denied, wrong password!";
//   }

//   // Change code above this line
//   return message;
// }

// // console.log(checkPassword(jqueryismyjam));
// console.log(checkPassword("jqueryismyjam"));


// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   // let price;
//   switch (country) {
//     case "China":
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits` ;
//       break;

//     case "Chile":
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Australia":
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Jamaica":
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     default:
//      message = "Sorry, there is no delivery to your country"
//   }

//   // Change code above this line
//   return message;
// }
// console.log(getShippingCost("China"))
// console.log(getShippingCost("Chile"))
// console.log(getShippingCost("Australia"))
// console.log(getShippingCost("Jamaica"))
//  console.log(getShippingCost("Ukraine"))

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length -2];

// // Change code above this line

// console.log(lastElement)


// function showName() {
//   console.log('Вася')
// }

// setTimeout(showName, 2);
// console.log('Коля')

// function showMessage() {
//   console.log('sms');
// }




// // Setup
// function abTest(a, b) {
//   // Only change code below this line
//   if (a <= 0 || b <= 0) {
//   return undefined;
// }




//   // Only change code above this line

//   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }

// // Change values below to test your code
// abTest();


// const numbers = [51, 18, 20, 35, 100, 69, 12563]
// let largestNumber = numbers[0]


// for (const number of numbers) {
//   if (number > largestNumber) {
//     largestNumber = number;
//   }
// }
// console.log('largest number:', largestNumber)

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }




// const title = 'Top 10 benefits of React framework';
// const normalizedTitle = title.toLowerCase();

// const massiveTitle = normalizedTitle.split(' ')
// const joinTitle = massiveTitle.join('-')



// // console.log(normalizedTitle)
// // console.log(massiveTitle)
// // console.log('должно получиться:', joinTitle)

// const slug1 = title.toLowerCase().split(' ').join('-')

// console.log(slug1)



// const array1 = [5, 100, 2500];
// const array2 = [5, 10, 25, 45, 25];
// let total = 0;

// const allArray = array1.concat(array2)

// for (const number of allArray) {
//   total += number
// }

// // for (let i = 0; i < allArray.length; i += 1){
// //   total += allArray[i]
// // }
// console.log(allArray.length)
// console.log(allArray)
// console.log(total)






// const add = function (x, y) {
//   console.log(x);
//   console.log(y);

//   const result = x + y;
//   // console.log('x + y =' , result)
//   console.log('Выполняется функция add')

//   return result;
// };

// const r1 = add(225, 5);
// console.log('r1 = ', r1);
// // add(5, 3);
// // add(78, 50);



// const fn = function () {
//   console.log(1);
//   console.log(2);
//   console.log(3);
// }

// console.log(fn());


// const calculateTotalPrice = function (items) {
//   console.log(items)

//   let  total = 0;
//   for (const item of items) {
//     total += item;
// }
//   return total;
// }

// console.log(calculateTotalPrice([1, 2, 6]))
// console.log(calculateTotalPrice([111, 222, 622, 456]))
// console.log(calculateTotalPrice([1454, 2325, 654, 233, 456]))


// function getExtremeElements(array) {
//   // Change code below this line
//   let lastElement = array.length;

//   return [array[0], array[lastElement - 1]];

//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]))
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]))
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]))



// Дополни код функции splitMessage(message, delimeter)
// так, чтобы она возвращала в переменной words результат
// разделения строки message по разделителю delimeter - массив строк.


// Объявлена функция splitMessage(message, delimeter)
// Вызов splitMessage("Mango hurries to the train", " ") возвращает ["Mango", "hurries", "to", "the", "train"]
// Вызов splitMessage("Mango", "") возвращает ["M", "a", "n", "g", "o"]
// Вызов splitMessage("best_for_week", "_") возвращает ["best", "for", "week"]


// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ''));
// console.log(splitMessage("best_for_week", "_"));


// ----------------------- 11 ------------------

// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки,
//   в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord).Эта функция принимает строку,
//   состоящую из слов разделённых только пробелами(параметр message) и цену гравировки
//   одного слова(параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// Объявлена функция calculateEngravingPrice(message, pricePerWord)
// Вызов calculateEngravingPrice("JavaScript is in my blood", 10) возвращает 50
// Вызов calculateEngravingPrice("JavaScript is in my blood", 20) возвращает 100
// Вызов calculateEngravingPrice("Web-development is creative work", 40) возвращает 160
// Вызов calculateEngravingPrice("Web-development is creative work", 20) возвращает 80

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//   let totalPrice = 0;

//   let words;
//   words = message.split(' ').length;
// totalPrice = words * pricePerWord
//   // console.log(words)

//   return totalPrice
//    // Change code above this line
  
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10))
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20))
// console.log(calculateEngravingPrice("Web-development is creative work", 40))
// console.log(calculateEngravingPrice("Web-development is creative work", 20))




// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
// string = array.join(delimeter);


//   // Change code above this line
//   return string;
// }

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"))


// ---------------------------------  13  -------------------------

// Термин slug - это человеко - понятный уникальный идентификатор, который используется
//  в веб - разработке для создания читабельных URL - адесов.

//   Например, вместо того чтобы пользователь увидел в адресной строке mysite.com / posts / 1q8fh74tx,
//   можно сделать slug из названия статьи.В результате адрес получится более приятным для
// восприятия: mysite.com / posts / arrays -for-begginers.

// Внимание
// Slug это всегда строка в нижнем регистре, слова которой разделены тире.

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и
//  возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

// Объявлена функция slugify(title)
// Вызов slugify("Arrays for begпiners") возвращает "arrays-for-begginers"
// Вызов slugify("English for developer") возвращает "english-for-developer"
// Вызов slugify("Ten secrets of JavaScript") возвращает "ten-secrets-of-javascript"
// Вызов slugify("How to become a JUNIOR developer in TWO WEEKS")
// возвращает "how-to-become-a-junior-developer-in-two-weeks"



// function slugify(title) {
//   // Change code below this line
//   let normalizedTitle = title.toLowerCase().split(' ').join('-');
 
 
  
// return normalizedTitle
//   // Change code above this line
// }

// console.log(slugify("Arrays for beginners"))


// ---------------------------------  14 -------------------------

// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2) ;
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(2);

// console.log(firstTwoEls)
// console.log(nonExtremeEls)
// console.log(lastThreeEls)



// ---------------------------------  16 -------------------------


// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания
// нового массива со всеми элементами двух исходных firstArray и secondArray
//   .Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция
// должна вернуть копию массива длиной maxLength элементов.В противном
// случае функция должна вернуть новый массив целиком.


// Объявлена функция makeArray(firstArray, secondArray, maxLength)
// Вызов makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) возвращает ["Mango", "Poly", "Ajax"]
// Вызов makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) возвращает ["Mango", "Poly", "Houston", "Ajax"]
// Вызов makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) возвращает ["Mango", "Ajax", "Chelsea"]
// Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) возвращает ["Earth", "Jupiter"]
// Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) возвращает ["Earth", "Jupiter", "Neptune", "Uranus"]
// Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) возвращает []
// Вызов функции makeArray() со случайными массивами и случайным числом возвращает правильный массив


//   function makeArray(firstArray, secondArray, maxLength) {
//       // Change code below this line
//     let bothArray = firstArray.concat(secondArray);
  

//     for (let i = 0; i < bothArray.length; i += 1) {
//       // console.log(bothArray.slice(0, maxLength))
//       return bothArray.slice(0, maxLength);
//   }
      


//       // Change code above this line
//   }
  
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log( makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 0));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston", "Chelsea", "Poly", "Houston"], 20));

// ---------------------------------  18 -------------------------


// function calculateTotal(number) {
//  // Change code below this line
// let total = 0
// for (let i = 0; i <= number; i += 1) {
//   total += i;
//   // console.log(total);
// }
// return total
//   // Change code above this line
// }


//   console.log(calculateTotal(3))




// function calcBMI(weight, height = 1.8) {
//   if (!weight || !height) return 'не тот параметр'
//   if (typeof weight !== 'number') return 'где цифра'
//   return weight / Math.pow(height, 2);
// }

// // console.log(calcBMI('asd',80))

// function min(a = 0 , b = 0) {
//   if(typeof a !== 'number' || typeof b !== 'number') return "cтрока"
//   if( a === b ) return 'числа равны'
//   return a < b ? a : b;
// }
// // console.log(min(5,8))


// function logItems(items) {
//   if (items,length === 0 ) return "пустой массив"
//   for (let i = 0; i< items.length; i += 1) {
//     console.log(`${i + i} : ${items[i]}`)
    
//   }
  
// }

// const arr = ["item1", "item2", "item3", "item4"]

// console.log(typeof arr);
// console.log(logItems(arr))


// function findLargestNumber(numbers) {
//   if (numbers.length === 0) return "пустой массив";
//   if (numbers.length === 1) return numbers[0];
//  let max = numbers[0];
//   for (const number of numbers) {
//     if (max < number) max = number
//   }
//   return max
// }

// console.log(findLargestNumber([1, 2354, 231635464]));


// function calcAverage() {
//   let sum = 0
//   for (const number of arguments) {
//     sum += number
//   }
//   return sum / arguments.length;
// }

// console.log(calcAverage(1, 5, 4, 8))


// function formatTime(minutes) {
//   if (minutes < 0) return 'это не минуты'
//   const hours = Math.floor(minutes / 60);
//   const minute = minutes % 60
//   return `${hours}:${minute}`;
// }
// console.log(formatTime(45))


// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostregeSQL',]

// function addCourse(name) {
//   if (!name) return "Ошибка"
// courses.push(name)
// }

// addCourse("vue");

// function removeCourse(name) {
//   const index = courses.indexOf(name);
//   if (index !== -1) {
//     courses.splice(index, 1)
//   }else{
//       console.log("такого курса нет")
//     }
//   }




// ---------------------------------  20 -------------------------


// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order
//   - массив чисел, и рассчитывает общую сумму его элементов.
//   Общая сумма элементов должна сохраняться в переменной total,
//   которая возвращается, как результат работы функции.


// Объявлена функция calculateTotalPrice(order)
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
// Вызов функции calculateTotalPrice() со случайным массивом возвращает правильное значение


// function calculateTotalPrice(order = 0) {
//   if (order.length === 0) return 'summary 0';
//   if (order.length === NaN) return 'summary 0';
//      if (order === null) return 'summary 0';

//   // Change code below this line
//   let total = 0;
// for (let i = 0; i < order.length; i += 1) {
//   total += order[i];
  
  
// }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]))
// console.log(calculateTotalPrice())


// ---------------------------------  21 -------------------------

// Напиши функцию findLongestWord(string)
//  которая принимает произвольную строку состоящую
//  только из слов разделённых пробелом(параметр string)
//   и возвращает самое длинное слово в этой строке.


// Объявлена функция findLongestWord(string)
// Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog")
//  возвращает jumped
// Вызов функции findLongestWord("Google do a roll") возвращает Google
// Вызов функции findLongestWord("May the force be with you") возвращает force
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение

// function findLongestWord(string) {
//   // Change code below this line
//   let stringSplit = string.split(' ');
//   let splitted;
//   let longestWord = '';
//   // console.log(stringSplit);
//     for (let i = 0; i < stringSplit.length; i += 1) {
//       splitted = stringSplit[i];
//       if (splitted.length > longestWord.length) {
//         longestWord=splitted
//       }
// }
// return longestWord
  
  
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
//    console.log(findLongestWord("May the force be with you"))
  // Change code above this line





// function findLongestWord(string) {
//   // Change code below this line
// const wordsArr = string.split(' ');

// let longestWord = '';

// for (let word of wordsArr) {
//   if(word.length > longestWord.length) {
//     longestWord = word
//   }
// }

// return longestWord
//   // Change code above this line
// }

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
  
//   // Change code below this line
//   for (let i = min; i <= max; i += 1){
//     numbers.push(i)
  
// }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3))



// Напиши функцию filterArray(numbers, value),
//   которая принимает массив чисел(параметр numbers) и возвращает новый массив,
//   в котором будут только те элементы массива numbers,
//     которые больше чем значение параметра value(число).


// function filterArray(numbers, value) {
//    // Change code below this line
//   const out = []
  
//   for (let i = 0; i < numbers.length; i += 1){
//     const item = numbers[i]

//     if (item > value) {
//       out.push(item);
//     }
//   }

//   return out;

//   // Change code above this line
// }

// // console.log(filterArray([1, 2, 3, 4, 5], 3))
// console.log(filterArray([12, 24, 8, 41, 76], 38))


// function plusOne(numbersArray) {
//   const out = [];
//   // console.log(numbersArray.length)
//   let itemPlus = 0
//   for (let i = 0; i < numbersArray.length; i += 1){
//     itemPlus = numbersArray[i];
    
//     if (itemPlus > numbersArray ) {
//       itemPlus = numbersArray
//     out.push(itemPlus)
//     }
    
//     console.log(itemPlus)
    
//   }
//   return out
// }


// console.log(plusOne([1,2]));




// function findLongestWord(string) {
//   // Change code below this line
//   let stringSplit = string.split(' ');
//   let splitted;
//   let longestWord = '';
//   console.log(stringSplit);
//     for (let i = 0; i < stringSplit.length; i += 1) {
//       splitted = stringSplit[i];
//       if (splitted.length > longestWord.length) {
//         longestWord=splitted
//       }
// }
// return longestWord
  
  
// }


// function findLongestWord(string) {
//   let splitString = string.split(' ');
//   let splitted;
//   let largestWord = '';

//   for (let i = 0; i < splitString.length; i++) {
//     splitted = splitString[i];
//     if (splitted.length > largestWord.length) {
//       largestWord = splitted;
//     }
    
//   }
//   return largestWord
// }



// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))


// ------------------------ 24 ---------------------------------------------------

// Функция checkFruit(fruit) принимает строку с названием фрукта
//   (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

// Объявлена функция checkFruit(fruit)
// Вызов checkFruit("plum") возвращает true
// Вызов checkFruit("mandarin") возвращает false
// Вызов checkFruit("pear") возвращает true
// Вызов checkFruit("Pear") возвращает false
// Вызов checkFruit("apple") возвращает true
// Вызов функции checkFruit() со случайным словом возвращает
//  правильное значение boolean
// В функции использовался метод includes


// ---------------------------------- 24 ---------------------------------

// function checkFruit(fruit) {
  // const fruits = ["apple", "plum", "pear", "orange"];
  // let message = '';
  

  // for (let i = 0; i < fruits.length; i += 1) {
  //   const toCompare = fruits[i];
  //   console.log( 'fruit', toCompare)
  //   if (toCompare.includes(fruit)) {
  //     console.log(fruit);
  //     message = `Fruit ${fruit}  find`;
  //     break;  
    
  //   } 
  //   message =   `We Found ${fruit} `;
    
  // }

  // return fruits.includes(fruit); // Change this line
// }


// console.log(checkFruit("pineapple"));
// console.log(checkFruit("strawberry"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("orange"));



// ---------------------------- 25 ----------------------------- не решил

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArray = [];
  
 
//   for (let i = 0; i < array1.length; i += 1) {
//     const element = array1[i];
//     // console.log(element)
//     if (array2.includes(element))
//     {newArray.push(element) }
//   }
  
//     return newArray
//  // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]))
// console.log(getCommonElements([1, 2, 3], [2, 4]))
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))

//  -------------------------------- 26 -----------------------------

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const orders of order) {
//     total += orders;
//   }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]))

//  -------------------------------- 27 -----------------------------


// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }


// ------------------------------- 29 ---------------------------

// function getEvenNumbers(start, end) {
//    // Change code below this line
// // console.log(start,end)
//   let numbers;
//   const out = [];

//   for (let i = start; i <= end; i += 1) {
    
//     numbers = i;
    
//     if (numbers % 2 === 0) {
//       console.log('четное')
//       out.push(numbers);
//     }
//   }
//   return out;
  
//     // Change code above this line
// }
//   // console.log(numbers);


// console.log(getEvenNumbers(6, 12))



// --------------------------------------- 32 ------------------------------------



function includes(array, value) {
  // Change code below this line
  let message = '';
  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i])
    if (array[i] === value) {
    return true
    }

  }
    return false
  // Change code above this line
}


console.log(includes([1, 2, 3, 4, 5], 54))
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter1"))