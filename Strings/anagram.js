//using bult in function

function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       console.log('Invalid Input');
       return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 checkStringsAnagram("indian","ndiani")
 



 // without using built in function

 
	// function checkAnagram(a, b) {
	// 	var array = {};
	// 	if (a === b) {
	// 		return true;
	// 	}
	// 	if (a.length !== b.length) {
	// 		return false;
	// 	}
	// 	for (let i = 0; i < a.length; i++) {
	// 		let res = a.charCodeAt(i) - 97;
	// 		array[res] = (array[res] || 0) + 1;
	// 	}

	// 	for (let j = 0; j < b.length; j++) {
	// 		let res = b.charCodeAt(j) - 97;
	// 		if (!array[res]) {
	// 			return false;
	// 		}
	// 		array[res]--;
	// 	}
	// 	return true;
	// }
	// document.write(checkAnagram('abc', 'cba'));