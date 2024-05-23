# check-javascript-typescript-validations

[![npm version](https://badge.fury.io/js/check-javascript-typescript-validations.svg)](https://badge.fury.io/js/check-javascript-typescript-validations)
[![license](https://img.shields.io/npm/l/check-javascript-typescript-validations.svg)](https://www.npmjs.com/package/check-javascript-typescript-validations)

## Overview

`check-javascript-typescript-validations` is a utility library that provides various validation functions for JavaScript and TypeScript. It includes common validations such as checking email formats, phone numbers, password strength, and more. The library is written in TypeScript, ensuring type safety and better development experience.

## Installation

Install the package using npm:

```bash
npm install check-javascript-typescript-validations
or 
yarn add check-javascript-typescript-validations
```

## Overview


```javascript
import {
    isValidEmail,
    deepCloneArray,
    VariableIsEmpty,
    isTextArabic,
    isTextEnglish,
    checkIsNumber,
    isValidPhoneNumber,
    isStrongPassword,
    isValidDate,
    removeDuplicatesFromArray,
    sortArray,
    removeDuplicatesAndSortArray,
    compareTwoStrings
} from './check-javascript-typescript-validations';

// Example usage of isValidEmail
const email = "test@example.com";
console.log(`Is ${email} a valid email?`, isValidEmail(email)); // true

// Example usage of deepCloneArray
const originalArray = [{ id: 1 }, { id: 2 }];
const clonedArray = deepCloneArray(originalArray);
console.log('Cloned array:', clonedArray); // [{ id: 1 }, { id: 2 }]

// Example usage of VariableIsEmpty
const emptyString = "";
console.log(`Is "${emptyString}" empty?`, VariableIsEmpty(emptyString)); // true

// Example usage of isTextArabic
const arabicText = "مرحبا";
console.log(`Is "${arabicText}" Arabic?`, isTextArabic(arabicText)); // true

// Example usage of isTextEnglish
const englishText = "Hello";
console.log(`Is "${englishText}" English?`, isTextEnglish(englishText)); // true

// Example usage of checkIsNumber
const value = 123;
console.log(`Is ${value} a number?`, checkIsNumber(value)); // true

// Example usage of isValidPhoneNumber
const phoneNumber = "+1234567890";
console.log(`Is ${phoneNumber} a valid phone number?`, isValidPhoneNumber(phoneNumber)); // true

// Example usage of isStrongPassword
const password = "Str0ng@Pass";
console.log(`Is "${password}" a strong password?`, isStrongPassword(password)); // true

// Example usage of isValidDate
const date = "2021-10-10";
console.log(`Is ${date} a valid date?`, isValidDate(date)); // true

// Example usage of removeDuplicatesFromArray
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicatesFromArray(array);
console.log('Array after removing duplicates:', uniqueArray); // [1, 2, 3, 4, 5]

// Example usage of sortArray
const unsortedArray = [5, 3, 8, 1, 2];
const sortedArray = sortArray(unsortedArray);
console.log('Sorted array:', sortedArray); // [1, 2, 3, 5, 8]

// Example usage of removeDuplicatesAndSortArray
const arrayWithDuplicates = [5, 3, 8, 1, 2, 3, 5];
const processedArray = removeDuplicatesAndSortArray(arrayWithDuplicates);
console.log('Array after removing duplicates and sorting:', processedArray); // [1, 2, 3, 5, 8]

// Example usage of compareTwoStrings
const str1 = "hello";
const str2 = "hello";
console.log(`Are "${str1}" and "${str2}" equal?`, compareTwoStrings(str1, str2)); // true
```
