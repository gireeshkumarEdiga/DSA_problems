let N = 12345;

function natural(N){
    if(N%10==0){
        return N;
    }else{
        return N%10+natural(Math.floor(N/10));
    }
}

console.log(natural(N));