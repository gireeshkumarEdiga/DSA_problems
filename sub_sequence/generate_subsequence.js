let str = "123";
let ans = "";

function gss(str,ans){
    if(str.length==0){
        return ans;
    }
    gss(str.substring(1),ans);
    gss(str.substring(1),ans+=str[0]);

}
console.log(gss(str,ans));