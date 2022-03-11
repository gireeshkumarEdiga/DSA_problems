let s="";
let open = 0;
let close = 0;
let n = 3;

function paranthesis(s,open,close,n){
    if(s.length==2*n){
        print(s);
        return
    }
    if(open<n){
        paranthesis(s+="(",open+1,close,n);
    }
    if(open>close){
        paranthesis(s+=")",open,close-1,n);
    }

}
paranthesis(s,open,close,n);