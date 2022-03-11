var array = [4,5,6,7,8,9,10,1,2];
N = array.length;
var target = 1;

function fun(array,N,target){
    var l = 0;
    var h = N-1;
    while(l<=h){
        var mid = Math.floor((l+h)/2)
        if(array[mid] == target){
            return mid;
        }else if(array[l]<=array[mid]){
            if(target >= array[l]  && target<array[h]){
                h = h-1;
            }else{
                l = l+1;
            }
        }else if(array[mid]<=array[h]){
            if(target>array[mid] && target<=array[h]){
                l = mid + 1;
            }else{
                h = mid - 1;
            }
        }
    }
    return -1;
}

console.log(fun(array,N,target));