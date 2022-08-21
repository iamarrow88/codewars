/* function squareDigits(num){
	const arrayNum = num.toString().split('');
	const mapArray = arrayNum.map((el) => {
		return el * el;
	})
  console.log("🚀 ~ file: index.js ~ line 6 ~ mapArray ~ mapArray", mapArray)
  
	
  return +mapArray.join("");
} */

/* function duplicateCount(text){
  const textArray = text.split("").reduce((acc, el) => {
		const char = el.toLowerCase();
		if(acc.hasOwnProperty(char)){
			acc[char] += 1;
		} else {
			acc[char] = 1;
		}
		return acc;
	}, {});
	let result;
	const values = Object.values(textArray);
	if(values.length === 0) {
		result = 0;
	} else {
		const resultArray = [];
		values.forEach((el) => {
			if(el > 1) resultArray.push(el);
		})
		if(resultArray.length === 0) {
			result = 0;
		} else {
			result = resultArray.length;
		}
	}
	return result;
} */

/* function openOrSenior(data){
	const STATUS = ["Open", "Senior"];
	const result = [];
	data.forEach((elem) => {
		const [ years, handicap ] = elem;
		if(years >= 55 && handicap >= 7) {
			result.push(STATUS[1]);
		} else {
			result.push(STATUS[0]);
		}
	});
	return result; 
} */

/* function accum(s) {
	const sArray = s.split("");
	const accArray = sArray.map((el, index) => {
		let newEl = el.toUpperCase();
		for (let i = 0; i < index; i++){
			newEl += el.toLowerCase();
		}
		return newEl;
	});
	return accArray.join("-");
}
 */

/* function areYouPlayingBanjo(name) {
	let result;
	name[0] === 'R' || name[0] === 'r' ? result = `${name} plays banjo` : result = `${name} does not play banjo`;
  return result;
} */

/* function alphabetPosition(text) {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	const chars = text.match(/\w+/g).join('').toLowerCase().split('');
	const result = [];
	for (let i = 0; i < chars.length; i++) {
		if(chars[i].match(/\d/g)) {
			result[i] = 0;
		} else {
			result[i] = alphabet.findIndex((el) => {
				return el === chars[i];
			});
			result[i]++;
		}
	}
	return result.join(" ");
} */


/* function friend(friends){
  return friends.filter((el) => {
		return el.length === 4;
	});
} */


/* function nbYear(p0, percent, aug, p) {
	let years = 0;
	const per = percent / 100;
	let population = p0;
	for (years; population <= p; years++) {
		population += (Math.ceil(population * per) + aug);
	}
	;
	return years;
} */

/* function longest(s1, s2) {
  let s1Arr = s1.split("");
	let s2Arr = s2.split("");
	const commonArray = s1Arr.concat(s2Arr);
	const res = commonArray.reduce((acc, elem) => {
		if(!acc[elem]) {
			acc[elem] = 1;
		}
		return acc;
	}, {});
	

	return Object.keys(res).sort().join("");
} */

/* function DNAtoRNA(dna) {
const dnaArray = dna.split("").map((el) => {
	return el === "T" ? "U" : el;
});
return dnaArray.join("");
} */
//Sum of the first nth term of Series
//https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
/* function SeriesSum(n){
	let res = 0;
	let step = 3;
	if(1 / (1 + (step * (n - 1))) === 1){
		res = 1;
	} else {
		res += 1
		SeriesSum(n - 1)
	}
	return res;
} */

/* function high(x){
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const arrayOfArrays = x.split(" ");
    const hightestIndex = arrayOfArrays.map((el) => {
        let highIndex = 0;
        for (let i = 0; i < el.length; i++){
            alphabet.forEach((elem, ind) => {
                if (el[i] === elem) {
                    if (highIndex < (ind + 1)) {
											highIndex = ind + 1;
                    }
                }
            })
        }
        return highIndex;
    });
    console.log("🚀 ~ file: index.js ~ line 163 ~ hightestIndex ~ hightestIndex", hightestIndex)
		const filtredArr = [...hightestIndex];
		filtredArr.sort((a, b) => {
			return b - a;
		});

		console.log(filtredArr);
		const index = hightestIndex.findIndex((el) => { return el == filtredArr[0]})
    return arrayOfArrays[index];
} */

/* function maps(x){
	return x.map((el) => el * 2);
} */


/* function isPangram(string){
  const charArray = string.toLowerCase().split("").reduce((acc, el) => {
		if(el.match(/\w+/g)) {
			if(acc[el]) {
				acc[el] += 1;
			} else {
				acc[el] = 1;
			}
		}
		return acc;
	}, {});
	const alphabetNumber = 26;
	return Object.keys(charArray).length >= alphabetNumber;
}
 */


/* function isValidWalk(walk) {
  const walkMap = walk.reduce((acc, el) => {
		if(acc[el]) {
			acc[el] += 1;
		} else {
			acc[el] = 1;
		}
		return acc;
	}, {});

	let place = 0;
	if(walkMap['e'] === walkMap['w']) {
		place += 0;
	} else {
		place += 1;
	}
	if(walkMap['n'] === walkMap['s']) {
		place += 0;
	} else {
		place += 1;
	}
	return (place === 0 && walk.length <= 10 && walk.length !== 0);
} */

/* function booleanToString(b){
  return String(b);
} */


/* function makeNegative(num) {
	return num > 0 ? -num : num;
}
 */

/* function greet(name){
  return `Hello, ${name} how are you doing today?`;
} */

/* function removeSmallest(numbers) {
	const res = [...numbers];

	if (numbers.length > 1) {
		const newNumbers = [...numbers];
	newNumbers.sort((a,b) => {
		return a - b;
	});
	const index = numbers.findIndex((el) => {
		return el == newNumbers[0];
	});
	res.splice(index, 1);
	}
	return res;
} */

/* function towerBuilder(nFloors) {
  let res = [];
	const chars = 1 + 2 * (nFloors - 1);
	for (let i = 0; i < nFloors; i++) {
		const floorChars = 1 + 2 * i;
		const spaces = (chars - floorChars) / 2;
		const item = (" ").repeat(spaces) + ("*").repeat(floorChars) + (" ").repeat(spaces);
		res.push(item);
	}
	return res;
} */

/* function find_average(array) {
	let res;
  if (array.length <= 0) {
		res = 0;
	} else {
		res = array.reduce((acc, el) => {
			return acc + el;
		}) / array.length;
	}
  return res;
} */

/* function sumMix(x){
	return x.reduce((acc, el) => acc + +el, 0);
} */

/* function hero(bullets, dragons){
	return bullets >= dragons * 2
} */

/* function getCount(str) {
	const vowels = [ "a", "e", "i", "o", "u"];
	const charArray = str.split("");
	let foundVowels = 0;
	charArray.forEach((char) => {
		vowels.forEach((vowel) => {
			if (char === vowel) foundVowels += 1;
		})
	})
  return foundVowels;
} */

/* function comp(array1, array2){
	if (!array1|| !array2) return false;
	const newArray1 = [...array1].sort((a, b) => a - b);
	const newArray2 = [...array2].sort((a, b) => a - b);
	let overlap = [];
	newArray1.forEach((element, index) => {
		if(element * element === newArray2[index]) overlap.push(1);
	});
	return overlap.length === array1.length;
} */


/* function timer (){
	const currentTime = new Date().getTime();
  console.log("🚀 ~ file: index.js ~ line 305 ~ timer ~ currentTime", currentTime)
	setTimeout(() => {
		console.log("Delayed for 1 second.");
		const endTime = new Date().getTime();
	const delta = (endTime - currentTime) / 1000;
  console.log("🚀 ~ file: index.js ~ line 310 ~ setTimeout ~ delta", delta)
	}, 1000)
	
} */

/* var summation = function (num) {
	const arr = [];
  for(let i = 0; i < num; i++) {
		arr.push(i + 1);
	}

	const res = arr.reduce((acc, el) => {
		return acc + el;
	})
	return res;
} */

/* function check(a, x) {
  const res = a.findIndex((el) => {
		return el === x;
  });
	return res !== -1;
} */


/* function reverseWords(str) {
	const words = str.split(" ");
	const res = words.map((el) => {
		return el.split("").reverse().join("");
	})
	return res.join(" ");
} */

var Singleton = function(){
  var obj = {};
  function init(){
		if (!obj) {
			obj = init();
		} else {
			return obj;
		}
} 
function test() {
	return 1;
}
return obj;
};

const a1 = Singleton();
const a2 = Singleton(); 

console.log("🚀 ~ file: index.js result ", a1, a2, a1 === a2);
