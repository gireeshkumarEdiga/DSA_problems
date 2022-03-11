//Brute force

var array = [1,2,3,-2,5]
var N = array.length;

function sum(array,N){
    var max = 0;
    for(var i=0; i<N; i++){
        for(var j=i; j<N; j++){
            var sum=0;
            for(var k=i; k<=j; k++){
                sum+=array[k];
            }
            if(sum>max){
                max=sum;
            }
        }
    }
    return max;
}

console.log(sum(array,N));