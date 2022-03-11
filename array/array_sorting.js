// brutforce (selection sort)

// var array = [3,5,0,9,8,4,6];
// var N = array.length;
// var min = 0;
// var temp = 0;

// for(var i=0; i<N-1; i++){
//     min = i;
//     for(var j=i+1; j<N; j++){
//         if(array[j]<array[min]){
//             min=j;
//         }
//     }
//     temp = array[min];
//     array[min] = array[i];
//     array[i] = temp;
// }

// console.log(array.join(" "));



// bubble sort

var array = [3,5,0,9,8,4,6];
var N = array.length;
var tem=0;

for(var i=0; i<N-1; i++){
    for(var j=0; j<N-i-1; j++){
        if(array[j]>array[j+1]){
            temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
        }
    }
}

console.log(array.join(" "));