// var array = [2,24,29,21,23,9];

// function reverse(array){
//     var output = [];
//     for(var i=array.length-1; i>=0; i--){
//         output+=array[i]+" ";
//     }
//     return output
// }
// var res = reverse(array);
// console.log(res);



// var array = [2,24,29,21,23,9];
// var start = 0;
// var end = array.length-1;

// while(start<end){
//     var temp = array[start];
//     array[start] = array[end];
//     array[end] = temp;
//     start++;
//     end--;
// }

// console.log(array);


// var array = [2,24,29,21,23,9,99];
// var start = 0;
// var end = array.length-1;

// function reverse(array,start,end){
//     if(start>=end){
//         return
//     }else{
//         var temp = array[start];
//         array[start] = array[end];
//         array[end] = temp;
//     }
//     reverse(array,start+1,end-1);
//     return array;
// }
// var res = reverse(array,start,end);
// console.log(res);



// let array = [19,2,24,29,21,23,9,99];
// let max = array[0];
// let min = array[0];

// for(var i=0; i<array.length; i++){
//     if(max<array[i]){
//         max=array[i];
//     }else if(min>array[i]){
//         min=array[i];
//     }
// }
// console.log("max : "+max+" min : "+min);


// let array = [19,2,24,29,21,23,9,99];
// let start = 0;
// let end = array.length-1;
// let min = array[0];

// function minimum(array,min,start,end){
//     if(start<end){
//         if(min>array[start]){
//             min = array[start];
//         }
//         minimum(array,min,start+1,end)
//     }
//     return min;
// }

// let res = minimum(array,min,start,end);
// console.log(res);


// let array = [19,18,2,24,29,21,23,9,99];
// let k = 3;


// function kthsmallest(array,k){
//     array.sort((a,b)=>a-b)
//     return array[k-1];
// }
// console.log(kthsmallest(array,k));


// function kthlargest(array,k){
//     array.sort((a,b)=>a-b)
//     return array[array.length-k];
// }
// console.log(kthlargest(array,k));




// let array = [3,5,0,9,8,4,6];
// let N = array.length;
// let min = 0;
// let temp = 0;

// for(let i=0; i<N-1; i++){
//     min = i;
//     for(let j=i+1; j<N; j++){
//         if(array[min]>array[j]){
//             min = j;
//         }
//     }
//     temp = array[min];
//     array[min]= array[i];
//     array[i] = temp;
// }
// console.log(array)



// let array = [3,5,0,9,8,4,6];
// let N = array.length;

// for(let i=0; i<N; i++){
//     let min = i;
//     for(let j=i+1; j<N; j++){
//         if(array[min]>array[j]){
//             min = j;
//         }
//     }
//     var temp = array[i];
//     array[i] = array[min]
//     array[min] = temp;
// }
// console.log(array);


// let array = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
// let N = array.length;

// for(let i=0; i<N-1; i++){
//     for(let j=0; j<N-i-1; j++){
//         if(array[j]>array[j+1]){
//             var temp = array[j];
//             array[]
//         }
//     }
// }

// console.log(array);



// let array1 = [25,58,50,40,52];
// let array2 = [25,58,75];

// function union(array1,array1){
//     var s = new Set();
//     for(let i=0; i<array1.length; i++){
//         s.add(array1[i]);
//     }
//     for(let j=0; j<array2.length; j++){
//         s.add(array2[j]);
//     }
//     return s;
// }

// console.log(union(array1,array2));


// var out = [];
// for(let i=0; i<array1.length; i++){
//     for(let j=0; j<array2.length; j++){
//         if(array1[i]==array2[j]){
//             out.push(array2[j]);
//         }
//     }
// }
// console.log(out.join(" "))



// var array1 = [25,58,50,40,52];
// var array2 = [25,58,75];
// var N = array1.length;
// var M = array2.length;

// function proba(array1,array2,N,M){
//     var i=0;
//     var j=0;
//     array1.sort();
//     array2.sort();
//     var sum = "";
//     while(i<N && j<M){
//         if(array1[i]>array2[j]){
//             j++;
//         }else if(array1[i]<array2[j]){
//             i++;
//         }else{
//             sum+=array1[i]+" ";
//             i++;
//             j++;
//         }
//     }
//     return sum;
// }

// console.log(proba(array1,array2,N,M))



// var array = [1,2,3,4,5];

// var arr = [];
// arr.push(array[array.length-1]);

// for(var i=0; i<array.length-1; i++){
//     arr.push(array[i]);
// }

// console.log(arr);




// var array1 = [25,58,50,40,52];
// var array2 = [25,58,75];
// var N = array1.length;
// var M = array2.length;

// function intersection(array1,array2){
//     var i = 0;
//     var j = 0;
//     var sum = [];
//     while(i<N && j<M){
//         if(array1[i]>array2[j]){
//             j++;
//         }else if(array1[i]<array2[j]){
//             i++;
//         }else{
//             sum.push(array1[i]);
//             i++;
//             j++;
//         }
//     }
//     return sum;

// }

// console.log(intersection(array1,array2));



// var array = [1,2,3,-2,5];

// function subarray(array){
//     var maxum=0;
//     for(let i=0; i<array.length; i++){
//         for(let j=i; j<array.length; j++){
//             var sum=0;
//             for(let k=i; k<=j; k++){
//                 sum+=array[k];
//             }
//             if(maxum<sum){
//                 maxum=sum;
//             }
//         }
//     }
//     return maxum;
// }

// console.log(subarray(array));


// var array = [1,3,4,2,3,3,3,2,2];

// function duplicate(array){
//     var obj = {}
//     for(var i=0; i<array.length; i++){
//         if(obj[array[i]]==undefined){
//             obj[array[i]]=1;
//         }else{
//             obj[array[i]]++;
//         }
//     }
//     console.log(obj)
//     var max = 1;
//     var ans = [];
//     for(key in obj){
//         if(obj[key]>max){
//             ans.push(key)
//         }
//     }
//     return ans;
// }

// console.log(duplicate(array))

// var prices = [7,1,5,3,6,4,9];

// function buysell(prices){
//     var sum=0;
//     for(let i=0; i<prices.length; i++){
//         for(let j=i; j<prices.length; j++){
//             var out = prices[j]-prices[i];
//             if(out>sum){
//                 sum=out;
//             }
//         }
//     }
//     return sum;
// }
// console.log(buysell(prices))


// var array = [1, 5, 7, 1];
// var K = 6;
// function pair(array,K){
//     var count=0;
//     for(let i=0; i<array.length; i++){
//         for(let j=i; j<array.length; j++){
//             if(K==array[i]+array[j]){
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// console.log(pair(array,K))



// var array = [1,4,45,6,20,8];
// var N = array.length;
// var sum = 13;

// function triplet(array,N,sum){
//     for(var i=0; i<N; i++){
//         var l = i+1;
//         var r = N-1;
//         while(i<r){
//             if(array[i]+array[l]+array[r] === sum){
//                 return "True"
//             }else if(array[i]+array[l]+array[r]>sum){
//                 r--;
//             }else if(array[i]+arr[l]+array[r]<sum){
//                 l++;
//             }
//         }
//     }
//     return "False";
// }

// console.log(triplet(array,N,sum))




// var array = [111,222,333,444,555];

// function allpolindrom(array){

//     var res = pollyall(array);
//     console.log(res);

//     function pollyall(array){
//         var count=0;
//         for(var i=0; i<array.length; i++){
//             if(ispolindrome(array[i])){
//                 count++;
//             }
//         }
//         if(count == array.length){
//             return 1;
//         }else{
//             return 0;
//         }
//     }

//     function ispolindrome(x){
//         x = Number(x);
//         var y = x;
//         var digit = 1
//         var rev = 0
//         while(x>0){
//             digit = x%10;
//             x = Math.floor(x/10);
//             rev = rev*10+digit;
//         }
//         if(rev==y){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// allpolindrom(array)


// var matrix = [[1, 2, 3, 4],[5, 6, 7, 8],[9, 10, 11, 12],[13, 14, 15,16]]
// var N = matrix.length;
// var l=0;
// var r=N-1;
// var t=0;
// var b=N-1;
// var count = 0;
// var sum="";

// while(count<(N*N)){
//     for(var i=l; i<=r; i++){
//         sum+=matrix[t][i]+" ";
//         count++;
//     }
//     t++;
//     for(var i=t; i<=b; i++){
//         sum+=matrix[i][r]+" ";
//         count++;
//     }
//     r--;
//     for(var i=r; i>=l; i--){
//         sum+=matrix[b][i]+" ";
//         count++;
//     }
//     b--;
//     for(var i=b; i>=t; i--){
//         sum+=matrix[i][l]+" ";
//         count++;
//     }
//     l++;
// }

// console.log(sum);


// var mat=[[10,20,30,40],[15,25,35,45],[27,29,37,48],[32,33,39,50]];
// var N = mat.length;
// var M = mat[0].length;

// var output = [];
// for(var i=0; i<mat.length; i++){
//     //console.log(mat[i])
//     for(var j=0; j<mat[i].length; j++){
//         output.push(mat[i][j]);
//     }
// }
// output.sort();
// var sum = "";
// count=0;
// for(var i=0; i<N; i++){
//     for(var j=0; j<M; j++){
//         sum+=output[count]+" ";
//         count++;
//     }
//     sum+="\n"
// }
// console.log(sum)


// var array = ["h","e","l","l","o"];

// function rev(array){
//     var out= "";
//     for(var i=array.length-1; i>=0; i--){
//         out+=array[i]+" ";
//     }
//     return out;
// }

// console.log(rev(array))




// let name = "abbac";

// function polin(name){
//     var out = "";
//     for(var i=name.length-1; i>=0; i--){
//         out+=name[i];
//     }
//     //return out;
//     if(name === out){
//         return "polindrome";
//     }else{
//         return "not a polindrome";
//     }
// }

// console.log(polin(name))





// let array = "girishkumar";

// function duplicate(array){
//     var out = {};
//     for(var i=0; i<array.length; i++){
//         if(out[array[i]] == undefined){
//             out[array[i]] = 1;
//         }else{
//             out[array[i]]++;
//         }
//     }
//     console.log(out);
//     let max=1;
//     let obj=[];
//     for(let key in out){
//         if(out[key]>max){
//             // if(obj[key] == undefined){
//             //     obj[key]=1;
//             // }else{
//             //     obj[key]++;
//             // }
//             obj.push(key)
//         }
//     }
//     return obj;
// }

// console.log(duplicate(array))




// let array = "giri";

// function subs(array){
//     for(var i=0; i<array.length; i++){
//         for(var j=i; j<array.length; j++){
//             var out="";
//             for(var k=i; k<=j; k++){
//                 out+=array[k];
//             }
//             console.log(out);
//         }
//     }
// }

// subs(array);


// function subs(array){
//     for(var i=0; i<array.length; i++){
//         let out="";
//         for(var j=i; j<array.length; j++){
//             out+=array[j];
//         }
//         console.log(out);
//     }
// }
// subs(array);

// function anagram(a,b){
//     if(a.length != b.length){
//         return false;
//     }
//     let str1 = a.split("").sort().join('');
//     let str2 = b.split("").sort().join('');
//     if(str1 == str2){
//         return true;
//     }else{
//         return false;
//     }

// }

// console.log(anagram("indian","ndiani"))


// var array = [1, 3, 5, 5, 5, 5, 67, 123, 125];
// var target = 5;


// function lastOccurence(array,target){
//     var l=0;
//     var h = array.length-1;
//     while(l<=h){
//         var mid = Math.floor((l+h)/2);
//         if(target === array[mid]){
//             var ans = mid;
//             h=mid-1;
//         }else if(target>array[mid]){
//             l=mid+1;
//         }else if(target<array[mid]){
//             h=mid-1;
//         }
//     }
//     return ans;
// }

// console.log(lastOccurence(array,target))

// function lastOccurence(array,target){
//     var l = 0;
//     var h = array.length-1;
//     while(l<=h){
//         var mid = Math.floor((l+h)/2);
//         if(target == array[mid]){
//             var ans = mid;
//             l = mid+1;
//         }else if(target>array[mid]){
//             l=mid+1;
//         }else if(target<array[mid]){
//             h=mid-1;
//         }
//     }
//     return ans;
// }

// console.log(lastOccurence(array,target))

// function frequency(array,target){
//     var a = first(array,target)
//     var b = last(array,target);
//     if(a==-1 && b==-1){
//         return 0;
//     }else{
//         return b-a+1;
//     }

//     function first(array,target){
//         var ans = -1;
//         var l = 0;
//         var h = array.length-1;
//         while(l<=h){
//             var mid=Math.floor((l+h)/2);
//             if(target == array[mid]){
//                 ans = mid;
//                 h=mid-1;
//             }else if(target>array[mid]){
//                 l=mid+1;
//             }else if(target<array[mid]){
//                 h=mid-1;
//             }
//         }
//         return ans;
//     }

//     function last(array,target){
//         var ans = -1;
//         var l=0;
//         var h=array.length-1;
//         while(l<=h){
//             var mid = Math.floor((l+h)/2);
//             if(target==array[mid]){
//                 ans = mid;
//                 l=mid+1;
//             }else if(target>array[mid]){
//                 l=mid+1;
//             }else if(target<array[mid]){
//                 h=mid-1;
//             }
//         }
//         return ans;

//     }
// }

// console.log(frequency(array,target))



// var array = [4,5,6,7,0,1,2];
// var target = 3;

// function sorted(array,target){
//     for(let i=0; i<array.length; i++){
//         if(array[i] === target){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(sorted(array,target));



// var N = 10;

// function squares(N){
//     let count=0;
//     for(var i=1; i<N; i++){
//         var j=i*i;
//         if(j<N){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(squares(N));



// let array = [12,0];
// let N = array.length;

// function product_array(array,N){
//     let out = [];
//     for(let i=0; i<N; i++){
//         var sum = 1;
//         for(let j=0; j<N; j++){
//             if(i !== j){
//                 sum*=array[j];
//             }
//         }
//         out.push(sum);
//     }
//     return out.join(" ");
// }

// console.log(product_array(array,N))


// var N = 6;
// var array1 = [1,3,0,5,8,5];
// var array2 = [2,4,6,7,9,9];

// function meeting(array1,array2,N){
//     var count=0;
//     for(var i=0; i<N; i++){
//         if(array1[i]<array2[i] && array2[i]<array1[i+1]){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(meeting(array1,array2,N));


// let array = [1,2,3,4,5,2,5,2,7];

// function duplicate(array){
//     let obj = {};
//     for(let i=0; i<array.length; i++){
//         if(obj[array[i]] == undefined){
//             obj[array[i]]=1;
//         }else{
//             obj[array[i]]++;
//         }
//     }
//     console.log(obj)
//     let max = 0;
//     for(key in obj){
//         if(obj[key]>max){
//             max = obj[key];
//             var ans = key;
//         }
//     }
//     return ans;
// }

// console.log(duplicate(array));


// let array = [1,2,3,4,5,6];
// let left = 0;
// let right = array.length-1;

// let left = 0;
// let right = array.length-1;
// let temp = 0;

// while(left<right) {
//     temp = array[left];
//     array[left] = array[right];
//     array[right] = temp;
//     left++;
//     right--;
// }

// console.log(array);



// function reverse(array,left,right){
//     if(left>=right){
//         return array;
//     }
//     let temp = array[left];
//     array[left] = array[right];
//     array[right] = temp;
//     reverse(array,left+1,right-1);
//     return array;
// }

// console.log(reverse(array,left,right))


// var array = [3,5,0,1,9,8,4,6]

// function selection(array){
//     for(let i=0; i<array.length-1; i++){
//         let min = i;
//         for(let j=i+1; j<array.length; j++){
//             if(array[j]<array[min]){
//                 min = j;
//             }
//         }
//         let temp = array[i];
//         array[i] = array[min];
//         array[min] = temp;
//     }
//     return array;
// }

// console.log(selection(array));


// function bubble(array){
//     for(let i=0; i<array.length; i++){
//         for(let j=0; j<array.length-i-1; j++){
//             if(array[j]>array[j+1]){
//                 let temp = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = temp;
//             }
//         }
//     }
//     return array;
// }

// console.log(bubble(array));



// let array = [1,1,2,2,2,2,2,2,4,5,6];
// let target = 2;

// function frequency(array,target){
//     let a = first(array,target);
//     let b = last(array,target);
//     if(a==-1 && b==-1){
//         return 0;
//     }else{
//         return b-a+1;
//     }

//     function first(array,target){
//         var ans = -1;
//         var l = 0;
//         var r = array.length-1;
//         while(l<=r){
//             let mid = Math.floor((l+r)/2);
//             if(target === array[mid]){
//                 ans = mid;
//                 r = mid - 1;
//             }else if(target>array[mid]){
//                 l = mid+1;
//             }else if(target<array[mid]){
//                 r = mid-1;
//             }
//         }
//         return ans;
//         // console.log(ans);
//     }

//     function last(array,target){
//         var ans = -1;
//         var l = 0;
//         var r = array.length-1;
//         while(l<=r){
//             let mid = Math.floor((l+r)/2);
//             if(target === array[mid]){
//                 ans = mid;
//                 l = mid+1;
//             }else if(target>array[mid]){
//                 l = mid+1;
//             }else if(target<array[mid]){
//                 r = mid-1;
//             }
//         }
//         return ans;
//         // console.log(ans)
//     } 

// }

// console.log(frequency(array,target));


// let array = [1,2,3,-2,5];
// let N = array.length;

// function largest(array,N){
//     let max = 0;
//     for(let i=0; i<array.length; i++){
//         for(let j=i; j<array.length; j++){
//             var sum = 0;
//             for(let k=i; k<=j; k++){
//                 sum+=array[k];
//             }
//             if(sum>max){
//                 max = sum;
//             }
//         }
//     }
//     return max;
// }
// console.log(largest(array,N))


// var array = [10,20,30,40,6,50,60,70];
// var min = array[0];
// var i=0;
// var N = array.length;

// function minimum(array,N){
//     if(i<N){
//         if(min>array[i]){
//             min = array[i];
//         }
//         i++;
//         minimum(array,N);
//     }
//     return min;
// }

// console.log(minimum(array,N));



// var array = [10,20,30,40,6,50,60,70];
// var max = array[0];
// var i=0;
// var N = array.length;

// function minimum(array,N){
//     if(i<N){
//         if(max<array[i]){
//             max = array[i];
//         }
//         i++;
//         minimum(array,N);
//     }
//     return max;
// }

// console.log(minimum(array,N));





// var N = 11121;

// function allpolindrom(N){
//     let M = N;
//     let digit=1;
//     let rev = 0;
//     while(N>0){
//         digit = N%10;
//         N = Math.floor(N/10);
//         rev = rev*10+digit;
//     }
//     if(M==rev){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(allpolindrom(N))


// let x = 25;

// function square(x){
//     if(x==0 || x==1){
//         return x;
//     }
//     let i=1;
//     let res = 1;
//     while(res<=x){
//         i++;
//         res=i*i;
//     }
//     return i;
// }

// console.log(square(x));



// let array = [1,4,45,6,20,2];
// let N = array.length;
// let sum = 13;

// function triplet(array,sum){
//     for(let i=0; i<N; i++){
//         let l=i+1;
//         let r=N-1;
//         while(l<r){
//             if(array[i]+array[l]+array[r] == sum){
//                 return "True";
//             }else if(array[i]+array[l]+array[r]>sum){
//                 r--;
//             }else if(array[i]+array[l]+array[r]<sum){
//                 l++;
//             }
//         }
//     }
//     return "False";
// }

// console.log(triplet(array,sum));


// var str1 = "indian";
// var str2 = "ndiani";

// function anagram(str1,str2){
//     if(str1.length !== str2.length){
//         return "False";
//     }
//     let a = str1.split("").sort().join("");
//     let b = str2.split("").sort().join("");
//     if(a===b){
//         return "True";
//     }else{
//         return "False";
//     }
// }

// console.log(anagram(str1,str2))



// var array = [1,2,3,4,5,6,7,8,9];
// var key = 3;

// function binary(array,key){
//     let l = 0;
//     let r = array.length-1;

//     while(l<r){
//         let mid = Math.floor((l+r)/2);
//         if(key==array[mid]){
//             return "True";
//         }else if(key>array[mid]){
//             l=mid+1;
//         }else if(key<array[mid]){
//             r=mid-1;
//         }
//     }
//     return "False";
// }

// console.log(binary(array,key));



// let N = 625;

// function square(N){
//     let l=1;
//     let h=N;
//     while(l<=h){
//         let mid = Math.floor((l+h)/2);
//         if(N==mid*mid){
//             return mid;
//         }
//         if(N>mid*mid){
//             l=mid+1;
//         }else if(N<mid*mid){
//             h=mid-1;
//         }
//     }
//     return "-1";
// }

// console.log(square(N));


// let N = 4;

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



// let N = 25;

// function binary(N){
//     if(N==0){
//         return 0;
//     }else{
//         binary(Math.floor(N/2));
//         console.log(N%2);
//     }
// }
// binary(N);


// let N = 5;

// function factorial(N){
//     if(N==0 || N==1){
//         return 1;
//     }else{
//         return N*factorial(N-1);
//     }
// }

// console.log(factorial(N));


// let N = 6;

// function fibonacci(N){
//     if(N==0){
//         return 0;
//     }else if(N==1){
//         return 1;
//     }else {
//         return fibonacci(N-1)+fibonacci(N-2);
//     }
// }

// console.log(fibonacci(N))


// let [a,b] = [2,4];

// function power(a,b){
//     if(b==0){
//         return 1;
//     }
//     if(a==1){
//         return a;
//     }else{
//         return a*power(a,b-1);
//     }
// }

// console.log(power(a,b));


// let N = 12345;

// function natural(N){
//     if(N%10==0){
//         return N;
//     }else{
//         return N%10+natural(Math.floor(N/10));
//     }
// }

// console.log(natural(N));


// l

// let x = [1,2];
// let y = [5,7];

// console.log([...x,...y]);


// var N = 6;

// function fibo(N){
//     if(N==0){
//         return 0;
//     }else if(N==1){
//         return 1;
//     }else {
//         return fibo(N-1)+fibo(N-2);
//     }
// }

// console.log(fibo(N))


//bubble sort

// var array = [4,2,6,7,3,9,0];

// for(var i=0; i<array.length-1; i++){
//     for(var j=0; j<array.length-i-1; j++){
//         if(array[j]>array[j+1]){
//             var temp =  array[j];
//             array[j] = array[j+1];
//             array[j+1] = temp;
//         }
//     }
// }
// console.log(array);


// selection sort

var array = [4,2,6,7,3,9,0];

for(var i=0; i<array.length-1; i++){
    var min = i;
    for(var j=i+1; j<array.length; j++){
        if(array[j]<array[min]){
            min=j;
        }
    }
    var temp = array[i];
    array[i] = array[min];
    array[min] = temp
}

console.log(array);