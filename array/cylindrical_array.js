var array = [1, 2, 3, 4, 5];
var N = array.length;

var arr = [];
arr.push(array[N-1])
for(var i=0; i<N-1; i++){
    arr.push(array[i]);
}

console.log(arr);