'use strict'

function search(input, target) {
  // return  input.indexOf(target);  // Remove this line and change to your own algorithm

  // for (let i = 0; i < input.length; i++){
  //   if (input[i] == target){
  //     return i;
  //   }
  // }
  // return -1;

  let low = 0;
  let high = input.length - 1;
  while (low <= high){
    let mid = Math.floor((low + high)/2);
    if (target < input[mid]) {
      high = mid - 1;
    }
    else if (target > input[mid]) {
      low = mid + 1;
    }
    else return mid;
  }
  return -1;
}

module.exports = search
