var array = [1,2,3,4,5,6,7];

var N = array.length;

function sum(array,N){
    if(N<=0){
        return 0;
    }else{
        return sum(array,N-1)+array[N-1];
    }

}

console.log(sum(array,N));