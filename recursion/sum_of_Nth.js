// sum of natural numbers


let N = 5;

function sum(N){
    if(N==1){
        return 1;
    }else{
        return N+sum(N-1);
    }
}
console.log(sum(N));