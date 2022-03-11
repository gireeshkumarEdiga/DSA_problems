var array = [1,2,3,-2,5];
var N = array.length;

var max = -9999;
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

console.log(max);