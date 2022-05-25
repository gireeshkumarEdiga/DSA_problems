var matrix = [[1, 2, 3, 4],[5, 6, 7, 8],[9, 10, 11, 12],[13, 14, 15,16]]
var N = matrix.length;
var l=0;
var r=N-1;
var t=0;
var b=N-1;
var count = 0;
var sum="";

while(count<(N*N)){
    for(var i=l; i<=r; i++){
        sum+=matrix[t][i]+" ";
        count++;
    }
    t++;
    for(var i=t; i<=b; i++){
        sum+=matrix[i][r]+" ";
        count++;
    }
    r--;
    for(var i=r; i>=l; i--){
        sum+=matrix[b][i]+" ";
        count++;
    }
    b--;
    for(var i=b; i>=t; i--){
        sum+=matrix[i][l]+" ";
        count++;
    }
    l++;
}

console.log(sum);
