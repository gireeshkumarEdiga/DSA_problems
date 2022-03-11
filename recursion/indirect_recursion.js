let N = 10;

function f1(N){
    if(N==0){
        return 0;
    }else{
        console.log(N);
        f2(N-1);
    }
}

function f2(N){
    if(N<1){
        return;
    }else{
        console.log(N);
        f1(Math.floor(N/2));
    }
}

f1(N)