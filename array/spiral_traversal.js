function runProgram(input){
    var input = input.split("\n");
    var N = Number(input[0]);
    var pos=1;
    var array = [];
    for(var i=0; i<N; i++){
        var arr = input[pos+i].split(" ").map(Number);
        array.push(arr);
    }
    var size=N*N;
    var count=0;
    var left=0;
    var right=N-1;
    var top=0;
    var bottom=N-1;
    var output="";
    while(count<size){
        for(var j=left; j<=right; j++){
            output+=array[top][j]+" ";
            count++;
        }
        top++;
        for(var j=top; j<=bottom; j++){
            output+=array[j][right]+" ";
            count++;
        }
        right--;
        for(var j=right; j>=left; j--){
            output+=array[bottom][j]+" ";
            count++;
        }
        bottom--;
        for(var j=bottom; j>=top; j--){
            output+=array[j][left]+" ";
            count++;
        }
        left++;
    }
    console.log(output);
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



//4
// 1 2 3 4
// 5 6 7 8
// 1 2 3 4
// 5 6 7 8