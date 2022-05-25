function polindrome_array(array,N){
    for(var i=0; i<N; i++){
        if(ispolindrome(array[i])==true){
            return 1;
        }
    }
    return 0;
}

function ispolindrome(x){
    console.log(x);
    var n = Number(x);
    var size =0;
    while(n>0){
        size++;
        n=n/10;
    }
    if(size == 1){
        return true;
    }

    var m = n;
    var digit = 1;
    var rev = 0;
    while(n>0){
        digit = n%10;
        n = n/10;
        rev = rev*10+digit;
    }

    if(rev == m){
        return true
    }else {
        return false;
    }
}


function runProgram(input){
    var input = input.split("\n");
    var T = Number(input[0]);
    var pos = 1;
    for(var i=0; i<T; i++){
        var N = Number(input[pos]);
        var array = input[pos+1].split(" ").map(Number);
        pos+=2;

         var res = polindrome_array(array,N);
         console.log(res);
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







// var array = [111,222,333,444,555];

// function allpolindrom(array){

//     var res = pollyall(array);
//     console.log(res);

//     function pollyall(array){
//         var count=0;
//         for(var i=0; i<array.length; i++){
//             if(ispolindrome(array[i])){
//                 count++;
//             }
//         }
//         if(count == array.length){
//             return 1;
//         }else{
//             return 0;
//         }
//     }

//     function ispolindrome(x){
//         x = Number(x);
//         var y = x;
//         var digit = 1
//         var rev = 0
//         while(x>0){
//             digit = x%10;
//             x = Math.floor(x/10);
//             rev = rev*10+digit;
//         }
//         if(rev==y){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// allpolindrom(array)