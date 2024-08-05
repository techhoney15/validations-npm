import moment from "moment"
import { DateDifferenceResult, MixedType } from "./types"

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
export function variableIsEmpty(inputValue: any): boolean {
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

// Remove Duplicates from array
export function removeDuplicatesFromArray<T>(array: T[]): T[] {
    if (Array.isArray(array) && array.length > 0) {
        return array.filter((value, index, self) => self.indexOf(value) === index);
    } else {
        return array;
    }
}
// Sort array 
export function sortArray<T extends number | string>(array: T[], ascending: boolean = true): T[] {
    if (Array.isArray(array) && array.length > 0) {
        return array.sort((a, b) => {
            if (ascending) {
                return a < b ? -1 : a > b ? 1 : 0;
            } else {
                return a > b ? -1 : a < b ? 1 : 0;
            }
        });
    } else {
        return array;
    }
}

// Remove duplicates and sort an array
export function removeDuplicatesAndSortArray<T extends number | string>(array: T[], ascending: boolean = true): T[] {
    const arr = removeDuplicatesFromArray(array)
    const newArr = sortArray(array, ascending)
    return newArr
}

// Compare 2 strings are equal or not
export function compareTwoStrings(str1: string, str2: string): boolean {
    if (typeof str1 != "string" && typeof str2 != "string") {
        return false
    } else if (variableIsEmpty(str1)) {
        return false
    } else if (variableIsEmpty(str2)) {
        return false
    } else if (str1.length != str2.length) {
        return false
    } else {
        var _NUM1 = ""
        var _NUM2 = ""
        for (var i = 0; i < String(str1).length; i++) {
            _NUM1 = _NUM1 + "" + str1.charCodeAt(i)
            _NUM2 = _NUM2 + "" + str2.charCodeAt(i)
        }
        if (String(_NUM1) === String(_NUM2)) {
            return true
        } else {
            return false
        }
    }
}

// Get Difference between 2 dates
export function differenceOfTwoDates(_startDate: Date | string = new Date(), _endDate: string): DateDifferenceResult {

    if (!_endDate) {
        return {
            status: 404,
            error: "error",
            message: "End date is required"
        };
    }

    const startDateTime = moment(_startDate).format();
    const endDateTime = moment(_endDate).format();

    const startDate = moment(startDateTime);
    const endDate = moment(endDateTime);

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

    const duration = moment.duration(endDate.diff(startDate));

    const remainingDays = duration.days();
    const remainingHours = duration.hours();
    const remainingMinutes = duration.minutes();
    const remainingSeconds = duration.seconds();

    return {
        days: remainingDays,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds
    };
}

export const checkDataEmptyOrNot = (_data: any) => {
    if (_data == undefined) {
        return true;
    } else if (_data == null) {
        return true;
    } else if (Array.isArray(_data) && _data.length === 0) {
        return true
    } else if (typeof _data === "object" && Object.keys(_data).length === 0) {
        return true
    } else if (typeof _data === "string" && _data.trim().length === 0) {
        return true
    } else {
        return false
    }
}
