function runProgram(input){
    var input = input.split("\n");
    var N = Number(input[0]);
    var pos=1;
    var array = [];
    for(var i=0; i<N; i++){
        var arr = input[pos+i].split(" ").map(Number);
        array.push(arr);
    }
    var sum="";
    for(var j=N-1; j>=0; j--){
        for(var k=0; k<N; k++){
            sum+=array[k][j]+" ";
        }
        sum+="\n";
    }
    console.log(sum);
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



// 4
// 1 2 3 4
// 5 6 7 8
// 1 2 3 4
// 5 6 7 8