"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidEmail = void 0;
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
