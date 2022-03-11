// var array = [1,3,4,2,2];
// var N = array.length;
// var out = new Set;

// for(var i=0; i<N; i++){
//     for(var j=i+1; j<N; j++){
//         if(array[i]==array[j]){
//             out.add(array[j]);
//         }
//     }
// }
// console.log(out);




var array = [1,2,3,4,2,2,7];
var obj = {};

for(var i=0; i<array.length; i++){
    if(obj[array[i]] == undefined ){
        obj[array[i]]=1;
    }else{
        obj[array[i]]++;
    }
}
console.log(obj)
var max = 0;
let x = 0;
for(key in obj) {
    if(max < obj[key]){
        max = obj[key];
        x = key
    }
}
console.log(x);