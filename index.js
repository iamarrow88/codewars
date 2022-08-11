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

function longest(s1, s2) {
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
}

console.log("🚀 ~ file: index.js result ", longest("aretheyhere", "yestheyarehere"));