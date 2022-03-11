var str = "test string";
var N = str.length;

var obj = {};
for(var i=0; i<N; i++){
    if(obj[str[i]]==undefined){
        obj[str[i]]=1;
    }else{
        obj[str[i]]++;
    }
}

for(key in obj){
    if(obj[key]>1){
        console.log(key)
    }
}