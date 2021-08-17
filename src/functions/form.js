/**
 * Validate email against regex
 * Valid email e.g. test@gmail.com
 * @param  {string} email
 * @returns {bool}
 */
const isEmailValid = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

/**
 * Validate if value is empty
 * Trim empty spaces before checking
 * @param  {string} value
 * @returns {bool}
 */
const isEmpty = (value) => {
    return value.replace(' ', '').length === 0
}

module.exports = {
    isEmailValid,
    isEmpty
}