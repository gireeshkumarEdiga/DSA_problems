let array = [1,4,2,10,2,3,1,0,20];
let k = 4;
let N = array.length

function subarray(array,N,k){
    if(k>N){
        return "not valid";
    }
    let max_sum = 0;
    for(var i=0; i<k; i++){
        max_sum+=array[i];
    }
    let window_sum = max_sum;
    for(var i=k; i<N; i++){
        window_sum=window_sum-array[i-k]+array[i];
        if(window_sum>max_sum){
            max_sum=window_sum;
        }
    }
    return max_sum;
}
console.log(subarray(array,N,k))