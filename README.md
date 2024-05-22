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

```bash

import { 
  isValidEmail, 
  deepCloneArray, 
  VariableIsEmpty, 
  isTextArabic, 
  isTextEnglish, 
  checkIsNumber, 
  isValidPhoneNumber, 
  isStrongPassword, 
  isValidDate 
} from 'check-javascript-typescript-validations';

console.log(isValidEmail('test@example.com')); // true
console.log(checkIsNumber(123)); // true
console.log(isStrongPassword('StrongP@ssw0rd')); // true
