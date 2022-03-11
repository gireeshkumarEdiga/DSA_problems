var input = "ABC";
var l = 0;
var r = input.length-1;

function permute(input,l,r){
    if(l==r){
        console.log(input);
    }else
        {
            for(var i=l; i<=r; i++){
                input = swap(input,l,i);
                permute(input,l+1,r);
                input = swap(input,l,i);
            }
        }
}

function swap(str,i,j){
    var temp = str[i];
    str[i] = str[j];
    str[j] = temp;
    return str;
}

permute(input,l,r);




// solution
// Javascript program to print all permutations of a
// given string.

// function permute(str, l, r)
// {
//     if (l == r)
//             document.write(str+"<br>");
//         else
//         {
//             for (let i = l; i <= r; i++)
//             {
//                 str = swap(str, l, i);
//                 permute(str, l + 1, r);
//                 str = swap(str, l, i);
//             }
//         }
// }

// function swap(a, i, j)
// {
//     let temp;
// let charArray = a.split("");
// temp = charArray[i] ;
// charArray[i] = charArray[j];
// charArray[j] = temp;
// return (charArray).join("");
// }

// let str = "ABC";
// let n = str.length;
// permute(str, 0, n-1);

// This code is contributed by avanitrachhadiya2155
