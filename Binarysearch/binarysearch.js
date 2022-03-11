var array = [1,2,3,4,5,6,7,8,9];
var key = 3;

function binary(array,key){
    var l = 0;
    var h = array.length-1;
    
    while(l<h){
        var mid = Math.floor((l+h)/2);
        if(array[mid]==key){
            return "True"
        }
        if(array[mid]>key){
            h=mid-1;
        }else{
            l=mid+1;
        }
    }
    return "False";
}

console.log(binary(array,key));





