var s = "masaischool";

function string(s) {
    if(s===""){
        return 0;
    }else{
        return 1+string(s.substring(1));
    }
}

console.log(string(s))