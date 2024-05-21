function checkValidEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    if (emailRegex.test(email) == false) {
        return false
    } else {
        return true
    }
}

module.exports = checkValidEmail
