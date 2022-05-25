var [N,M] = [10,25];

function gcd(N,M){
    var a = 0;
    if(N>M){
        a=M;
    }else{
        a=N;
    }
    //console.log(a);
    var max = 0;
    for(var i=1; i<=a; i++){
        if(N%i==0 && M%i==0){
            max = i;
        }
    }
    return max;
}

console.log(gcd(N,M))