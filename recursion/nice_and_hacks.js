let N = 200;
let x = 1;

function nah(N,x){
    if(N==x){
        return "true";
    }
    if(x>N){
        return "false";
    }else{
        return nah(N,x*10) || nah(N,x*20)
    }
}

console.log(nah(N,x))