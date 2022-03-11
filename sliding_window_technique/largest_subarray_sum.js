let array = [10,5,2,7,1,9];
let x = 15;
let N = array.length;

function largest(array,N,k){
    let obj = {};
    let max_sum = 0;
    let max_len = 0;
    let sum = 0;
    for(let i=0; i<N; i++){
        sum+=array[i];
        if(sum == k){
            max_len=i+1;
        }
    }
}
console.log(largest(array,N,k))