
exports.min = function min (array) {
  if (array && array.length !== 0){
    return  Math.min(...array);  
 }
  
   return 0;
 
}

exports.max = function max (array) {
  if (array && array.length !== 0){
    return  Math.max(...array);  
 }
   return 0;
}

exports.avg = function avg (array) {
  if (array && array.length !== 0) {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total += array[i];
    }
    let avg = total / array.length;
    return avg;
  }
  return 0;
}
