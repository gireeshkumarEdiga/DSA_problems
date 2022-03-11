// Top down DP
    // 1. recursion calls
    // 2. memorization ( storing the result, use whenver its required )


// let array = [6,2,3,1];
// let sum = 5;
// let N = array.length;

// let dp=[];
// let sum1=[];
// for(let i=0; i<=N; i++){
//     dp[i]=-1;
//     sum1[i]=-1;
// }

// function subset(array,N,sum){
//     if(sum==0){
//         return "true";
//     }
//     if(N==0){
//         return "false";
//     }
//     if(array[N-1]>sum){
//         return dp[N],sum1=subset(array,N-1,sum);
//     }else{
//         return dp[N],sum1=subset(array,N,sum-array[N-1]) || subset(array,N-1,sum);
//     }
// }
// console.log(subset(array,N,sum))





// Bottom Up
     // 1. loops
     // 2. memorization ( storing the result, use whenver its required )


let array = [6,2,3,1];
let sum = 5;
let N = array.length;

function subset(array,N,sum){
    let dp=[N-1][sum+1];
    for(let i=0; i<=sum; i++){
        dp[0][i]=false;
    }
    for(let i=0; i<=N; i++){
        dp[i][0]=true;
    }
    for(let i=1; i<=N; i++){
        for(let j=i; j<=sum; j++){
            if(array[i-1]>j){
                dp[i][j]=dp[i-1][j];
            }else{
                dp[i][j]=dp[i-1][j-array[i-1]] || dp[i-1][j];
            }
        }
    }
    return dp[N][sum];
}
console.log(subset(array,N,sum));