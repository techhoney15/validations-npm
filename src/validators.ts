import moment from "moment";
import { MixedType } from "./types"

// Email is valid or not
export function isValidEmail(email: string): boolean {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    if (emailRegex.test(email) == false) {
        return false
    } else {
        return true
    }
}

// Deep Clone an Array
export function deepCloneArray(arr: MixedType[]): boolean {
    return JSON.parse(JSON.stringify(arr))
}

// Variable is empty or not
export function VariableIsEmpty(inputValue: any): boolean {
    if (inputValue == undefined) {
        return true;
    } else if (inputValue == null) {
        return true;
    } else if (inputValue.trim() == '') {
        return true;
    } else {
        return false;
    }
};

// Check your text is arabic or not
export function isTextArabic(text: string): boolean {
    const arabicRegex = /^[\u0600-\u06FF\s]*$/;
    if (arabicRegex.test(text) || text === '') {
        return true;
    } else {
        return false;
    }
}

// Check your text is english or not
export function isTextEnglish(text: string): boolean {
    const englishRegex = /[^a-zA-Z\s]/g;
    if (englishRegex.test(text) || text === '') {
        return false;
    } else {
        return true;
    }
}

// Check value is number or not
export function checkIsNumber(num: any): boolean {
    if (typeof num === "number") {
        return true
    } else {
        return false
    }
}

// Check valid phone number
export function isValidPhoneNumber(phoneNumber: string, requiredLength = 6): boolean {
    if (String(phoneNumber).length < requiredLength) {
        return false
    }
    const _phone = String(phoneNumber)
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format
    return phoneRegex.test(_phone);
}

// Check Password is strong or not
export function isStrongPassword(password: string | number): boolean {
    const _password = String(password)
    // At least one lowercase letter, one uppercase letter, one digit, and one special character, minimum 8 characters
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return strongPasswordRegex.test(_password)
}

// Check Date is valid or not
export function isValidDate(date: any): boolean {
    const parsedDate = Date.parse(date);
    return !isNaN(parsedDate);
}