let N = 10;

function fizzbuzz(N){
    let ans = [];
    for(let i=1; i<=N; i++){
        if(i%3==0 && i%5==0){
            ans.push("FizzBuzz");
        }else if(i%3==0){
            ans.push("Fizz");
        }else if(i%5==0){
            ans.push("Buzz");
        }else {
            ans.push(i);
        }
    }
    return ans.join(" ");
}

console.log(fizzbuzz(N))