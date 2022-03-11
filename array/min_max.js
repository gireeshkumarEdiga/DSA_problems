// brute force

// var array = [25,58,50,40,42];

// var min = array[0];
// var max = array[0];

// for(var i=0; i<array.length; i++){
//     if(min>array[i]){
//         min = array[i];
//     }else if(max<array[i]){
//         max = array[i];
//     }
// }

// console.log(max+" "+min);

// T : O(N);
// S : O(1)


// RECURSION


// var array = [10,20,30,40,6,50,60,70];
// var min = array[0];
// var i=0;
// var n = array.length;
// function minimum(array,n){
//     if(i<n){
//         if(min>array[i]){
//             min=array[i];
//         }
//         i++;
//         minimum(array,n);
//     }
//     return min;
// }

// console.log(minimum(array,min));


// var array = [10,20,30,40,6,50,60,70];
// var max = array[0];
// var i=0;
// var n = array.length;
// function minimum(array,n){
//     if(i<n){
//         if(max<array[i]){
//             max=array[i];
//         }
//         i++;
//         minimum(array,n);
//     }
//     return max;
// }

// console.log(minimum(array,max));


// T : O(N)
//S : O(1)