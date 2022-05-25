var array = [[1,2, 3] ,[4,5,6],[7,8,9]]

function ninty(array){
    var output = "";
    for(var i=0; i<array.length; i++){
        for(var j=array[i].length-1; j>=0; j--){
            output+=array[j][i]+" ";
        }
        output+="\n";
    }
    return output;
}

console.log(ninty(array));