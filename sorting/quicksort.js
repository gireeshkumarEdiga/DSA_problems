function swap(array,li,ri){
    var temp = array[li];
    array[li] = array[ri];
    array[ri] = temp;
}


function partition(array,l,r){
    var pivot = array[Math.floor((l+r)/2)];
    var i = l;
    var j = r;
    while(i<=j){
        while(array[i]<pivot){
            i++;
        }
        while(array[j]>pivot){
            j--;
        }
        if(i<=j){
            swap(array,i,j);
            i++;
            j--;
        }
    }
    return i;
}


function quicksort(array,left,right){
    if(array.length>1){
        var index = partition(array,left,right);
        if(left<index-1){
            quicksort(array,left,index-1);
        }
        if(right>index){
            quicksort(array,index,right);
        }
    }
    return array;
}


function runProgram(input){
     var input = input.split("\n");
     var N = Number(input[0]);
     var array = input[1].split(" ").map(Number);
     
     var res = quicksort(array,0,N-1);
     console.log(res.join(" "));
    
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