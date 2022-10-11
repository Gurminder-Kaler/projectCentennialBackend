const Validator = require('validator')
const isEmpty = require('../is-empty')

module.exports = function departmentValidator(data) {
    let errors = ''

    data.name = !isEmpty(data.name) ? data.name : ''

    if (Validator.isEmpty(data.name)) {
        errors = 'Name field is required'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
