"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidDate = exports.isStrongPassword = exports.isValidPhoneNumber = exports.checkIsNumber = exports.isTextEnglish = exports.isTextArabic = exports.VariableIsEmpty = exports.deepCloneArray = exports.isValidEmail = void 0;
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
function VariableIsEmpty(inputValue) {
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
exports.VariableIsEmpty = VariableIsEmpty;
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
