var N = 4;
var array =[3,5,6,1];

function permutation(N,array){
    var maxSum = 0;
    var output = [];
    for(var i=0; i<array.length; i++){
        for(var j=i; j<array.length; j++){
            var sum = 0;
            var out = [];
            for(var k=i; k<=j; k++){
                sum+=array[k];
                out.push(array[i]);
            }
            if(maxSum<sum){
                maxSum=sum;
                output=out;
            }
        }
    }
    return out;
}

console.log(permutation(N,array));