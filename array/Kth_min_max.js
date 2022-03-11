// Brute force

//kth smallest

// var array = [7, 10, 4, 3, 20, 15];
// k=3;
// array.sort((a,b) => a -b);
// console.log(array[3-1]);

// T : 0(NlogN)

// var array = [40,30,20,60,10,5];
// var n = 10;
// var k = 2; 

// function kthsmallest(array,n,k){
//     array.sort((a,b) => a-b);
//     return array[k-1];
// }

// console.log(kthsmallest(array,n,k));



var array = [40,30,20,60,10,5];
var n = array.length;
var k = 2; 

function kthlargest(array,n,k){
    array.sort((a,b) => a-b);
    return array[n-k];
}

console.log(kthlargest(array,n,k));