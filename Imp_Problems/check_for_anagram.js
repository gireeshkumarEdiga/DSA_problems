let N = 4;
let s1 = "abcd";
let s2 = "dacb";

function anagram(N,s1,s2){
    let str1 = s1.sort().join("");
    let str2 = s2.sort().join("");
    console.log(str1);
    console.log(str2);
    if(str1.length !== str2.length){
        return "False";
    }
    if(str1 === str2){
        return "True";
    }else{
        return "False";
    }
    
}

console.log(anagram(N,s1,s2));