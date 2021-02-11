Array.prototype.flatten = function(depth = 1, flattenArray = []) {
  for(const element of this) {
    if(Array.isArray(element) && depth > 0) {
      element.flatten(depth -1, flattenArray);
    } else {
      flattenArray.push(element);
    }
  }
  return flattenArray
}

const arr = [[0], 1, 2, 3, [4, 5, [6]]];
console.log(arr.flatten(2));