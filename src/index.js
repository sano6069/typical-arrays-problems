
exports.min = function min (array) {

  if (Array.isArray(array)){
    let min = 0;
    let length = array.length;
    while (length--) {
      if (array[length] < min) {
        min = array[length];
      }
    }
    return min;
  }
    else return 0;
  }

exports.max = function max (array) {
  if (Array.isArray(array)){
    let max = 0;
    let length = array.length;
    while (length--) {
      if (array[length] > max) {
        max = array[length];
      }
    }
    return max;
  }
  else return 0;
  }


exports.avg = function avg (array) {
if( array === undefined || array.length === 0 )
    return 0;
    let count = 0, sum =0;
    let len = array.length;
    for(let i =0; i < len; i++)
    sum+= array[i];
    count = sum/(len);
    return  count;
}