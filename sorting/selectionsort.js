function girish(N,array){
    var temp=0;
    var min=0;
    for(var i=0; i<N-1; i++){
        min=i;
        for(var j=i+1; j<N; j++){
            if(array[j]<array[min]){
                min=j;
            }
        }
        temp = array[min];
        array[min] = array[i];
        array[i] = temp;
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


