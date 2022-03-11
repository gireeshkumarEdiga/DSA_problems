var array = [1,2,3,4,5,6,7];
var key = 4;

function linear(array,key){
    for(var i=0; i<array.length; i++){
        if(array[i]==key){
            return i;
        }
    }
    return "-1";
}

console.log(linear(array,key));