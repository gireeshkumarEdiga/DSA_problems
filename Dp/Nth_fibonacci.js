// Top down DP
    // 1. recursion calls
    // 2. memorization ( storing the result, use whenver its required )


// let N = 3;

// let res = [];
// for(let i=0; i<=N; i++){
//     res[i]=-1;
// }
// function fibo(N){
//     if(N==0 || N==1){
//         return N;
//     }else if(res[N]!==-1){
//         return res[N];
//     }else {
//         res[N]=fibo(N-1)+fibo(N-2);
//     }
//     return res[N];
// }
// console.log(fibo(N))




// Buttom Up
     // 1. loops
     // 2. memorization ( storing the result, use whenver its required )


//  let N = 6;

//  function fibo(N){
//      let res = new Array(N+1);
//      res[0] = 0;
//      res[1] = 1;
//      for(let i=2; i<=N; i++){
//          res[i] = res[i-1]+res[i-2];
//      }
//      return res[N];
//  }    

//  console.log(fibo(N))

