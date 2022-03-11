let N = 12;

function santhosh(N){
    if(N<0){
        return 0;
    }else if(N==0){
        return 1;
    }else{
        return santhosh(N-4)+santhosh(N-8)
    }
}
console.log(santhosh(N))