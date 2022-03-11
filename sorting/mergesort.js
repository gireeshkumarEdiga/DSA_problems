function mergesort(array,l,r){
    if(l<r){
        var mid = Math.floor((l+r)/2);
        mergesort(array,l,mid);
        mergesort(array,mid+1,r);
        return merging(array,l,mid,r);
    }
}

function merging(array,l,mid,r){
    var left = [];
    var right = [];
    var m = 0;
    var n = 0;
    var k = l;
    
    for(var i=l; i<=mid; i++){
        left.push(array[i]);
    }
    for(var j=mid+1; j<=r; j++){
        right.push(array[j]);
    }
    
    while(m<left.length && n<right.length){
        if(left[m]<=right[n]){
            array[k] = left[m];
            k++;
            m++;
        }else{
            array[k] = right[n];
            k++;
            n++;
        }
    }
    
    while(m<left.length){
        array[k] = left[m];
        k++;
        m++;
    }
    while(n<right.length){
        array[k] = right[n];
        k++;
        n++;
    }
    //console.log(array);
    return array.join(" ");
}


function runProgram(input){
     var input = input.split("\n");
     var T = Number(input[0]);
     var array = input[1].split(" ").map(Number);
     
     if(array.length>1){
         var res = mergesort(array,0,array.length-1);
         console.log(res);
     }else {
         console.log(array.join(" "));
     }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});
             