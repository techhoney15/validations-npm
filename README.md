# check-javascript-typescript-validations

[![npm version](https://badge.fury.io/js/check-javascript-typescript-validations.svg)](https://badge.fury.io/js/check-javascript-typescript-validations)
[![license](https://img.shields.io/npm/l/check-javascript-typescript-validations.svg)](https://www.npmjs.com/package/check-javascript-typescript-validations)

## Overview

The check-javascript-typescript-validations package offers essential utility functions for validating common data types and performing array operations in JavaScript and TypeScript environments. It simplifies the validation process by providing functions to check email validity, phone number formatting, password strength, and date validity. Additionally, it includes functions to determine the language of a text, check variable emptiness, and verify numeric data types. For array manipulation, the package offers functions to remove duplicates, sort arrays, and both remove duplicates and sort arrays simultaneously. These utilities enhance code quality and reliability by ensuring that data meets specified criteria, contributing to more robust applications and smoother user experiences.


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

VariableIsEmpty
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
```

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
