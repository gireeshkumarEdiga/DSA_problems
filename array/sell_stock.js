var prices = [7,1,5,3,6,4];
var N = prices.length;
var max = 0;

for(var i=0; i<prices.length; i++){
    for(var j=i+1; j<prices.length; j++){
        var diff = array[i]-array[j];
        if(max < diff){
            max = diff;
        }
    }
}
console.log(max);