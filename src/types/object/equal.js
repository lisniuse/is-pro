// Check that two objects are equal.
const objectEqual = function (object1, object2) {
  //For the first loop, we only check for types
  for (let propName in object1) {
    //Check for inherited methods and properties - like .equals itself
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
    //Return false if the return value is different
    if (object1.hasOwnProperty(propName) != object2.hasOwnProperty(propName)) {
      return false;
    }
    //Check instance type
    else if (typeof object1[propName] != typeof object2[propName]) {
      //Different types => not equal
      return false;
    }
  }
  //Now a deeper check using other objects property names
  for (let propName in object2) {
    //We must check instances anyway, there may be a property that only exists in object2
    //I wonder, if remembering the checked values from the first loop would be faster or not 
    if (object1.hasOwnProperty(propName) != object2.hasOwnProperty(propName)) {
      return false;
    }
    else if (typeof object1[propName] != typeof object2[propName]) {
      return false;
    }
    //If the property is inherited, do not check any more (it must be equa if both objects inherit it)
    if (!object1.hasOwnProperty(propName))
      continue;
    //Now the detail check and recursion
    //This returns the script back to the array comparing
    /**REQUIRES Array.equals**/
    if (this.all.array(object1[propName], object2[propName])) {
      // recurse into the nested arrays
      if (!arrayEqual.call(this, object1[propName], object2[propName])) {
        return false;
      }
    }
    else if (this.all.plainObject(object1[propName], object2[propName])) {
      // recurse into another objects
      //console.log("Recursing to compare ", object1[propName],"with",object2[propName], " both named \""+propName+"\"");
      if (!objectEqual.call(this, object1[propName], object2[propName])) {
        return false;
      }
    }
    //Normal value comparison for strings and numbers
    else if (object1[propName].toString() != object2[propName].toString()) {
      return false;
    }
  }
  //If everything passed, let's say YES
  return true;
}

// Check that two arrays are equal.
const arrayEqual = function (array1, array2) {
  // if the other array is a falsy value, return
  if (!array1 || !array2) {
    return false;
  }
  // compare lengths - can save a lot of time
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0, l = array1.length; i < l; i++) {
    // Check if we have nested arrays
    if (this.all.array(array1[i], array2[i])) {
      // recurse into the nested arrays
      if (!arrayEqual.call(this, array1[i], array2[i])) {
        return false;
      }
    } else if (this.all.plainObject(array1[i], array2[i])) {
      if (!objectEqual.call(this, array1[i], array2[i])) {
        return false;
      }
    } else {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      if ( array1[i].toString() != array2[i].toString() ) {
        return false;
      }
    }
  }
  return true;
}

// are given values equal? supports numbers, strings, regexes, booleans
// TODO: Add object and array support
const isEqual = function (value, other) {
  // check 0 and -0 equity with Infinity and -Infinity
  if (this.all.number(value, other)) {
    return value === other && 1 / value === 1 / other;
  }
  // check regexes as strings too
  if (this.all.string(value, other) || this.all.regexp(value, other)) {
    return '' + value === '' + other;
  }
  if (this.all.boolean(value, other)) {
    return value === other;
  }
  if (this.all.array(value, other)) {
    return arrayEqual.call(this, value, other);
  }
  if (this.all.plainObject(value, other)) {
    return objectEqual.call(this, value, other);
  }
  return false;
};

isEqual.api = ['not'];

export default isEqual;
