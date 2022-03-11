var string = "abba";
var N = string.length;

var output ="";
for(var i=N-1; i>=0; i--){
    output+=string[i];
}
//console.log(output);

if(string === output){
    console.log("polindrome");
}else{
    console.log("not a polindrome");
}