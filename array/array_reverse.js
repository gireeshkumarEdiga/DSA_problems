//1. Brute force

// var array = [1,2,3,4,5];

// var rev = [];
// for(var i=array.length-1; i>=0; i--){
//     rev.push(array[i])
// }

// console.log(rev);

//T : 0(n)
//S : O(n)



//2. two pointer approach


// var array = [1,2,3,4,5,6];

// var left = 0;
// var right = array.length-1;
// var temp=0;

// while(left<right){
//     temp = array[left];
//     array[left] = array[right];
//     array[right] = temp;
//     left++;
//     right--;
// }

// console.log(array);

//T : o(N);
//S : O(N)

// 3. recursion 

var array = [10,20,30,40,50,60,70];
var left = 0;
var right = array.length-1;

var temp=0;
function reverse(array,left,right){
    if(left>=right){
        return;
    }else{
        temp=array[left];
        array[left] = array[right];
        array[right] = temp;
    }
    reverse(array,left+1,right-1);
    return array;
}

console.log(reverse(array,left,right));

// T : O(N)
// S : O(N) 

