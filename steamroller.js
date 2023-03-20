function steamrollArray(arr) {
  let flattenedArr = [];

  let flattenArr = (arr) => {
    for(let i = 0; i < arr.length; i++){
      if (Array.isArray(arr[i])){
        let item = flattenArr(arr[i]);
        item && flattenedArr.push(item);
      } else {
        flattenedArr.push(arr[i]);
      }
    }
  }
  flattenArr(arr);
  return flattenedArr;
}

console.log(steamrollArray([[["a"]], [["b"]]]));
