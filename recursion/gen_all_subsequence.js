let str = "abc";
let l = 0;
let h = str.length-1;
let ans = ""

function generate(ans,str,l,h){
    if(l<=h-1 && !ans.length==0){
        console.log(ans);
    }
    for(let i=l; i<=h; i++){
        generate(ans+str[i],ans,i+1,h)
    }
}
generate(ans,str,l,h);