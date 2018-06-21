'use strict'

function sort(input) {
  // return input.sort((a,b) => a-b); // Remove this line and change to your own algorithm
  
  for (let i = 0; i < input.length - 1; i++){
    for (let j = i + 1; j < input.length; j++){
      if (input[j] < input[i]){
        let temp = input[i];
        input[i] = input[j];
        input[j] = temp;
      }
    }
  }
  return input;
  
}

module.exports = sort
