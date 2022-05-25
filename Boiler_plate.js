function runProgram(input){
   var str = input;

function rahul(str){
    var output = "";
    for(var i=str.length-1; i>=0; i--){
        output+=str[i];
    }
    var out = "";
    for(var j=0; j<output.length; j--){
        if(output[i]=="A"){
            out+="T";
        }else if(output[i]=="T"){
            out+="A";
        }else if(output[i]=="G"){
            out+="C";
        }else{
            out+="G";
        }
    }
    console.log(out);
}

rahul(str);
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