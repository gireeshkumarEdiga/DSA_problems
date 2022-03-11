var array = [1,2,8,10,10,12,19,31];
var N = array.length;
var target = 4;

function fun(array,N,target){
    var res = [];
    var l = 0;
    var h = N-1;
    var f = -1;
    var c = -1;
    while(l<=h){
        var mid = Math.floor((l+h)/2);
        if(array[mid] == target){
            f = array[mid];
            c = array[mid];
            break;
        }else if(target> array[mid]){
            f = array[mid];
            l = mid + 1;
        }else{
            c = array[mid];
            h = mid - 1;
        }  
    }
    res.push(f,c);
    return res.join(" ");
}

console.log(fun(array,N,target));