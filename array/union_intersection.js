// union (brute force)

// var array1 = [25,58,50,40,52];
// var array2 = [25,58,75];
// var N = array1.length;
// var M = array2.length;

// function proba(array1,array2,N,M){
//     var s = new Set();

//     for(var i=0; i<N; i++){
//         s.add(array1[i]);
//     }

//     for(var j=0; j<M; j++){
//         s.add(array2[j]);
//     }

//     return s;
// }

// console.log(proba(array1,array2,N,M));



// intersection ( brute force)


var array1 = [25,58,50,40,52];
var array2 = [25,58,75];
var N = array1.length;
var M = array2.length;

function proba(array1,array2,N,M){
    var i=0;
    var j=0;
    var sum = "";
    array1.sort();
    array2.sort();
    while(i<N && j<M){
        if(array1[i] > array2[j]){
            j++;
        }else if(array1[i]<array2[j]){
            i++;
        }else{
            sum+=array1[i]+" ";
            i++;
            j++;
        }
    }
    return sum;
}

console.log(proba(array1,array2,N,M))