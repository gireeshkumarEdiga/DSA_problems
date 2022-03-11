//Bruite force

// var array = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
// var N = array.length;
// var j = 0;
// for(var i=0; i<N; i++){
//     if(array[i]<0){
//         if(i!=j){
//             var temp = array[i];
//             array[i] = array[j];
//             array[j] = temp;
//         }
//         j++;
//     }
// }

// console.log(array);



//two pointer approach


// var array = [-12, 11, -13, -5, 6, -7, 5, -3, -6]
// var left = 0;
// var right = array.length-1;

// function neg_pos(array,left,right){
//     while(left<=right){
//         if(array[left]<0 && array[right]<0){
//             left+=1;
//         }else if(array[left]>0 && array[right]<0){
//             let temp = array[left];
//             array[left] = array[right];
//             array[right] = temp;
//             left+=1;
//             right-=1;
//         }else if(array[left]>0 && array[right>0]){
//             right-=1;
//         }else{
//             left+=1;
//             right-=1;
//         }
//     }
//     return array;
// }

// console.log(neg_pos(array,left,right));