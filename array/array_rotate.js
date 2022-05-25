function rotate(N,K,array){
    let sum = "";
    for(let i=0; i<N; i++){
        let res = [(N-K+i)%N]
        sum+=array[res]+" ";
    }
    return sum;
}

function runProgram(input){
    input = input.split("\n");
    let T = Number(input[0]);
    let pos=1;
    for(let i=0; i<T; i++){
        let [N,K] = input[pos].split(" ").map(Number);
        let array = input[pos+1].split(" ").map(Number);
        pos+=2;
        
        if(K>N){
            K=K%N;
        }
        
        let result = rotate(N,K,array);
        console.log(result);
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});
