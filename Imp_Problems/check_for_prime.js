let N = 7;

function prime(N){
    let fact = 0;
    for(let i=2; i<N; i++){
        if(N%i==0){
            fact=1;
        }
    }
    if(fact==0){
        return "Yes";
    }else{
        return "No";
    }
}

console.log(prime(N));