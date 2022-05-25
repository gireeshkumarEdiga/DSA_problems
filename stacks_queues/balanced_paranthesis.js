function girish(array){
    var stack = [];
    
    for(var i = 0; i<array.length; i++){
        
        if(array[i] == "{" || array[i] == "(" || array[i] == "[") stack.push(array[i]);
        else if(array[i]=="}" && stack[stack.length-1] == "{") stack.pop();
        else if(array[i]==")" && stack[stack.length-1] == "(") stack.pop();
        else if(array[i]=="]" && stack[stack.length-1] == "[") stack.pop();
        else return "not balanced";
        
    }
    
    return stack.length > 0 ? "not balanced" : "balanced" 
    
}

function runProgram(input){
     var input = input.split("\n");
     var N = Number(input[0]);
     var pos=1;
     for(var j=0; j<N; j++){
         var array=input[pos+j];
         
         var res=girish(array);
         console.log(res);
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