"use strict"

// -------------------- 1-masala start --------------------

// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//       return 0;
//     }
  
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
  
//     return sum / numbers.length;
//   }
  
//   let list1 = [1, 2, 3, 4, 5];
//   let average1 = calculateAverage(list1);
//   console.log(average1); 
  
//   let list2 = [];
//   let average2 = calculateAverage(list2);
//   console.log(average2); 

// -------------------- 1-masala end --------------------



// -------------------- 2-masala start --------------------


// function numberToPower(number, power) {
//   let result = 1;
//   for (let i = 0; i < power; i++) {
//     result *= number;
//   }
//   return result;
// }

// // Example usage:
// console.log(numberToPower(3, 2));  // Output: 9
// console.log(numberToPower(2, 3));  // Output: 8
// console.log(numberToPower(10, 6)); // Output: 1000000

// -------------------- 2-masala end --------------------



// -------------------- 3-masala start --------------------

// function findBug(infiniteloop) {
//   let result = [];
//   for (let i = 0; i < infiniteloop.length; i++) {
//     result.push(infiniteloop[i]);
//   }
//   return result;
// }

// // Example usage:
// let input = [1, 2, 3, 4, 5];
// console.log(findBug(input)); // Output: [1, 2, 3, 4, 5]

// -------------------- 3-masala end --------------------


// -------------------- 4-masala start --------------------

// function totalGoals(laLigaGoals, copaDelReyGoals, championsGoals) {
//   return laLigaGoals + copaDelReyGoals + championsGoals;
// }

// // Example usage:
// console.log(totalGoals(5, 10, 2)); // Output: 17

// -------------------- 4-masala end --------------------


// -------------------- 5-masala start --------------------

// function areTheyInLove(flower1Petals, flower2Petals) {
//   if (flower1Petals % 2 === 0 && flower2Petals % 2 !== 0) {
//     return true;
//   } else if (flower1Petals % 2 !== 0 && flower2Petals % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // Example usage:
// console.log(areTheyInLove(3, 4)); // Output: true
// console.log(areTheyInLove(2, 8)); // Output: false
// console.log(areTheyInLove(1, 9)); // Output: true

// -------------------- 5-masala end --------------------


// -------------------- 6-masala start --------------------

// function timeSinceMidnight(h, m, s) {
//   const millisecondsPerHour = 60 * 60 * 1000;
//   const millisecondsPerMinute = 60 * 1000;
//   const millisecondsPerSecond = 1000;

//   const totalMilliseconds =
//     h * millisecondsPerHour +
//     m * millisecondsPerMinute +
//     s * millisecondsPerSecond;

//   return totalMilliseconds;
// }

// // Example usage:
// console.log(timeSinceMidnight(0, 1, 1)); // Output: 61000

// -------------------- 6-masala end --------------------


// -------------------- 7-masala start --------------------

// function isPrime(number) {
//   if (number < 2) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// // Example usage:
// console.log(isPrime(0));  // Output: false
// console.log(isPrime(1));  // Output: false
// console.log(isPrime(2));  // Output: true
// console.log(isPrime(11)); // Output: true
// console.log(isPrime(12)); // Output: false

// -------------------- 7-masala end --------------------


// -------------------- 8-masala start --------------------

// function countPositivesSumNegatives(input) {
//   if (!input || input.length === 0) {
//     return [];
//   }

//   let countPositives = 0;
//   let sumNegatives = 0;

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] > 0) {
//       countPositives++;
//     } else if (input[i] < 0) {
//       sumNegatives += input[i];
//     }
//   }

//   return [countPositives, sumNegatives];
// }

// // Example usage:
// const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// console.log(countPositivesSumNegatives(input)); // Output: [10, -65]

// -------------------- 8-masala end --------------------



// -------------------- 9-masala start --------------------


// function calculateAverage(arr) {
//   let total = arr.reduce((a, b) => a + b, 0);
//   let average = Math.floor(total / arr.length);
//   return average;
// }

// let grades = [85, 90, 92, 88, 95];
// let averageGrade = calculateAverage(grades);
// console.log("Average grade:", averageGrade);

// -------------------- 9-masala end --------------------



// -------------------- 10-masala start --------------------

// function convertToInitials(name) {
//   let names = name.split(" ");
//   let initials = names.map((name) => name[0].toUpperCase());
//   return initials.join(".");
// }

// // Example usage
// let fullName = "Sam Harris";
// let initials = convertToInitials(fullName);
// console.log("Initials:", initials);

// fullName = "patrick feeney";
// initials = convertToInitials(fullName);
// console.log("Initials:", initials);

// -------------------- 10-masala end --------------------

