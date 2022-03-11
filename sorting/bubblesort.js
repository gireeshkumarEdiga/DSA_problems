function girish(N,array){
    for(var j=0; j<N-1; j++){
        for(var k=0; k<N-j-1; k++){
            if(array[k]>array[k+1]){
                var temp=array[k];
                array[k]=array[k+1];
                array[k+1]=temp;
            }
        }
    }
    return array.join(" ");
}

function runProgram(input){
     var input = input.split("\n");
     var N = Number(input[0]);
     var array = input[1].split(" ").map(Number);
     
     var res = girish(N,array);
     console.log(res);
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