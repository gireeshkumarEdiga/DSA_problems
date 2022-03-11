var array = [1,1,1,1];
var N = array.length;
var K = 2;

var count=0
for(var i=0; i<N; i++){
    for(var j=i+1; j<N; j++){
        if(array[i]+array[j]==K){
            count++;
        }
    }
}
console.log(count);