var array = [2,4,6,9,81,25,100,144];

var output1 = [];

for(var i=0; i<array.length; i++){
    for(var j=1; j<array[i]; j++){
        if(j*j==array[i]){
            output1.push(array[i]);
        }
    }
}

var output2 = [];
for(var k=0; k<output1.length; k++){
    var fact=1;
    for(var l=2; l<=output1[k]; l++){
        fact*=l;
    }
    output2.push(fact)
}

console.log(output2.join(" "));