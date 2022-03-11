var N = 625;

function square(N) {
    var l = 1;
    var h = N;
    while(l<=h){
        var mid = Math.floor((l+h)/2);
        if(mid*mid==N){
            return mid;
        }
        if(mid*mid>N){
            h = mid - 1;
        }else{
            l = mid + 1;
        }
    }
    return "-1";
}

console.log(square(N))