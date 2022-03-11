let [a,b] = [2,4];

function power(a,b){
    if(b==0){
        return 1;
    }
    if(a==1){
        return a;
    }else{
        return a*power(a,b-1);
    }

}
console.log(power(a,b))