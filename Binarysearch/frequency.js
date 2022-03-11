var array = [1,1,2,2,2,2,2,2,4,5,6];
var target = 2;

function frequency(array,target){
    var a = first(array,target);
    var b = last(array,target);
    if(a==-1 && b ==-1){
        return 0;
    }else{
        return b-a+1;
    }

    function first(array,target){
        var ans = -1;
        var l = 0;
        var h = array.length-1;
        while(l<=h){
            var mid = Math.floor((l+h)/2);
            if(target == array[mid]){
                ans = mid;
                h = mid-1;
            }else if(target>array[mid]){
                l = mid+1;
            }else{
                h = mid-1;
            }
        }
        return ans;
    }


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
    
}

console.log(frequency(array,target));