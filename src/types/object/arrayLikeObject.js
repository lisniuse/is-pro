/**
 * This method is like `isArrayLike` except that it also checks if `value`
 * is an object.
 * 
 */ 

const isArrayLikeObject = function(value) {
  return this.objectLike(value) && this.arrayLike(value);
}

export default isArrayLikeObject;
