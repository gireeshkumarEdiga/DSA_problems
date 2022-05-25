let N = 9;

let string = "masai";

function polindrome(N,string){
    let rev= "";
    for(let i=N-1; i>=0; i--){
        rev+=string[i];
    }
    if(rev == string){
        return "Yes";
    }else{
        return "No";
    }
}
console.log(polindrome(N,string));