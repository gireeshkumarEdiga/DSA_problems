let array = [6,3,2,1];
let sum = 5;
let N = array.length;

function subset(array,N,sum){
    if(sum==0){
        return "true";
    }
    if(N==0){
        return "false";
    }
    if(array[N-1]>sum){
        return subset(array,N-1,sum);
    }else{
        return subset(array,N-1,sum-array[N-1]) || subset(array,N-1,sum);
    }
}
console.log(subset(array,N,sum))
