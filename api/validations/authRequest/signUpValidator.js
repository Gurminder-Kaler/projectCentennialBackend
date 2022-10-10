const Validator = require('validator')
const isEmpty = require('../is-empty')

module.exports = function validateRegisterInput (data) {
  let errors = ''

  data.firstName = !isEmpty(data.firstName) ? data.firstName : ''
  data.role = !isEmpty(data.role) ? data.role : ''
  data.email = !isEmpty(data.email) ? data.email : ''
  data.password = !isEmpty(data.password) ? data.password : ''
  data.userName = !isEmpty(data.userName) ? data.userName : ''

  if (!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
    errors = 'First name must be between 2 and 30 characters'
  }
  if (Validator.isEmpty(data.firstName)) {
    errors = 'First name field is required'
  }

  if (Validator.isEmpty(data.role)) {
    errors = 'Role field is required'
  }

  if (!Validator.isIn(data.role, ['CUSTOMER', 'ADMIN'])) {
    errors = 'Role can either be ADMIN or CUSTOMER only!'
  }

  if (Validator.isEmpty(data.userName)) {
    errors = 'User name field is required'
  } else {
    if (!Validator.isLength(data.userName, { min: 6, max: 30 })) {
      errors =
        'User name must be at least 6 characters and maximum 30 characters'
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
