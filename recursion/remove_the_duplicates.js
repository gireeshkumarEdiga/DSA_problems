let str = "axxxzayya";

function duplicate(str){
    if(str.length==0){
        return "Empty String!";
    }else if(s.length==1){
        return str;
    }
    let res = ""; 
    for(let i=0; i<str.length; i++){
        if(i==0){
            if(str[i]!==str[i+1]){
                res+=str[i];
            }
        }
        if(i==str.length-1){
            if(str[i]!==str[i-1]){
                res+=str[i];
            }
        }
        else{
            if(str[i]!==str[i+1] && str[i]!==str[i-1]){
                res+=str[i];   
            }
        }
    }
    if(str.length==res.length){
        return res;
    }else{
        return duplicate(res)
    }

}

console.log(duplicate(str))