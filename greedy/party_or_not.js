var array =[6,4,21,20,13];
var N = array.length;
var C = 3;
var R = 24;
array.sort((a,b) => a-b);
//console.log(array)

function party(array,N,C,R){
    let sum=0;
    for(let i=0; i<C; i++){
        sum+=array[i]
    }
    if(sum<=R){
        return "Party"
    }else{
        return "-1";
    }
}

console.log(party(array,N,C,R))