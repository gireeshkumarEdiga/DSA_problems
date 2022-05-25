let array = [1,3,2,4];
let N = array.length;

function nearest(N,array){
    let stack = [array[N-1]];
    let ans = [-1];
    for(let i=N-2; i>=0; i--){
        while(stack[stack.length-1]<=array[i]){
            stack.pop();
        }
        if(stack.length == 0){
            ans.push(-1);
            stack.push(array[i]);
        }else{
            ans.push(stack[stack.length-1]);
            stack.push(array[i]);
        }
    }
    return ans.reverse().join(" ");
}

console.log(nearest(N,array));