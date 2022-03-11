let stack=[1,2,3];

function reverse(){
    if(stack.length>0){
        let x = stack[stack.length-1];
        stack.pop();
        reverse();
        insert(x);
    }
}

reverse();


function insert(x){
    if(stack.length==0){
        stack.push(x);
    }else{
    let a = stack[stack.length-1];
    stack.pop();
    insert(x);
    stack.push(a);
    }
}

console.log(stack);