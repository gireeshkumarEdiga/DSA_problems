var array = [1,4,45,6,20,8];
var N = array.length;
var sum = 13;


function triplet(array,N,sum){
    for(var i=0; i<N; i++){
        var l = i+1;
        var r = N-1
        while(l<r){
            if(array[i]+array[l]+array[r] === sum){
                return "True";
            }else if(array[i]+array[l]+array[r] > sum){
                r--;
            }else if(array[i]+array[l]+array[r] < sum){
                l++;
            }
        }
    }
    return "False";
}

console.log(triplet(array,N,sum));