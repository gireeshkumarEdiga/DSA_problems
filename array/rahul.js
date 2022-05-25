var str = "ACCGGGTTTT"

function rahul(str){
    var output = "";
    for(var i=str.length-1; i>=0; i--){
        output+=str[i];
    }
    var out = "";
    for(var j=0; j<output.length; j++){
        if(output[j]=="A"){
            out+="T";
        }else if(output[j]=="T"){
            out+="A";
        }else if(output[j]=="G"){
            out+="C";
        }else{
            out+="G";
        }
    }
    console.log(out);
}

rahul(str);
