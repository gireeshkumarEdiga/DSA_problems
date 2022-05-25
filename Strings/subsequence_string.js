var string = "abcdef";
var N = string.length;

for(var i=0; i<N; i++){
    for(var j=i; j<N; j++){
        var out="";
        for(var k=i; k<=j; k++){
            out+=string[j];
        }
        console.log(out);
    }    
}


for(var i=0; i<N; i++){
    var out = "";
    for(var j=i; j<N; j++){
        out+=string[j];
    }    
    console.log(out);
}

