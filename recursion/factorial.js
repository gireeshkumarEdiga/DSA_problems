var N = 5;

function factorial(N){
    if(N==0 || N==1){
        return 1;
    }else{
        return N*factorial(N-1);
    }
}
console.log(factorial(N))