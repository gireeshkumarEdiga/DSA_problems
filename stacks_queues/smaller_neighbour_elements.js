function runProgram(input){
    input = input.split("\n");
    let N = Number(input[0])
    let data = input[1].split(" ").map(Number);
    var stack=[];
    var array=[];
    for(let i=0; i<N; i++){
        while(!stack.length==0 && stack[stack.length-1]>=data[i]){
            stack.pop();
        }
        if(stack.length==0){
            array[i]=-1;
        }else{
            array[i]=stack[stack.length-1];
        }
        stack.push(data[i]);
    }
    console.log(array.join(" "));
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