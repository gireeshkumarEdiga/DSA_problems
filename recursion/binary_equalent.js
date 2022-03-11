var N = 25;

function binary(N){
    if(N==0){
        return 0;
    }else{
        binary(Math.floor(N/2));
        console.log(N%2);
    }
}

binary(N);