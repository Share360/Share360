import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};
    console.log(data);

    if (validator.isEmpty(data.username)) {
        errors.username = 'This field is required';
        console.log(data, 'just checking to see if this is working');
    }

    if (validator.isEmpty(data.password)) {
        errors.password = 'This field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}