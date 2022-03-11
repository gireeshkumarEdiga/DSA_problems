let [a,b] = [64,48];

// function gcd(b,a){
//     if(b==0){
//         return a;
//     }else{
//         return gcd(a%b,b);
//     }
// }
// console.log(gcd(b,a))

function gcd(a,b){
    if(a==0){
        return b;
    }else if(b==0){
        return a;
    }else{
        return gcd(b%a,a);
    }
}
console.log(gcd(a,b))