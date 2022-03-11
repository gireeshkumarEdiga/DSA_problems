// Top down
         // 1. recursion calls
         // 2. memorization ( storing the result, use whenver its required )



// let N =4;
// let res=[];
// res[N+1] = -1;



// let N = 4; 

// let res = [];
// for(let i=0; i<=N; i++){
//     res[i]=-1;
// }

// function ways(N){
//     if(N<0){
//         return 0;
//     }else if(N==0){
//         return 1;
//     }
//     if(res[N]!==-1){
//         return res[N];
//     }else {
//         return res[N]=ways(N-1)+ways(N-2)+ways(N-3);
//     }
// }

// console.log(ways(N));




// Bottom Up
     // 1. loops
     // 2. memorization ( storing the result, use whenver its required )


// var N = 4;

// function ways(N){
//     let array = new Array(N+1);
//     array[0] = 1;
//     array[1] = 1;
//     array[2] = 2;
//     for(let i=3; i<=N; i++){
//         array[i] = array[i-1]+array[i-2]+array[i-3];
//     }
//     return array[N];
// }
// console.log(ways(N))