var array = [5,4,2,4];
var amount = 10;
var N = array.length;
array.sort((a,b)=>a-b)

function samosa(array,N,amount){
    let sum = 0;
    let i = 0;
    while(sum<=amount){
        sum+=array[i];
        i++;
    }
    return i-1;
}

console.log(samosa(array,N,amount))