let N = 4;

function ways(N){
    if(N<0){
        return 0;
    }
    if(N == 0){
        return 1;
    }else{
        return ways(N-1)+ways(N-2)+ways(N-3);
    }
}

console.log(ways(N));