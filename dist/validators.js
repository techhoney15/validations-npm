"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIndianPAN = exports.validateCreditCard = exports.validateURL = exports.validateUsername = exports.checkDataEmptyOrNot = void 0;
exports.isValidEmail = isValidEmail;
exports.deepCloneArray = deepCloneArray;
exports.variableIsEmpty = variableIsEmpty;
exports.checkIsNumber = checkIsNumber;
exports.isValidPhoneNumber = isValidPhoneNumber;
exports.isStrongPassword = isStrongPassword;
exports.isValidDate = isValidDate;
exports.removeDuplicatesFromArray = removeDuplicatesFromArray;
exports.sortArray = sortArray;
exports.removeDuplicatesAndSortArray = removeDuplicatesAndSortArray;
exports.compareTwoStrings = compareTwoStrings;
exports.differenceOfTwoDates = differenceOfTwoDates;
var moment_1 = __importDefault(require("moment"));
// Email is valid or not
function isValidEmail(email) {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (emailRegex.test(email) == false) {
        return false;
    }
    else {
        return true;
    }
}
// Deep Clone an Array
function deepCloneArray(arr) {
    return JSON.parse(JSON.stringify(arr));
}
// Variable is empty or not
function variableIsEmpty(inputValue) {
    if (inputValue == undefined) {
        return true;
    }
    else if (inputValue == null) {
        return true;
    }
    else if (inputValue.trim() == "") {
        return true;
    }
    else {
        return false;
    }
}
// // Check your text is arabic or not
// export function isTextArabic(text: string): boolean {
//   const arabicRegex = /^[\u0600-\u06FF\s]*$/;
//   if (arabicRegex.test(text) || text === "") {
//     return true;
//   } else {
//     return false;
//   }
// }
// // Check your text is english or not
// export function isTextEnglish(text: string): boolean {
//   const englishRegex = /[^a-zA-Z\s]/g;
//   if (englishRegex.test(text) || text === "") {
//     return false;
//   } else {
//     return true;
//   }
// }
// Check value is number or not
function checkIsNumber(num) {
    if (typeof num === "number") {
        return true;
    }
    else {
        return false;
    }
}
// Check valid phone number
function isValidPhoneNumber(phoneNumber, requiredLength) {
    if (requiredLength === void 0) { requiredLength = 6; }
    if (String(phoneNumber).length < requiredLength) {
        return false;
    }
    var _phone = String(phoneNumber);
    var phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format
    return phoneRegex.test(_phone);
}
// Check Password is strong or not
function isStrongPassword(password) {
    var _password = String(password);
    // At least one lowercase letter, one uppercase letter, one digit, and one special character, minimum 8 characters
    var strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return strongPasswordRegex.test(_password);
}
// Check Date is valid or not
function isValidDate(date) {
    var parsedDate = Date.parse(date);
    return !isNaN(parsedDate);
}
// Remove Duplicates from array
function removeDuplicatesFromArray(array) {
    if (Array.isArray(array) && array.length > 0) {
        return array.filter(function (value, index, self) { return self.indexOf(value) === index; });
    }
    else {
        return array;
    }
}
// Sort array
function sortArray(array, ascending) {
    if (ascending === void 0) { ascending = true; }
    if (Array.isArray(array) && array.length > 0) {
        return array.sort(function (a, b) {
            if (ascending) {
                return a < b ? -1 : a > b ? 1 : 0;
            }
            else {
                return a > b ? -1 : a < b ? 1 : 0;
            }
        });
    }
    else {
        return array;
    }
}
// Remove duplicates and sort an array
function removeDuplicatesAndSortArray(array, ascending) {
    if (ascending === void 0) { ascending = true; }
    var arr = removeDuplicatesFromArray(array);
    var newArr = sortArray(array, ascending);
    return newArr;
}
// Compare 2 strings are equal or not
function compareTwoStrings(str1, str2) {
    if (typeof str1 != "string" && typeof str2 != "string") {
        return false;
    }
    else if (variableIsEmpty(str1)) {
        return false;
    }
    else if (variableIsEmpty(str2)) {
        return false;
    }
    else if (str1.length != str2.length) {
        return false;
    }
    else {
        var _NUM1 = "";
        var _NUM2 = "";
        for (var i = 0; i < String(str1).length; i++) {
            _NUM1 = _NUM1 + "" + str1.charCodeAt(i);
            _NUM2 = _NUM2 + "" + str2.charCodeAt(i);
        }
        if (String(_NUM1) === String(_NUM2)) {
            return true;
        }
        else {
            return false;
        }
    }
}
// Get Difference between 2 dates
function differenceOfTwoDates(_startDate, _endDate) {
    if (_startDate === void 0) { _startDate = new Date(); }
    if (!_endDate) {
        return {
            status: 404,
            error: "error",
            message: "End date is required",
        };
    }
    var startDateTime = (0, moment_1.default)(_startDate).format();
    var endDateTime = (0, moment_1.default)(_endDate).format();
    var startDate = (0, moment_1.default)(startDateTime);
    var endDate = (0, moment_1.default)(endDateTime);
    if (!startDate.isValid() || !endDate.isValid()) {
        return {
            status: 400,
            error: "error",
            message: "Invalid date format",
        };
    }
    if (endDate.isBefore(startDate)) {
        return {
            status: 404,
            error: "error",
            message: "End date should be greater than start date",
        };
    }
    var duration = moment_1.default.duration(endDate.diff(startDate));
    var remainingDays = duration.days();
    var remainingHours = duration.hours();
    var remainingMinutes = duration.minutes();
    var remainingSeconds = duration.seconds();
    return {
        days: remainingDays,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds,
    };
}
var checkDataEmptyOrNot = function (_data) {
    if (_data == undefined) {
        return true;
    }
    else if (_data == null) {
        return true;
    }
    else if (Array.isArray(_data) && _data.length === 0) {
        return true;
    }
    else if (typeof _data === "object" && Object.keys(_data).length === 0) {
        return true;
    }
    else if (typeof _data === "string" && _data.trim().length === 0) {
        return true;
    }
    else {
        return false;
    }
};
exports.checkDataEmptyOrNot = checkDataEmptyOrNot;
var validateUsername = function (username, min, max) {
    if (min === void 0) { min = 3; }
    if (max === void 0) { max = 16; }
    var re = new RegExp("^[a-zA-Z0-9_]{".concat(min, ",").concat(max, "}$"));
    return re.test(username);
};
exports.validateUsername = validateUsername;
var validateURL = function (url) {
    try {
        new URL(url);
        return true;
    }
    catch (_a) {
        return false;
    }
};
exports.validateURL = validateURL;
var validateCreditCard = function (number) {
    var sanitized = number.replace(/\D/g, '');
    var sum = 0, shouldDouble = false;
    for (var i = sanitized.length - 1; i >= 0; i--) {
        var digit = +sanitized[i];
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9)
                digit -= 9;
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    return sanitized.length >= 13 && sanitized.length <= 19 && (sum % 10 === 0);
};
exports.validateCreditCard = validateCreditCard;
var validateIndianPAN = function (pan) {
    return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan.toUpperCase());
};
exports.validateIndianPAN = validateIndianPAN;
