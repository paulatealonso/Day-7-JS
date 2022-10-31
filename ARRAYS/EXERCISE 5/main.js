function reverseArr(arr) {
    var newArr = "";
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr += arr[i];
    }
    return newArr;
}
// console.log(reverseArr(['a', 'b']));