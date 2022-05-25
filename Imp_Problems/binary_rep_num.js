let N = 7;

function binary(N){
    let ans = [];
    for(let i=31; i>=0; i--){
        if(N&(1<<i)>0){
            ans.push(1);
        }else{
            ans.push(0);
        }
    }
    return ans.join("");
}

console.log(binary(N));