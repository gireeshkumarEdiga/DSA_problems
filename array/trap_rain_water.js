var array = [3,0,0,2,0,4];
var N = array.length;

function traped(array,N){
    var res = 0;
    for(var i=0; i<N; i++){

        var left = array[i];
        for(var j=0; j<i; j++){
            left = Math.max(left,array[j])
        }

        var right = array[i];
        for(var j=i+1; j<N; j++){
            right = Math.max(right,array[j]);
        }
        res += Math.min(left,right) - array[i];
    }
    return res;
}

console.log(traped(array,N));