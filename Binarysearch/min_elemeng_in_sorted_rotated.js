var array = [4,5,6,7,8,9,10,1,2];
var N = array.length;
var target = 1;

function fun(array,N,target){
    var l = 0;
    var h = N-1;
    // if(array[l]<=array[l]){
    //     return 0;
    // }
    while(l<=h){
        var mid = Math.floor((l+h)/2);
        if(array[mid]<array[mid-1]){
            return mid;
        }else if(array[mid]>array[mid+1]){
            return mid+1;
        }else if(array[l]<=array[mid]){
            l = mid + 1;
        }else {
            h = mid - 1;
        }
    }
    return "-1";
}

console.log(fun(array,N,target));