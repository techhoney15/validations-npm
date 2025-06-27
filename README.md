# check-javascript-typescript-validations

[![npm version](https://badge.fury.io/js/check-javascript-typescript-validations.svg)](https://badge.fury.io/js/check-javascript-typescript-validations)
[![license](https://img.shields.io/npm/l/check-javascript-typescript-validations.svg)](https://www.npmjs.com/package/check-javascript-typescript-validations)

## Overview

The check-javascript-typescript-validations package offers essential utility functions for validating common data types and performing array operations in JavaScript and TypeScript environments. It simplifies the validation process by providing functions to check email validity, phone number formatting, password strength, and date validity. Additionally, it includes functions to determine the language of a text, check variable emptiness, and verify numeric data types. For array manipulation, the package offers functions to remove duplicates, sort arrays, and both remove duplicates and sort arrays simultaneously. These utilities enhance code quality and reliability by ensuring that data meets specified criteria, contributing to more robust applications and smoother user experiences.

## Support on

JavaScript, TypeScript, React JS, React Native , Node JS, Next JS, Nest JS, etc.

## Installation

Install the package using npm:

```bash
npm install check-javascript-typescript-validations
```

Install the package using yarn:

```bash
yarn add check-javascript-typescript-validations
```

## ValidationFunctions.ts

```bash
isValidEmail
This function validates whether an email address is in the correct format.

isValidPhoneNumber
This function validates the format of a phone number, with an optional parameter to specify the required length.

isStrongPassword
This function checks the strength of a password, ensuring it meets specific criteria for complexity.

isValidDate
This function validates the format and correctness of a date.

isTextArabic
This function determines whether a text string is in Arabic.

isTextEnglish
This function determines whether a text string is in English.

variableIsEmpty
This function checks whether a variable is empty or undefined.

checkIsNumber
This function checks if a value is a number.
```

## ArrayOperations.ts

```bash
removeDuplicatesFromArray
This function removes duplicate elements from an array while preserving the original order.

sortArray
This function sorts the elements of an array in ascending or descending order.

removeAndSortArray
This function removes duplicates from an array and then sorts it, providing a streamlined approach to data manipulation.

differenceOfTwoDates
This function will give you a difference between 2 dates.
```

## Overview

```javascript
import {
  isValidEmail,
  deepCloneArray,
  variableIsEmpty,
  isTextArabic,
  isTextEnglish,
  checkIsNumber,
  isValidPhoneNumber,
  isStrongPassword,
  isValidDate,
  removeDuplicatesFromArray,
  sortArray,
  removeDuplicatesAndSortArray,
  compareTwoStrings,
  differenceOfTwoDates,
} from "./check-javascript-typescript-validations";

// Example usage of isValidEmail
const email = "test@example.com";
console.log(isValidEmail(email)); // true

// Example usage of deepCloneArray
const originalArray = [{ id: 1 }, { id: 2 }];
console.log(deepCloneArray(originalArray)); // [{ id: 1 }, { id: 2 }]

// Example usage of variableIsEmpty
const emptyString = "";
console.log(variableIsEmpty(emptyString)); // true

// Example usage of isTextArabic
const arabicText = "مرحبا";
console.log(isTextArabic(arabicText)); // true

// Example usage of isTextEnglish
const englishText = "Hello";
console.log(isTextEnglish(englishText)); // true

// Example usage of checkIsNumber
const value = 123;
console.log(checkIsNumber(value)); // true

// Example usage of isValidPhoneNumber
const phoneNumber = "+1234567890";
console.log(isValidPhoneNumber(phoneNumber)); // true

// Example usage of isStrongPassword
const password = "Str0ng@Pass";
console.log(isStrongPassword(password)); // true

// Example usage of isValidDate
const date = "2021-10-10";
console.log(isValidDate(date)); // true

// Example usage of removeDuplicatesFromArray
const array = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicatesFromArray(array)); // [1, 2, 3, 4, 5]

// Example usage of sortArray
const unsortedArray = [5, 3, 8, 1, 2];
console.log(sortArray(unsortedArray)); // [1, 2, 3, 5, 8]

// Example usage of removeDuplicatesAndSortArray
const arrayWithDuplicates = [5, 3, 8, 1, 2, 3, 5];
console.log(removeDuplicatesAndSortArray(arrayWithDuplicates)); // [1, 2, 3, 5, 8]

// Example usage of compareTwoStrings
const str1 = "hello";
const str2 = "hello";
console.log(compareTwoStrings(str1, str2)); // true

// Example of  differenceOfTwoDates
const startDate = "2024-05-10"; // Start date format will be  *** YYYY-MM-DD ***
const endDate = "2024-05-20"; // End date format will be  *** YYYY-MM-DD ***
console.log(differenceOfTwoDates(startDate, endDate)); // {  days: 10 ,hours: 0, minutes: 0, seconds: 0 }

console.log(checkDataEmptyOrNot([])); // true <-  Empty
console.log(checkDataEmptyOrNot({})); // true <-  Empty
console.log(checkDataEmptyOrNot({ a: 1 })); // false <- not Empty
console.log(checkDataEmptyOrNot(2)); // false <- not Empty
console.log(checkDataEmptyOrNot("abc")); // false <- not Empty
```
