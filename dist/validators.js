"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.differenceOfTwoDates = exports.compareTwoStrings = exports.removeDuplicatesAndSortArray = exports.sortArray = exports.removeDuplicatesFromArray = exports.isValidDate = exports.isStrongPassword = exports.isValidPhoneNumber = exports.checkIsNumber = exports.isTextEnglish = exports.isTextArabic = exports.variableIsEmpty = exports.deepCloneArray = exports.isValidEmail = void 0;
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
exports.isValidEmail = isValidEmail;
// Deep Clone an Array
function deepCloneArray(arr) {
    return JSON.parse(JSON.stringify(arr));
}
exports.deepCloneArray = deepCloneArray;
// Variable is empty or not
function variableIsEmpty(inputValue) {
    if (inputValue == undefined) {
        return true;
    }
    else if (inputValue == null) {
        return true;
    }
    else if (inputValue.trim() == '') {
        return true;
    }
    else {
        return false;
    }
}
exports.variableIsEmpty = variableIsEmpty;
;
// Check your text is arabic or not
function isTextArabic(text) {
    var arabicRegex = /^[\u0600-\u06FF\s]*$/;
    if (arabicRegex.test(text) || text === '') {
        return true;
    }
    else {
        return false;
    }
}
exports.isTextArabic = isTextArabic;
// Check your text is english or not
function isTextEnglish(text) {
    var englishRegex = /[^a-zA-Z\s]/g;
    if (englishRegex.test(text) || text === '') {
        return false;
    }
    else {
        return true;
    }
}
exports.isTextEnglish = isTextEnglish;
// Check value is number or not
function checkIsNumber(num) {
    if (typeof num === "number") {
        return true;
    }
    else {
        return false;
    }
}
exports.checkIsNumber = checkIsNumber;
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
exports.isValidPhoneNumber = isValidPhoneNumber;
// Check Password is strong or not
function isStrongPassword(password) {
    var _password = String(password);
    // At least one lowercase letter, one uppercase letter, one digit, and one special character, minimum 8 characters
    var strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return strongPasswordRegex.test(_password);
}
exports.isStrongPassword = isStrongPassword;
// Check Date is valid or not
function isValidDate(date) {
    var parsedDate = Date.parse(date);
    return !isNaN(parsedDate);
}
exports.isValidDate = isValidDate;
// Remove Duplicates from array
function removeDuplicatesFromArray(array) {
    if (Array.isArray(array) && array.length > 0) {
        return array.filter(function (value, index, self) { return self.indexOf(value) === index; });
    }
    else {
        return array;
    }
}
exports.removeDuplicatesFromArray = removeDuplicatesFromArray;
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
exports.sortArray = sortArray;
// Remove duplicates and sort an array
function removeDuplicatesAndSortArray(array, ascending) {
    if (ascending === void 0) { ascending = true; }
    var arr = removeDuplicatesFromArray(array);
    var newArr = sortArray(array, ascending);
    return newArr;
}
exports.removeDuplicatesAndSortArray = removeDuplicatesAndSortArray;
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
exports.compareTwoStrings = compareTwoStrings;
// Get Difference between 2 dates
function differenceOfTwoDates(_startDate, _endDate) {
    if (_startDate === void 0) { _startDate = new Date(); }
    if (!_endDate) {
        return {
            status: 404,
            error: "error",
            message: "End date is required"
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
            message: "Invalid date format"
        };
    }
    if (endDate.isBefore(startDate)) {
        return {
            status: 404,
            error: "error",
            message: "End date should be greater than start date"
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
        seconds: remainingSeconds
    };
}
exports.differenceOfTwoDates = differenceOfTwoDates;
