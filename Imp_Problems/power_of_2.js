let N = 4;

function power(N){
    for(let i=1; i<N; i++){
        if(i**2==N){
            return "Yes";
        }
    }
    return "No";
}

console.log(power(N));