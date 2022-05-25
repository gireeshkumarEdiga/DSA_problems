var mat=[[10,20,30,40],[15,25,35,45],[27,29,37,48],[32,33,39,50]];
var N = mat.length;
var M = mat[0].length;

var output = [];
for(var i=0; i<mat.length; i++){
    //console.log(mat[i])
    for(var j=0; j<mat[i].length; j++){
        output.push(mat[i][j]);
    }
}
output.sort();
var sum = "";
count=0;
for(var i=0; i<N; i++){
    for(var j=0; j<M; j++){
        sum+=output[count]+" ";
        count++;
    }
    sum+="\n"
}
console.log(sum)