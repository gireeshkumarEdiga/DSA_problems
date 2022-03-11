let N = 5;

function fibonacci(N){
    if(N==0){
        return 0;
    }else if(N==1){
        return 1;
    }else if(N>1){
        return fibonacci(N-1)+fibonacci(N-2);
    }
}
console.log(fibonacci(N))