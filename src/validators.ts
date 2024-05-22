export function isValidEmail(email: string) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    if (emailRegex.test(email) == false) {
        return false
    } else {
        return true
    }
}