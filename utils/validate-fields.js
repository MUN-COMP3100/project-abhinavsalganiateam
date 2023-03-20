let validator = require("validator");


let _validate_name = (name) => {
  return new Promise((resolve, reject) => {
    name = name.split(" ").join(""); //Removing blanks
    let is_valid = validator.isAlphanumeric(name);
    if (is_valid) {
      resolve("The name is valid.");
    } else {
      reject("The name is invalid.");
    }
  });
};

let _validate_email = (email) => {
  return new Promise((resolve, reject) => {
    let is_valid = validator.isEmail(email);
    if (is_valid) {
      resolve("The email is valid.");
    } else {
      reject("The email is invalid.");
    }
  });
};



let _validate_password = (password) => {
  return new Promise((resolve, reject) => {
    let validate = validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    });
    if (validate) {
      resolve("The password is valid.");
    } else {
      reject("password is invalid.");
    }
  });
};

module.exports.validate_fields = (name, email, phone, password) => {
  return Promise.all([_validate_name(name), _validate_email(email), _validate_phone(phone), _validate_password(password)])
    .then((values) => {
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
