var array = [1,1,2,2,2,2,2,2,4,5,6];
var target = 2;

function last(array,target){
    var l = 0;
    var h = array.length-1;
    var ans = -1;
    while(l<=h){
        var mid = Math.floor((l+h)/2);
        if(target == array[mid]){
            ans = mid;
            l = mid + 1;
        }else if(target>array[mid]){
            l=mid+1;
        }else{
            h=mid-1;
        }
    }
    return ans;
}

console.log(last(array,target));