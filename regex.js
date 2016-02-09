// function complexPassword(str) {
//   var valid = false;
//   /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/.test(str) ? valid = true : valid = false;
//   console.log(valid);
//   return valid;
// }

// complexPassword('hElloasd');

function checkPW(str) {
  var numbers = false;
  var lowercase = false;
  var uppercase = false;
  var special = false;
  var complete = true;

  if (str.length > 8) {
    if (/[a-z]/g.test(str)) {
      lowercase = true;
    }
    if (/[A-Z]/g.test(str)) {
      uppercase = true;
    }
    if (/[0-9]/g.test(str)) {
      numbers = true;
    }
    if (/[!@#$%^&*_)(-+=?]/g.test(str)) {
      special = true;
    }

    if (/[^a-zA-Z0-9!@#$%^&_=+*\)\(\-]/g.test(str)) {
      complete = false;
    }

    if (numbers === true && lowercase === true && uppercase === true && special === true && complete === true) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

module.exports = checkPW;
