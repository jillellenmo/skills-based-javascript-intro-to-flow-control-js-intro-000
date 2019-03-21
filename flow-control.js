function basicTeenager (age) {
    // currently this function is failing, because it isn't doing anything
    // we want to check and see if the age is between 13 and nineteen
    // then return a string if that is the case
    if (age >=13) {
    return 'You are a teenager!'
    }

  }


function teenager(age) {
  if (age >19) {
    return 'You are not a teenager'
  } // to close off the if block
  else if (age <13){
    return 'You are not a teenager'
  } else { // else does not take a condition, it is the default
    return 'You are a teenager!'
  }
}

function ageChecker(age) {
  if (age <=12){
    return 'You are a kid'
  } else if (age >= 13 && age <=19) {// checking to see that the age is greater than 13 AND less than 19
    return 'You are a teenager!'
} else {
  return 'You are a grownup'
}
}

function ternaryTeenager(age) {
  if (age > 19){
    return 'You are not a teenager'
  }
  if (age <13) {
    return 'You are not a teenager'
  else {
    return 'You are a teenager'
  }
  }

}

function switchAge(age) {

}
