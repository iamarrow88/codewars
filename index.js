function getLabels(startDay, days){
	let daysArray = [];
	for(let i = 0; i <= days; i++){
	  const addDays = new Date(startDay).getDate() + i;
	  console.log(addDays);

	  const addedDays = new Date().setDate(addDays);
	  console.log(addedDays);


	  const formatDate = new Date(addedDays).toISOString().slice(0, 10);
	  daysArray.push(formatDate);
	  console.log(daysArray);
	}
  }

getLabels('2023-05-20', 5);

/* function addDate(startDate, duration) {
	let formatDate = new Date(startDate)
	let endDate = formatDate;
	endDate.setDate(formatDate.getDate() + duration)

	return endDate.toISOString().slice(0, 10)
}
console.log(addDate('2023-03-08', 8)); //'2015-03-09' */

/*
function unluckyDays(year){
	let dozens = 0;
	for(let i = 1; i <= 12; i++) {
		let month;
		month = i < 10 ? `0${i}` : i;
		const date = new Date(`${year}-${month}-13`)
		console.log(date);
		console.log(date.getDay());
		if(date.getDay() === 5) dozens += 1;
	}
	return dozens;
}
*/

//console.log(unluckyDays(1001)) // 3
/*function brightest(colors){
	let rgbArray = [];
	const answersAcc = {};
	colors.forEach(color => {
		if(!answersAcc[color]) answersAcc[color] = [];
		const trimmedColor = color.slice(1, 7);
		let rgb = 0;
		for(let i = 0; i < trimmedColor.length; i += 2) {
			let col = parseInt(trimmedColor.slice(i, i + 2), 16);
			if(col > rgb) rgb = col;
		}
		rgbArray.push(rgb);
		answersAcc[color].push(rgb);
	});
	const maxColor = Math.max(...rgbArray);
	const index = Object.values(answersAcc).flat().indexOf(maxColor);
	return Object.keys(answersAcc)[index];
}*/

/*function rgb(r, g, b){
	const colorArray = [...arguments].map(color => {
		let rgbColor;
		if(color > 255) {
			rgbColor = 255;
		} else if(color < 0) {
			rgbColor = 0;
		} else {
			rgbColor = color;
		}
		rgbColor = rgbColor.toString(16).toUpperCase();
		if(rgbColor.length < 2) rgbColor = '0' + rgbColor;

		return rgbColor;
	});

	return colorArray.join('');
}*/

/*var whatTimeIsIt = function(angle) {
	let hours = Math.trunc(angle * 2 / 60);
	hours = hours ? hours : '12';
	hours = hours >= 10 ? hours : '0'+ hours
	let minutes;
	if(hours === '12') {
		minutes = Math.trunc(angle * 2);
	} else {
		minutes = Math.trunc(angle * 2 - hours * 60);
	}
	minutes = minutes && minutes >= 0 ? minutes : '00';
	minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
	return `${hours}:${minutes}`;
}*/

/*function deepCount(a){
	let counter = 0;
	function arrayIn(element){
		counter += 1;
		if(element.length && typeof element !== 'string'){
			element.forEach(el => {
				arrayIn(el);
			});
		}
	}
	arrayIn(a);
	return counter - 1;
}*/


/*
function nthFibo(n) {
	const fiboSequence = [0, 1];
	if(n === 1 || n === 2) return fiboSequence[n - 1];

	for (let i = 2; i < n; i++) {
		fiboSequence.push(fiboSequence[i - 2] + fiboSequence[i - 1]);
	}
	return fiboSequence[n - 1];
}
*/

/*
function bingo(ticket, win){
	const winCounter = {};
	ticket.forEach(array => {
		winCounter[array] = 0;
		for (let i = 0; i < array[0].length; i++) {
			if(array[0].charCodeAt(i) === array[1]) {
				winCounter[array] += 1;
				break;
			}
		}
	})

	const result = Object.values(winCounter).reduce((acc, wins) => acc + wins);

	return result >= win ? 'Winner!' : 'Loser!';
}
*/

//console.log(bingo( [['VV',86], ['YNMT',75], ['PF',71], ['XUGLT',76], ['BHRCLTFO',71]], 3)); //'Winner!'
//console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1)); //160


/*function findOutlier(integers){
	const container = {
		'even': [],
		'odd': []
	}
	integers.forEach(integer => {
		if(integer % 2 === 0) {
			container['even'].push(integer);
		} else {
			container['odd'].push(integer);
		}
	});
	if(container['odd'].length < container['even'].length) {
		return container['odd'][0];
	} else {
		return container['even'][0];
	}
}*/


/*function isPrime(num) {
	if(num <= 1) return false;
	if(num < 4) return true;
	if(num % 2 === 0) return false;
	if(num === 5 || num === 7) return true;
	if(num % 5 === 0) return false;
	if(num % 3 === 0) return false;
/!*	const headOfNum = num.toString().slice(0, num.toString().length - 1);
	const taiOfNum = num.toString().slice(num.toString().length - 1, num.toString().length);
	console.log(`headOfNum ${headOfNum}`, `taiOfNum ${taiOfNum}`);*!/
	if(num % 7 === 0) return false;
	return true;
}*/

/*function getCard() {
	const bingoMap ={
		'B': [5, 1, 15, []],
		'I': [5, 16, 30, []],
		'N': [4, 31, 45, []],
		'G': [5, 46, 60, []],
		'O': [5, 61, 75, []]
	}
	function getRandomNumber(min, max) {
		return (Math.random() * (max - min) + min).toFixed();
	}
	for(let i = 0; i < Object.keys(bingoMap).length; i++) {
		for(let k = 0; k < Object.values(bingoMap)[i][0]; k++) {
			function findUniqueCode() {
				const code = `${Object.keys(bingoMap)[i].toUpperCase()}${getRandomNumber(Object.values(bingoMap)[i][1], Object.values(bingoMap)[i][2])}`;
				if(Object.values(bingoMap)[i][3].includes(code)) {
					findUniqueCode();
				} else {
					Object.values(bingoMap)[i][3].push(code);
				}
			}
			findUniqueCode();
		}
	}
	return ((bingoMap.B[3].concat(bingoMap.I[3])).concat(bingoMap.N[3].concat(bingoMap.G[3]))).concat(bingoMap.O[3]);
}*/

/*function filter_list(l) {
	let toNumberList = [];
	for(let i = 0; i < l.length; i++) {
		if(typeof l[i] === "number") {
			toNumberList.push(+l[i]);
			}
		}
	return toNumberList;
}*/

/*function nearestSq(n){
	const base = Math.sqrt(n);
	if(base === Math.trunc(base)) return n;
	const less = Math.trunc(base);
	const more = Math.trunc(base) + 1;
	if(n - Math.pow(less, 2) > Math.pow(more, 2) - n) {
		return Math.pow(more, 2);
	} else {
		return Math.pow(less, 2);
	}
}*/

/*var isSquare = function(n){
	if(n < 0) return false;
	const initialNumber = Math.sqrt(n);
	if(initialNumber === Math.trunc(initialNumber)) {
		return true;
	} else {
		return false;
	}
}*/

/*function getMiddle(s) {
	let res;
	if(s.length % 2 === 0) {
		res = s.slice(s.length / 2 - 1, s.length / 2 + 1);
	} else {
		res = s.slice(s.length / 2, s.length / 2 + 1);
	}
	return res;
}*/

/*
const countBits = function(n) {
	let bits = n.toString(2).split('').reduce((acc, digit) => {
		if(digit === '1')  acc += 1;
		return acc;
	}, 0);
	return bits;
};

console.log(countBits(1234));

*/



/*
function descendingOrder(n){
	return Number(n.toString().split('').sort((a, b) => +b - +a).join(''));
}

console.log(descendingOrder(145263));
*/


/*function strCount(obj){
	let acc = 0;
	function countStrs(arr){
		if(typeof arr === 'object'){
			if(arr){
				if (arr.length) {
					arr.forEach(el => {
						if (typeof el === 'string') {
							acc += 1;
						} else if (typeof el === 'object') {
							countStrs(el);
						}
					})
				} else {
					Object.values(arr).forEach(el => {
						if (typeof el === 'string') {
							acc += 1;
						} else if (typeof el === 'object') {
							countStrs(el);
						}
					});
				}
			}
		} else {
			if(typeof arr === 'string') acc += 1;
		}
	}
	countStrs(obj);
	return acc;
}*/


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

/* class Singleton {
  constructor(){
		if(typeof Singleton.instance === "object") {
			return Singleton.instance;
		}
		Singleton.instance = this;
		return this;
	}
	test() {
    return 1;
  }
};

const a1 = new Singleton();
const a2 = new Singleton();
 */

/* class Dog {
  constructor(name, age, gender, species, size, master, loyal) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.legs = 4;
    this.size = size;
    this.master = master;
    this.loyal = true;
  }
}

class Lablador extends Dog {
	constructor(name, age, gender, master){
		super(name, age, gender, master);
    this.species = "Labrador";
    this.size = "Large";
    this.loyal = true;
	}
};
const Larry = new Lablador("Larry", 5, "male", "Scott");*/

/* function getRealFloor(n) {
	let res;
	if(n <= 0) {
		res = n;
	} else if (n >= 1 && n <= 13) {
		res = (n - 1);
	} else {
		res = (n - 2);
	}
	return res;
} */

/* function number(array){
  let res = [];
	array.forEach((el,index) => {

	})
}
 */
/* function recycle(array) {
	let bin = {
		paper: [],
		glass: [],
		organic: [],
		plastic: [],
		sort: function(obj) {
			const materials = Object.keys(this).slice(0, -1);
			materials.forEach((material) => {
				if (material === obj.material) {
					this[material].push(obj.type);
				}
				if(obj.secondMaterial && material === obj.secondMaterial) {
					this[material].push(obj.type);
				}
			})
			return this;
		}
	}
	array.forEach((obj) => {
		bin.sort(obj);
	})

  return [bin.paper, bin.glass, bin.organic, bin.plastic];
} */

/* var runLengthEncoding = function(str){
const charArray = str.toUpperCase().split("");
let res = [];
let count = 1;
charArray.forEach((char, index) => {
	if(charArray[index + 1]) {
		if (char === charArray[index + 1]) {
			count += 1;
		} else {
			res.push([count, char]);
			count = 1;
		}
	} else {
		res.push([count, char]);
	}
})
return res;
} */
/* function myLanguages(results) {
	const res = Object.entries(results).filter(([lang, score]) => score >= 60).sort(([lang1, score1], [lang2, score2]) => score2 - score1).map(([lang, score]) => lang);
	return res;
}
 */

/* function brightest(colors){
  const hex = colors.map((color) => {
		const digits = color.slice(1);
		let rgb = [];
		if (digits.length > 3) {
			let acc = 0;
			for (let i = 0; i < digits.length; i++){
				if (i % 2 === 0) {
					acc += digits[i].toString();
					rgb.push(acc);
					acc = 0;
				} else {
					acc = parseInt(digits[i], 16);
				}
			}
		}
		return rgb;
	});

	const res = parseInt(colors, 16)
	return res;
}
 */
/* function getLengthOfMissingArray(arrayOfArrays) {
	if(!arrayOfArrays) {
		return 0;
	}

	if (arrayOfArrays.length === 0 || arrayOfArrays[0].length === 0) {
		return 0
	}

	if(arrayOfArrays.some((array)=> array.length === 0)) {
		return 0;
	}
	if (arrayOfArrays.some((array)=> array === null)) {
		return 0;
	}
	const lengths = arrayOfArrays.map((array) => array.length).sort((a, b) => a - b);
	const result = lengths.filter((length, index, array) => {
		if (index !== (array.length - 1)) {
			return (length + 1) !== array[index + 1]
		}
	})
	return +result + 1;
} */


/*var runningSum = function(nums) {
	let res = nums.slice(0,1);
	let acc = nums.slice(0,1);
	for(let i = 0; i < nums.length; i++) {
		if(nums[i + 1]) {
			acc += nums[i + 1]
			res.push(acc);
		}
	}
		return res;
};*/


const arrayOfTags = [
	"learn angular 4",
	"learn angular 4 from scratch",
	"angular4",
	"learn angular",
	"angular tutorial",
	"angular 4",
	"Angular",
	"angular 5",
	"angular 5 course",
	"angular course",
	"angular.js",
	"angularjs",
	"angular 2",
	"angular2",
	"angular 4 tutorial",
	"angular 4 tutorial for beginners",
	"angular tutorial for beginners",
	"angular 4 crash course",
	"angular 4 in 60 minutes",
	"angularjs 4",
	"angular 4 tutorial for beginners step by step",
	"angular js",
	"angularjs tutorial for beginners",
	"angular 6",
	"angular 7"
];

	const data = {
	"kind": "youtube#videoListResponse",
	"etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/Cmodw7c5XPTM8Yg3kMXelihxek4\"",
	"pageInfo": {
		"totalResults": 10,
		"resultsPerPage": 10
	},
	"items": [
		{
			"kind": "youtube#video",
			"etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/tmmI1yiRrmLWlKikXk1gD3TXsUI\"",
			"id": "YN8zNnV0sK8",
			"snippet": {
				"publishedAt": "2022-05-30T12:42:19.000Z",
				"channelId": "UCg8ss4xW9jASrqWGP30jXiw",
				"title": "ang",
				"description": "Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nTelegram: https://teleg.one/js_by_vladilen \nInstagram: https://www.instagram.com/vladilen.minin \nVK: https://vk.com/vladilen.minin \nГруппа VK: https://vk.com/js_by_vladilen \n\nReact Native: мобильная разработка на JavaScript:\nhttps://clc.to/rnative\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\n30 мая 2019 года бы релиз Angular 8 и я решил записать  по нему быстрый курс. В видео вы узнаете, как Angular работает, как его установить.\nВ результате урока я покажу создание Todo приложения с разными подходами. Разберем работу с сервером, сервисами, пайпами, коммуникацией между компонентами и немного RxJS\n\nИсходный код:\nhttps://github.com/vladilenm/angular8-cc\n\nAngular 8 - Быстрый курс за 60 минут",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/YN8zNnV0sK8/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/YN8zNnV0sK8/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/YN8zNnV0sK8/hqdefault.jpg",
						"width": 480,
						"height": 360
					},
					"standard": {
						"url": "https://i.ytimg.com/vi/YN8zNnV0sK8/sddefault.jpg",
						"width": 640,
						"height": 480
					},
					"maxres": {
						"url": "https://i.ytimg.com/vi/YN8zNnV0sK8/maxresdefault.jpg",
						"width": 1280,
						"height": 720
					}
				},
				"channelTitle": "Владилен Минин",
				"tags": [
					"angular",
					"angular 8",
					"angularjs",
					"js",
					"javascript",
					"rxjs",
					"angular 60 минут",
					"angular 1 час",
					"angular 8 1 час",
					"владилен минин",
					"уроки javascript",
					"angular 2",
					"angular 4",
					"angular уроки",
					"курс angular",
					"основы angular",
					"angular фреймворк",
					"angular уроки для начинающих",
					"уроки angular",
					"angular практика",
					"ангуляр",
					"angular изучение",
					"angular курс",
					"ангуляр 4 уроки",
					"angular уроки на русском"
				],
				"categoryId": "27",
				"liveBroadcastContent": "none",
				"localized": {
					"title": "Angular 8 - Быстрый курс за 60 минут",
					"description": "Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nTelegram: https://teleg.one/js_by_vladilen \nInstagram: https://www.instagram.com/vladilen.minin \nVK: https://vk.com/vladilen.minin \nГруппа VK: https://vk.com/js_by_vladilen \n\nReact Native: мобильная разработка на JavaScript:\nhttps://clc.to/rnative\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\n30 мая 2019 года бы релиз Angular 8 и я решил записать  по нему быстрый курс. В видео вы узнаете, как Angular работает, как его установить.\nВ результате урока я покажу создание Todo приложения с разными подходами. Разберем работу с сервером, сервисами, пайпами, коммуникацией между компонентами и немного RxJS\n\nИсходный код:\nhttps://github.com/vladilenm/angular8-cc\n\nAngular 8 - Быстрый курс за 60 минут"
				},
				"defaultAudioLanguage": "en-US"
			},
			"statistics": {
				"viewCount": "33265",
				"likeCount": "1173",
				"dislikeCount": "26",
				"favoriteCount": "0",
				"commentCount": "170"
			}
		},
		{
			"kind": "youtube#video",
			"etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/uto79F2R8W05GFpiUAcLdFGs7PQ\"",
			"id": "Fdf5aTYRW0E",
			"snippet": {
				"publishedAt": "2022-10-23T17:46:58.000Z",
				"channelId": "UC29ju8bIPH5as8OGnQzwJyA",
				"title": "Angular Crash Course",
				"description": "In this video we will talk about what Angular is and then jump in and build a small app With Angular 7, looking at most of the fundamental concepts like components, services, modules, etc\n\nSponsor:\nhttp://www.netlify.com\n\nCode:\nhttps://github.com/bradtraversy/angular-crash-todolist\n\n💖 Become a Patron: Show support & get perks!\nhttp://www.patreon.com/traversymedia\n\nWebsite & Udemy Courses\nhttp://www.traversymedia.com\n\nFollow Traversy Media:\nhttps://www.facebook.com/traversymedia\nhttps://www.twitter.com/traversymedia\nhttps://www.instagram.com/traversymedia",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/Fdf5aTYRW0E/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/Fdf5aTYRW0E/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/Fdf5aTYRW0E/hqdefault.jpg",
						"width": 480,
						"height": 360
					},
					"standard": {
						"url": "https://i.ytimg.com/vi/Fdf5aTYRW0E/sddefault.jpg",
						"width": 640,
						"height": 480
					},
					"maxres": {
						"url": "https://i.ytimg.com/vi/Fdf5aTYRW0E/maxresdefault.jpg",
						"width": 1280,
						"height": 720
					}
				},
				"channelTitle": "Traversy Media",
				"tags": [
					"angular",
					"angular 7",
					"angular tutorial",
					"angularjs"
				],
				"categoryId": "28",
				"liveBroadcastContent": "none",
				"localized": {
					"title": "Angular Crash Course",
					"description": "In this video we will talk about what Angular is and then jump in and build a small app With Angular 7, looking at most of the fundamental concepts like components, services, modules, etc\n\nSponsor:\nhttp://www.netlify.com\n\nCode:\nhttps://github.com/bradtraversy/angular-crash-todolist\n\n💖 Become a Patron: Show support & get perks!\nhttp://www.patreon.com/traversymedia\n\nWebsite & Udemy Courses\nhttp://www.traversymedia.com\n\nFollow Traversy Media:\nhttps://www.facebook.com/traversymedia\nhttps://www.twitter.com/traversymedia\nhttps://www.instagram.com/traversymedia"
				},
				"defaultAudioLanguage": "en"
			},
			"statistics": {
				"viewCount": "456979",
				"likeCount": "8213",
				"dislikeCount": "131",
				"favoriteCount": "0",
				"commentCount": "555"
			}
		},
		{
			"kind": "youtube#video",
			"etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/6e0k9ik7TThWpqueHGOhTRIN1-A\"",
			"id": "k5E2AVpwsko",
			"snippet": {
				"publishedAt": "2017-09-05T16:48:15.000Z",
				"channelId": "UCWv7vMbMWH4-V0ZXdmDpPBA",
				"title": "Angular Tutorial for Beginners: Learn Angular from Scratch | Mosh",
				"description": "🔥Get the COMPLETE COURSE (60% OFF - LIMITED TIME): https://programmingwithmosh.com/courses/angular\n\nThis Angular tutorial teaches you the fundamentals of Angular and TypeScript.\n\nSUBSCRIBE FOR MORE VIDEOS!\nhttps://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA?sub_confirmation=1\n\n\nTABLE OF CONTENT \n\n00:00 Introduction\n02:54 What is Angular?\n04:54 Architecture of Angular Apps\n08:41 Setting Up the Development Environment\n11:25 Your First Angular App\n13:50 Structure of Angular Projects\n20:43 Webpack\n23:57 Angular Version History \n27:31 Course Structure\n31:55 TypeScript Fundamentals\n32:34 What is TypeScript?\n34:58 Your First TypeScript Program\n37:57 Declaring Variables\n42:46 Types\n48:29 Type Assertions\n51:15 Arrow Functions\n52:59 Interfaces\n56:54 Classes\n01:01:22 Objects\n01:05:31 Constructors\n01:08:22 Access Modifiers\n01:11:18 Access Modifiers in Constructor Parameters\n01:12:58 Properties\n01:18:15 Modules\n01:23:22 Angular Fundamentals\n01:23:41 Building Blocks of Angular Apps\n01:27:22 Creating Components\n01:37:00 Generating Components Using Angular CLI\n01:41:40 Templates\n01:44:08 Directives\n01:47:34 Services\n01:52:02 Dependency Injection\n01:59:22 Generating Services Using Angular CLI\n02:01:32 Exercise\n \n\nSTAY IN TOUCH\n\nhttps://www.facebook.com/programmingwithmosh/\nhttps://twitter.com/moshhamedani",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/k5E2AVpwsko/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/k5E2AVpwsko/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/k5E2AVpwsko/hqdefault.jpg",
						"width": 480,
						"height": 360
					},
					"standard": {
						"url": "https://i.ytimg.com/vi/k5E2AVpwsko/sddefault.jpg",
						"width": 640,
						"height": 480
					},
					"maxres": {
						"url": "https://i.ytimg.com/vi/k5E2AVpwsko/maxresdefault.jpg",
						"width": 1280,
						"height": 720
					}
				},
				"channelTitle": "Programming with Mosh",
				"tags": [
					"learn angular 4",
					"learn angular 4 from scratch",
					"angular4",
					"learn angular",
					"angular tutorial",
					"angular 4",
					"Angular",
					"angular 5",
					"angular 5 course",
					"angular course",
					"angular.js",
					"angularjs",
					"angular 2",
					"angular2",
					"angular 4 tutorial",
					"angular 4 tutorial for beginners",
					"angular tutorial for beginners",
					"angular 4 crash course",
					"angular 4 in 60 minutes",
					"angularjs 4",
					"angular 4 tutorial for beginners step by step",
					"angular js",
					"angularjs tutorial for beginners",
					"angular 6",
					"angular 7"
				],
				"categoryId": "22",
				"liveBroadcastContent": "none",
				"localized": {
					"title": "Angular Tutorial for Beginners: Learn Angular from Scratch | Mosh",
					"description": "🔥Get the COMPLETE COURSE (60% OFF - LIMITED TIME): https://programmingwithmosh.com/courses/angular\n\nThis Angular tutorial teaches you the fundamentals of Angular and TypeScript.\n\nSUBSCRIBE FOR MORE VIDEOS!\nhttps://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA?sub_confirmation=1\n\n\nTABLE OF CONTENT \n\n00:00 Introduction\n02:54 What is Angular?\n04:54 Architecture of Angular Apps\n08:41 Setting Up the Development Environment\n11:25 Your First Angular App\n13:50 Structure of Angular Projects\n20:43 Webpack\n23:57 Angular Version History \n27:31 Course Structure\n31:55 TypeScript Fundamentals\n32:34 What is TypeScript?\n34:58 Your First TypeScript Program\n37:57 Declaring Variables\n42:46 Types\n48:29 Type Assertions\n51:15 Arrow Functions\n52:59 Interfaces\n56:54 Classes\n01:01:22 Objects\n01:05:31 Constructors\n01:08:22 Access Modifiers\n01:11:18 Access Modifiers in Constructor Parameters\n01:12:58 Properties\n01:18:15 Modules\n01:23:22 Angular Fundamentals\n01:23:41 Building Blocks of Angular Apps\n01:27:22 Creating Components\n01:37:00 Generating Components Using Angular CLI\n01:41:40 Templates\n01:44:08 Directives\n01:47:34 Services\n01:52:02 Dependency Injection\n01:59:22 Generating Services Using Angular CLI\n02:01:32 Exercise\n \n\nSTAY IN TOUCH\n\nhttps://www.facebook.com/programmingwithmosh/\nhttps://twitter.com/moshhamedani"
				},
				"defaultAudioLanguage": "en-US"
			},
			"statistics": {
				"viewCount": "1266085",
				"likeCount": "18342",
				"dislikeCount": "473",
				"favoriteCount": "0",
				"commentCount": "1255"
			}
		},
		{
			"kind": "youtube#video",
			"etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/cDwx4Ds5-J9CmiqmazUetzrLZKY\"",
			"id": "Rf54BH35yrY",
			"snippet": {
				"publishedAt": "2022-09-04T15:00:12.000Z",
				"channelId": "UCg8ss4xW9jASrqWGP30jXiw",
				"title": "Angular 8 Основы. Полный Курс для начинающих",
				"description": "Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nДобавляйте меня в ВК: https://vk.com/vladilen.minin\nTelegram: https://teleg.one/js_by_vladilen\nInstagram: https://www.instagram.com/vladilen.minin\nГруппа ВК: https://vk.com/js_by_vladilen\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\nУрок по Angular. В этом курсе вы познакомитесь со всеми основными элементами, которые есть в Angular с полного нуля\n\nAngular 8 Основы. Полный Курс. Урок для Новичков",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/Rf54BH35yrY/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/Rf54BH35yrY/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/Rf54BH35yrY/hqdefault.jpg",
						"width": 480,
						"height": 360
					},
					"standard": {
						"url": "https://i.ytimg.com/vi/Rf54BH35yrY/sddefault.jpg",
						"width": 640,
						"height": 480
					},
					"maxres": {
						"url": "https://i.ytimg.com/vi/Rf54BH35yrY/maxresdefault.jpg",
						"width": 1280,
						"height": 720
					}
				},
				"channelTitle": "Владилен Минин",
				"tags": [
					"angular",
					"angularjs",
					"js",
					"javascript",
					"уроки angular",
					"angular уроки",
					"angular 8",
					"курс angular",
					"angular основы",
					"владилен",
					"владилен минин",
					"минин",
					"основы angular",
					"ангуляр",
					"angular 6",
					"angular js",
					"angular уроки для начинающих",
					"angular фреймворк",
					"angular практика",
					"что такое angular",
					"angular cli",
					"angular уроки на русском",
					"курсы программирования",
					"angular tutorial"
				],
				"categoryId": "27",
				"liveBroadcastContent": "none",
				"localized": {
					"title": "Angular 8 Основы. Полный Курс для начинающих",
					"description": "Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nДобавляйте меня в ВК: https://vk.com/vladilen.minin\nTelegram: https://teleg.one/js_by_vladilen\nInstagram: https://www.instagram.com/vladilen.minin\nГруппа ВК: https://vk.com/js_by_vladilen\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\nУрок по Angular. В этом курсе вы познакомитесь со всеми основными элементами, которые есть в Angular с полного нуля\n\nAngular 8 Основы. Полный Курс. Урок для Новичков"
				},
				"defaultAudioLanguage": "en-US"
			},
			"statistics": {
				"viewCount": "14544",
				"likeCount": "573",
				"dislikeCount": "11",
				"favoriteCount": "0",
				"commentCount": "88"
			}
		},
		{
			"kind": "youtube#video",
			"etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/_99tEunMszVYvCj2-1aUTKgOoSY\"",
			"id": "m0yGx2MGZWg",
			"snippet": {
				"publishedAt": "2022-05-13T07:44:08.000Z",
				"channelId": "UCe_H8hzx9WV7Ca7Ps5gt72Q",
				"title": "Что такое Angular. Обзор возможностей",
				"description": "В этом видео речь пойдет про javascript фреймворк Angular. Я расскажу что такое Angular, где и когда его применяют, а так же сделаю небольшой обзор его возможностей. Расскажу чем фреймворк сложен для новичков и чем он действительно хорош для новых проектов. Сейчас для того что б стать junior javascript разработчиком нужно обязательно знать хотя бы один фреймворк js и ангуляр будет отличным выбором.",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/m0yGx2MGZWg/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/m0yGx2MGZWg/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/m0yGx2MGZWg/hqdefault.jpg",
						"width": 480,
						"height": 360
					},
					"standard": {
						"url": "https://i.ytimg.com/vi/m0yGx2MGZWg/sddefault.jpg",
						"width": 640,
						"height": 480
					},
					"maxres": {
						"url": "https://i.ytimg.com/vi/m0yGx2MGZWg/maxresdefault.jpg",
						"width": 1280,
						"height": 720
					}
				},
				"channelTitle": "Web Developer Blog",
				"tags": [
					"angular",
					"ангуляр",
					"angular js",
					"уроки angular",
					"angular уроки",
					"angular tutorial",
					"что такое angular",
					"angular обзор",
					"angular фреймворк",
					"js",
					"javascript",
					"web development",
					"angular 6",
					"angular примеры",
					"angular практика",
					"стоит ли учить angular",
					"angular учить",
					"программирование"
				],
				"categoryId": "27",
				"liveBroadcastContent": "none",
				"defaultLanguage": "ru",
				"localized": {
					"title": "Что такое Angular. Обзор возможностей",
					"description": "В этом видео речь пойдет про javascript фреймворк Angular. Я расскажу что такое Angular, где и когда его применяют, а так же сделаю небольшой обзор его возможностей. Расскажу чем фреймворк сложен для новичков и чем он действительно хорош для новых проектов. Сейчас для того что б стать junior javascript разработчиком нужно обязательно знать хотя бы один фреймворк js и ангуляр будет отличным выбором."
				},
				"defaultAudioLanguage": "ru"
			},
			"statistics": {
				"viewCount": "43470",
				"likeCount": "1047",
				"dislikeCount": "198",
				"favoriteCount": "0",
				"commentCount": "96"
			}
		},
		{
			"kind": "youtube#video",
			"etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/GuGydXnkvpl-L4ntYhAaLNiseZ4\"",
			"id": "VAkio68d51A",
			"snippet": {
				"publishedAt": "2022-02-25T00:09:23.000Z",
				"channelId": "UCZ9qFEC82qM6Pk-54Q4TVWA",
				"title": "What is Angular? (Explained for Beginners)",
				"description": "When you're just starting out you are probably wondering \"What is Angular exactly? When you ask that question it leads to a lot of concepts that are over your head and don't make sense. So in this video I really want to cover what exactly Angular is and why it's even necessary... all from a beginners point of view.\n\n*** DOWNLOAD THE FREE REPORT ***\nFor my free report on the five best programming languages in 2019 (for beginners) go to: https://andysterkowitz.com/report",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/VAkio68d51A/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/VAkio68d51A/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/VAkio68d51A/hqdefault.jpg",
						"width": 480,
						"height": 360
					},
					"standard": {
						"url": "https://i.ytimg.com/vi/VAkio68d51A/sddefault.jpg",
						"width": 640,
						"height": 480
					},
					"maxres": {
						"url": "https://i.ytimg.com/vi/VAkio68d51A/maxresdefault.jpg",
						"width": 1280,
						"height": 720
					}
				},
				"channelTitle": "Andy Sterkowitz",
				"tags": [
					"angular",
					"angular 7",
					"angularjs",
					"learn angular",
					"angular.js",
					"angular tutorial for beginners",
					"angular for beginners",
					"angular for dummies",
					"what is angular",
					"what is angular 7",
					"angular2",
					"angular 2",
					"javascript",
					"front end framework",
					"web development",
					"web development 2019",
					"front end framework 2019",
					"what is a front end framework",
					"software development",
					"programming",
					"front end software developer",
					"web developer"
				],
				"categoryId": "28",
				"liveBroadcastContent": "none",
				"defaultLanguage": "en",
				"localized": {
					"title": "What is Angular? (Explained for Beginners)",
					"description": "When you're just starting out you are probably wondering \"What is Angular exactly? When you ask that question it leads to a lot of concepts that are over your head and don't make sense. So in this video I really want to cover what exactly Angular is and why it's even necessary... all from a beginners point of view.\n\n*** DOWNLOAD THE FREE REPORT ***\nFor my free report on the five best programming languages in 2019 (for beginners) go to: https://andysterkowitz.com/report"
				},
				"defaultAudioLanguage": "en"
			},
			"statistics": {
				"viewCount": "57997",
				"likeCount": "1662",
				"dislikeCount": "34",
				"favoriteCount": "0",
				"commentCount": "114"
			}
		},
		{
			"kind": "youtube#video",
			"etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/u2qq5ltpXouoIrpkJgGLu8YOIeg\"",
			"id": "u1VCxpvDgsk",
			"snippet": {
				"publishedAt": "2022-10-01T15:00:05.000Z",
				"channelId": "UCvuY904el7JvBlPbdqbfguw",
				"title": "Уроки Angular для начинающих / #1 - Введение в Angular",
				"description": "Приступаем к изучению библиотеки Angular. В ходе курса мы создадим небольшой сайт и научимся всем основным концепциям библиотеки Angular. Мы рассмотрим события, компоненты, создание форм и многое другое, чтобы вы в дальнейшем сами могли создавать веб сайты на Angular.\n\n1) Курс на сайте itProger: https://itproger.com/course/angular\n2) Node JS: https://nodejs.org/\n3) Редактор кода: https://atom.io/\n4) Angular CLI: https://cli.angular.io/\n\n✔ Сообщество программистов: https://itproger.com/\n\n✔ -------------\nВступай в группу Вк - https://vk.com/prog_life 🚀\nГруппа FaceBook - https://goo.gl/XW0aaP\n\nInstagram: https://www.instagram.com/gosha_dudar/\nTelegram: http://t.me/itProger_official\nTwitter - https://twitter.com/GoshaDudar\n\n- Уроки от #GoshaDudar 👨🏼\u200d💻\n- Все уроки по хештегу #goshaAngular",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/u1VCxpvDgsk/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/u1VCxpvDgsk/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/u1VCxpvDgsk/hqdefault.jpg",
						"width": 480,
						"height": 360
					},
					"standard": {
						"url": "https://i.ytimg.com/vi/u1VCxpvDgsk/sddefault.jpg",
						"width": 640,
						"height": 480
					},
					"maxres": {
						"url": "https://i.ytimg.com/vi/u1VCxpvDgsk/maxresdefault.jpg",
						"width": 1280,
						"height": 720
					}
				},
				"channelTitle": "Гоша Дударь",
				"tags": [
					"angular",
					"angular 6",
					"angular уроки",
					"angular node js",
					"angularjs",
					"angularjs уроки",
					"для начинающих",
					"angular уроки на русском",
					"Введение в Angular",
					"что такое angular",
					"установка angular",
					"#GoshaDudar",
					"#goshaAngular"
				],
				"categoryId": "27",
				"liveBroadcastContent": "none",
				"defaultLanguage": "ru",
				"localized": {
					"title": "Уроки Angular для начинающих / #1 - Введение в Angular",
					"description": "Приступаем к изучению библиотеки Angular. В ходе курса мы создадим небольшой сайт и научимся всем основным концепциям библиотеки Angular. Мы рассмотрим события, компоненты, создание форм и многое другое, чтобы вы в дальнейшем сами могли создавать веб сайты на Angular.\n\n1) Курс на сайте itProger: https://itproger.com/course/angular\n2) Node JS: https://nodejs.org/\n3) Редактор кода: https://atom.io/\n4) Angular CLI: https://cli.angular.io/\n\n✔ Сообщество программистов: https://itproger.com/\n\n✔ -------------\nВступай в группу Вк - https://vk.com/prog_life 🚀\nГруппа FaceBook - https://goo.gl/XW0aaP\n\nInstagram: https://www.instagram.com/gosha_dudar/\nTelegram: http://t.me/itProger_official\nTwitter - https://twitter.com/GoshaDudar\n\n- Уроки от #GoshaDudar 👨🏼\u200d💻\n- Все уроки по хештегу #goshaAngular"
				},
				"defaultAudioLanguage": "ru"
			},
			"statistics": {
				"viewCount": "33896",
				"likeCount": "612",
				"dislikeCount": "37",
				"favoriteCount": "0",
				"commentCount": "50"
			}
		},
		{
			"kind": "youtube#video",
			"etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/96JEWzuOaAgaHrcnKhmatlZzPME\"",
			"id": "rc3E4tplFCU",
			"snippet": {
				"publishedAt": "2022-10-25T15:00:14.000Z",
				"channelId": "UCg8ss4xW9jASrqWGP30jXiw",
				"title": "Angular 40 вопросов для собеседования",
				"description": "Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nДобавляйте меня в ВК: https://vk.com/vladilen.minin\nГруппа ВК: https://vk.com/js_by_vladilen\nTelegram: https://teleg.one/js_by_vladilen\nInstagram: https://www.instagram.com/vladilen.minin\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\nAngular 40 вопросов для собеседования. Подготовка к интервью",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/rc3E4tplFCU/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/rc3E4tplFCU/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/rc3E4tplFCU/hqdefault.jpg",
						"width": 480,
						"height": 360
					},
					"standard": {
						"url": "https://i.ytimg.com/vi/rc3E4tplFCU/sddefault.jpg",
						"width": 640,
						"height": 480
					},
					"maxres": {
						"url": "https://i.ytimg.com/vi/rc3E4tplFCU/maxresdefault.jpg",
						"width": 1280,
						"height": 720
					}
				},
				"channelTitle": "Владилен Минин",
				"tags": [
					"angular",
					"angularjs",
					"js",
					"javascript",
					"уроки angular",
					"angular уроки",
					"angular 8",
					"курс angular",
					"angular основы",
					"владилен",
					"владилен минин",
					"минин",
					"основы angular",
					"angular вопросы",
					"angular интервью",
					"собеседование",
					"angular собеседование",
					"вопросы на собеседование",
					"angular 6",
					"angular для начинающих",
					"angular уроки на русском"
				],
				"categoryId": "27",
				"liveBroadcastContent": "none",
				"localized": {
					"title": "Angular 40 вопросов для собеседования",
					"description": "Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nДобавляйте меня в ВК: https://vk.com/vladilen.minin\nГруппа ВК: https://vk.com/js_by_vladilen\nTelegram: https://teleg.one/js_by_vladilen\nInstagram: https://www.instagram.com/vladilen.minin\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\nAngular 40 вопросов для собеседования. Подготовка к интервью"
				},
				"defaultAudioLanguage": "en-US"
			},
			"statistics": {
				"viewCount": "6824",
				"likeCount": "595",
				"dislikeCount": "10",
				"favoriteCount": "0",
				"commentCount": "126"
			}
		},
		{
			"kind": "youtube#video",
			"etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/pvVvPt5cchXjCoSYxodr18lOaEg\"",
			"id": "NaZwVUHnmfE",
			"snippet": {
				"publishedAt": "2022-10-19T16:06:13.000Z",
				"channelId": "UCg8ss4xW9jASrqWGP30jXiw",
				"title": "Angular 8 + RxJS. Приложение Органайзер С Нуля (Для Опытных!)",
				"description": "Курс по Angular 8+: \nhttps://clc.to/angular \n\nДобавляйте меня в ВК: https://vk.com/vladilen.minin\nTelegram: https://teleg.one/js_by_vladilen\nInstagram: https://www.instagram.com/vladilen.minin\nГруппа ВК: https://vk.com/js_by_vladilen\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\nВ видео я покажу разработку приложения органайзера с нуля.\nВ видео я не буду пояснять базовые моменты, так как это практика для опытных разработчиков\n\nВ результате вы получите приложение, в котором будет использоваться много RxJS, Firebase, MomentJS и Angular 8\nНе будет никаких CSS фреймворков - все стили будут написаны с нуля с использованием CSS переменных\n\nИсходный код:\nhttps://github.com/vladilenm/angular-organizer\n\nAngular 8 + RxJS. Приложение Целиком (Для Опытных!)\nhttps://youtu.be/NaZwVUHnmfE",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/NaZwVUHnmfE/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/NaZwVUHnmfE/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/NaZwVUHnmfE/hqdefault.jpg",
						"width": 480,
						"height": 360
					},
					"standard": {
						"url": "https://i.ytimg.com/vi/NaZwVUHnmfE/sddefault.jpg",
						"width": 640,
						"height": 480
					},
					"maxres": {
						"url": "https://i.ytimg.com/vi/NaZwVUHnmfE/maxresdefault.jpg",
						"width": 1280,
						"height": 720
					}
				},
				"channelTitle": "Владилен Минин",
				"tags": [
					"angular",
					"angular 8",
					"vladilen",
					"владилен",
					"владилен минин",
					"angularjs",
					"angular практика",
					"уроки angular",
					"rxjs",
					"rxjs уроки",
					"momentjs",
					"js",
					"javascript",
					"web",
					"frontend",
					"ангуляр",
					"angular уроки",
					"angular уроки для начинающих",
					"создание приложения на angular 4",
					"angular 60 минут",
					"изучение angular",
					"angular 6",
					"ангуляр 7 уроки",
					"реактивное программирование"
				],
				"categoryId": "27",
				"liveBroadcastContent": "none",
				"localized": {
					"title": "Angular 8 + RxJS. Приложение Органайзер С Нуля (Для Опытных!)",
					"description": "Курс по Angular 8+: \nhttps://clc.to/angular \n\nДобавляйте меня в ВК: https://vk.com/vladilen.minin\nTelegram: https://teleg.one/js_by_vladilen\nInstagram: https://www.instagram.com/vladilen.minin\nГруппа ВК: https://vk.com/js_by_vladilen\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\nВ видео я покажу разработку приложения органайзера с нуля.\nВ видео я не буду пояснять базовые моменты, так как это практика для опытных разработчиков\n\nВ результате вы получите приложение, в котором будет использоваться много RxJS, Firebase, MomentJS и Angular 8\nНе будет никаких CSS фреймворков - все стили будут написаны с нуля с использованием CSS переменных\n\nИсходный код:\nhttps://github.com/vladilenm/angular-organizer\n\nAngular 8 + RxJS. Приложение Целиком (Для Опытных!)\nhttps://youtu.be/NaZwVUHnmfE"
				},
				"defaultAudioLanguage": "en-US"
			},
			"statistics": {
				"viewCount": "12128",
				"likeCount": "665",
				"dislikeCount": "11",
				"favoriteCount": "0",
				"commentCount": "156"
			}
		},
		{
			"kind": "youtube#video",
			"etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/KuFm1jGNMzgjE2VlAEsPgRVra4o\"",
			"id": "G0bBLvWXBvc",
			"snippet": {
				"publishedAt": "2022-09-16T16:53:41.000Z",
				"channelId": "UCsBjURrPoezykLs9EqgamOA",
				"title": "Angular for Beginners - Let's build a Tic-Tac-Toe PWA",
				"description": "Learn the basics of Angular 8 🚀 by building a tic-tac-toe game 🕹️ from scratch...Then deploy it as an installable progressive web app (PWA). Go beyond the basics 👉https://fireship.io/courses/angular/\n\nFull Source Code: https://github.com/fireship-io/angular-tic-tac-toe\nAngular Docs: https://angular.io/\n\n#angular #pwa #tutorial\n\nTake Angular quizzes 🤓\n\niOS https://itunes.apple.com/us/app/fireship/id1462592372?mt=8\nAndroid https://play.google.com/store/apps/details?id=io.fireship.quizapp\n\nUpgrade to Fireship PRO at https://fireship.io/pro\nUse code lORhwXd2 for 25% off your first payment.",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/G0bBLvWXBvc/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/G0bBLvWXBvc/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/G0bBLvWXBvc/hqdefault.jpg",
						"width": 480,
						"height": 360
					},
					"standard": {
						"url": "https://i.ytimg.com/vi/G0bBLvWXBvc/sddefault.jpg",
						"width": 640,
						"height": 480
					},
					"maxres": {
						"url": "https://i.ytimg.com/vi/G0bBLvWXBvc/maxresdefault.jpg",
						"width": 1280,
						"height": 720
					}
				},
				"channelTitle": "Fireship",
				"tags": [
					"webdev",
					"app development",
					"lesson",
					"tutorial",
					"beginners",
					"beginner",
					"basic",
					"angular tutorial",
					"angular basics",
					"angular for beginners",
					"angular 8",
					"angular components",
					"learn angular"
				],
				"categoryId": "28",
				"liveBroadcastContent": "none",
				"localized": {
					"title": "Angular for Beginners - Let's build a Tic-Tac-Toe PWA",
					"description": "Learn the basics of Angular 8 🚀 by building a tic-tac-toe game 🕹️ from scratch...Then deploy it as an installable progressive web app (PWA). Go beyond the basics 👉https://fireship.io/courses/angular/\n\nFull Source Code: https://github.com/fireship-io/angular-tic-tac-toe\nAngular Docs: https://angular.io/\n\n#angular #pwa #tutorial\n\nTake Angular quizzes 🤓\n\niOS https://itunes.apple.com/us/app/fireship/id1462592372?mt=8\nAndroid https://play.google.com/store/apps/details?id=io.fireship.quizapp\n\nUpgrade to Fireship PRO at https://fireship.io/pro\nUse code lORhwXd2 for 25% off your first payment."
				},
				"defaultAudioLanguage": "en"
			},
			"statistics": {
				"viewCount": "56657",
				"likeCount": "2092",
				"dislikeCount": "36",
				"favoriteCount": "0",
				"commentCount": "128"
			}
		}
	]
}


/*
	function sortByKeyWords(word) {
		const arrayOfResultIndexes = [];
		const titles = data.items.map((element) => element.snippet.title);
		for (let i = 0; i < titles.length; i++) {
			if(titles[i].toLowerCase().includes(word.toLowerCase())) arrayOfResultIndexes.push(i);
		}
		arrayOfResultIndexes.map(item => data.items[item]);
		return res;
	}
*/

/*	console.log(sortByKeyWords('t'));*/

/*var twoSum = function(nums, target) {
	let index = 0;
	for (let i = 0; i < nums.length; i++) {
		index += 1;
		const tail = nums.slice((i + 1), nums.length);
		const res = tail.map(number => nums[i] + number);
		if(res.includes(target)) {
			index += res.indexOf(target);
			return [i, index];
		}
	}
	return -1;
};*/


/*
var isValid = function(s) {
	if(s.length % 2 !== 0) return false;
	const openBrackets = ['(', '{', '['];
	const closeBrackets = [')', '}', ']'];
	let stack = [];

	let splittedS = s.split('');

	for (let i = 0; i < splittedS.length; i++) {
		let item = splittedS[i];
		let indexOpen = openBrackets.findIndex(el => el === item);
		if(indexOpen !== -1) {
			stack.push(closeBrackets[indexOpen]);
		} else {
			let pop = stack.pop();
			if(pop !== item) {
				return false;
			}
		}
	}
	if(stack.length === 0){
		return true;
	} else {
		return false;
	}
};
*/

/*var isIsomorphic = function(s, t) {
	let splittedS = s.split('');
	let sObj = {};
	for(let i = 0; i < splittedS.length; i++) {
		if(Object.keys(sObj).includes(splittedS[i])){
			if(sObj[splittedS[i]] !== t[i]) {
				return false;
			}
		} else {
			let chunk = t.split('').slice(0, i);
			if(chunk.includes(t[i])) {
				return false;
			} else {
				sObj[splittedS[i]] = t[i];
			}
		}
	}
	return true;
};*/

/*var isSubsequence = function(s, t) {
	if(s.length === 1 && t.length === 1 && s !== t){
		return false;
	} else if(s.length === 1 && !t.split('').includes(s)) {
		return false;
	} else if(s.length === 2) {
		let firstInd = t.split('').findIndex(x => x === s[0]);
		let secondInd = t.split('').slice(firstInd + 1, t.length).findIndex(x => x === s[1]);
		if(firstInd < secondInd){
			return true;
		} else {
			return false;
		}
	} else {
		const firstChars = t.split('').reduce((acc, el, index) => {
			if(acc[el]) {
				acc[el].push(index);
			} else {
				acc[el] = [];
				acc[el].push(index)
			}
			return acc;
		}, {});

		console.log(firstChars);

		for(let i = 0; i < firstChars)
	}
	let templateS = s.slice(1, s.length - 1);
	let chunk = t.slice(t.split('').findIndex(x => x === s[0]) + 1, t.split('').findIndex(x => x === s[s.length - 1]));

	for (let i = 0; i < templateS.length; i++){
		if(!chunk.split('').includes(templateS[i])) {
			return false;
		}
	}
	return true;
};

console.log(isSubsequence("abcb", "baaccdbcbbb"));*/

/*
function check(firstInd, secondCharInd, chunk){
	const nextInd = t.split('').slice(firstInd + 1, t.length).findIndex(s[secondCharInd]);
	return nextInd;
}
*/

/*const indexes = {
	'char': 'abrakadabra',
	'index': [1, 5, 6],
	method(){
		let res = [];
		for (let i = 0; i < indexes['index'].length; i++) {
			res.push(indexes['char'][indexes['index'][i]])
		}
		return  res.join('');
	}
}*/

/*var isSubsequence = function(s, t) {
	let sIndex = 0;

	const tArrayCharsIndexes = t.split('').reduce((acc, el, index) => {
		if(acc[el]) {
			acc[el].push(index);
		} else {
			acc[el] = [];
			acc[el].push(index);
		}
		return acc;
	}, {});
	tArrayCharsIndexes['result'] = [];
	check(sIndex, tArrayCharsIndexes['result']);
	function check(sIndex, place) {
		//const charCount = tArrayCharsIndexes[s[sIndex]].length;
		let currentCharArray = tArrayCharsIndexes[s[sIndex]];
		for(let i = 0; i < currentCharArray.length; i++) {
			console.log('currentCharArray is ' + currentCharArray)
			place[i] = [];
			place[i].push(s[sIndex]);
/!*			console.log('place[i] is ');
			console.log(place[i]);
			console.log('tArrayCharsIndexes is ');
			console.log(tArrayCharsIndexes);*!/
			if(i === (currentCharArray.length - 1)) {
				let chunk = t.split('').slice(currentCharArray[i + 1], currentCharArray.length);
				console.log('chunk2 is ' + chunk)
				/!*if(chunk.includes(s[1])) {
					let next = sIndex + 1;
					check(next);*!/
				} else {
				let chunk = t.split('').slice(currentCharArray[i + 1], (currentCharArray[i + 1]) - 1);
				console.log(t.split('').slice(currentCharArray[i + 1], (currentCharArray[i + 1]) - 1))

			}
			}
		return tArrayCharsIndexes;
	}

	return tArrayCharsIndexes;
/!*	console.log(tArrayCharsIndexes[s[0]].length)*!/
};*/

/*
const array = ["ABCDEF", "123456", "00FF00", "000000", "FFFFFF", "00FF00"];
const res = array.sort((a, b) => a - b);

console.log(res);
*/

/*var rotate = function(nums, k) {
	const tail = nums.splice(nums.length - k, nums.length);
	const res = tail.concat(nums);
	return res;

};*/

/*function brightest(colors){
	function getDecimal(num) {
		for(let i = 0; i < num.length; i++) {
			if(i = 0){
				let a = num[i].toString(16);
				console.log(a)
			}
		}
	}

	let newColors = colors.map(elem => {
		let num = elem.slice(1, elem.length);
		let result = [num.slice(0,2), num.slice(2, 4), num.slice(4, 6)];
		return result;
	})
	console.log(newColors);
	let rgbColors = newColors.map(el => {
		let a, b;
		for(let i = 0; i < el.length; i++){
			console.log(el[i][0])
			a = parseInt(el[i][0], 16) * 16;
			b = parseInt(el[i][1], 16);
		}
		return a + b;
	})
	console.log(rgbColors);

}

console.log(brightest(["#001000", "#000000"]));

console.log(parseInt('C', 16) * 16)*/


/*const array = ["ABCDEF", "123456", "00FF00", "000000", "FFFFFF", "00FF00"];

console.log(typeof array)*/

/*n = 10, d = 1
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.*/
/*function nbDig(n, d) {
	let numArray = [];
	for (let i = 1; i <= n; i++) {
		numArray.push((i * i).toString());
	}
	let wordsArray = numArray.map(number => number.split('')).flat(1);
	let acc = 0;
	for(let k = 0; k < wordsArray.length; k ++) {
		let t = Number(wordsArray[k]);
		if(t === d) {
			acc++;
		}
	}
	if(d === 0) acc += 1;
	return acc;
}*/


/*
function findMissing(arr1, arr2) {
	let newArr1 = arr1.sort((a, b) => a - b);
	let newArr2 = arr2.sort((a, b) => a - b);

	let min = newArr1.length < newArr2.length ? newArr1 : newArr2;
	let max = newArr1.length > newArr2.length ? newArr1 : newArr2;
	let result = 0;
	for (let i = 0; i < max.length; i++) {
		if(min[i] !== max[i]) return max[i];
	}
}
*/

/*const list1 = [
	{'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
	{'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
];
function sentence(List) {
	let object = {};
	for (let i = 0; i < List.length; i++) {
		let key = Object.keys(List[i])[0];
		let value = Object.values(List[i])[0];
		object[key] = value;
	}
	const numbers = Object.keys(object).sort((a, b) => a - b);
	const sentence = numbers.map(number => object[number]);

	return sentence;
}*/


/*const suspects = {'James': ['Jacob', 'Bill', 'Lucas'],
	'Johnny': ['David', 'Kyle', 'Lucas'],
	'Peter': ['Lucy', 'Kyle']};
const deadMen = ['Lucas', 'Bill'];

function killer(suspectInfo, dead) {
	const suspects = Object.keys(suspectInfo);
	const seenMen = Object.values(suspectInfo);
	let evidenceInfo = {};
	let acc = 0;
	suspects.forEach(suspect => {
		evidenceInfo[acc] = [];
		for (let i = 0; i < suspectInfo[suspect].length; i++) {
			for (let k = 0; k < dead.length; k++){
				if(suspectInfo[suspect][i].includes(dead[k])) {
					evidenceInfo[acc].push(true);
				} else {
					evidenceInfo[acc].push(false);
				}
			}
		}
		acc++;
	});
	let result;
	for (let a = 0; a < Object.keys(evidenceInfo).length; a++){
		const numberOfSeenMen = evidenceInfo[a].filter(word => word === true);
		if (numberOfSeenMen.length === dead.length) result = suspects[a];
		console.log(numberOfSeenMen);
	}
	return result;
}*/

/*function addQuestion(questions) {
	for(let i = 0; i < questions.length; i++){
		questions[i]['usersAnswer'] = null;
	}
	return questions;
}*/

/*function dataReverse(data) {
	const numberOfBites = data.length / 8;
	let arrayOfBites = [];
	let startIndex = 0; //1,1,1,1,1,1,1,1 |,0,0,0,0,0,0,0,0| ,0,0,0,0,1,1,1,1, | 1,0,1,0,1,0,1,0
	let res = [];
	for (let i = 1; i < numberOfBites + 1; i++){
		let lastIndex = i * 8;
		let chunk = data.slice(startIndex, lastIndex);
		arrayOfBites.unshift(chunk);
		startIndex = lastIndex;
	}

	return arrayOfBites.flat();
}*/

/*
function whoseBicycle(diary1, diary2, diary3) {
	const diaryArray = [diary1, diary2, diary3];
	console.log(diaryArray);

	let whoseHighestScore = {
		'0': {
			'age': 14,
			'score': null,
			'answer': 'I need to buy a bicycle for my first son.'
		},
		'1': {
			'age': 9,
			'score': null,
			'answer': 'I need to buy a bicycle for my second son.'
		},
		'2': {
			'age': 8,
			'score': null,
			'answer': 'I need to buy a bicycle for my third son.'
		}
	}
	let arrayOfHighestScore = [];
	let maxScore = 0;

	let arrayOfMaxScores = [];
	for(let i = 0; i < diaryArray.length; i++){
		let score = Object.values(diaryArray[i]);
		let commonMark = score.reduce((acc, mark) => acc + mark);
		whoseHighestScore[i]['score'] = commonMark;
		if(maxScore < commonMark) maxScore = commonMark;
		arrayOfMaxScores.push(commonMark);
	}
	/!*console.log(arrayOfMaxScores);
	console.log(maxScore);*!/
	let indexesForMaxScoreSons = [];
	arrayOfMaxScores.forEach((el, index) => {
		if(el === maxScore) {
			indexesForMaxScoreSons.push(index);
		}
	})
	let res;
	console.log(indexesForMaxScoreSons)
	if(indexesForMaxScoreSons.length === 1) {
		res = whoseHighestScore[indexesForMaxScoreSons[0]]['answer'];
	} else {
		res = whoseHighestScore[indexesForMaxScoreSons[indexesForMaxScoreSons.length - 1]]['answer'];
	}

	return res;
}
*/

/*
function spread(func, args) {
	return func(...args);
}
*/

/*
function combine(...objects) {
	let numberOfObjects = objects;
	/!*let accumulator = objects.slice(0, 1)[0];*!/
	let accumulator = {};

	console.log(numberOfObjects);

	for(let i = 0; i < numberOfObjects.length; i++) {
		let keys = Object.keys(numberOfObjects[i]);
		for(let k = 0; k < keys.length; k++) {
			if(accumulator[keys[k]]) {
				accumulator[keys[k]] += numberOfObjects[i][keys[k]];
			} else {
				accumulator[keys[k]] = numberOfObjects[i][keys[k]];
			}
		}
	}

	return accumulator;
}
*/


/*function maxTriSum(numbers){
	let sortingObject = numbers.reduce((acc, elem) => {
		if(acc[elem]){
			acc[elem] += 1;
		} else {
			acc[elem] = 1;
		}
		return acc;
	}, {});
	let theHighestNumbers = Object.keys(sortingObject).sort((a, b) => b - a).slice(0, 3);
	let result = theHighestNumbers.reduce((acc, number) => Number(acc) + Number(number));
	console.log(result);


	return result;
}*/

/* cvxvxv */
/*function minSum(arr) {
	const numberOfPairs = arr.length / 2;
	const modifiedArray = [...arr].sort((a, b) => b - a);
	let result = 0;
	for(let i = 0; i < numberOfPairs; i++) {
		console.log(modifiedArray[i]);
		console.log(modifiedArray[modifiedArray.length - 1 - i]);

		result += modifiedArray[i] * modifiedArray[modifiedArray.length - 1 - i];
		console.log(result);
	}
	return result;
}*/

/*function highAndLow(numbers){
	const sortedArray = numbers.split(' ').sort((a, b) => +a - +b);
	return [sortedArray[sortedArray.length - 1], sortedArray[0]].join(' ');
}*/

/*function disemvowel(str) {
	return str.match(/[^aouie]/gmi).join('');
}*/



/*function isIsogram(str){
	const charsArray = str.split('');
	const charsObject = charsArray.reduce((acc, char) => {

		if(acc[char.toLowerCase()]) {
			acc[char.toLowerCase()] += 1;
		} else {
			acc[char.toLowerCase()] = 1;
		}
		return acc
	}, {});
	return Object.values(charsObject).every(number => number === 1);
}*/

/*
function explode(s) {
	const splittedArrayOfNumbers = s.split('');
	const result = [];
	splittedArrayOfNumbers.forEach(el => {
		let i = 0;
		while (i < +el) {
			result.push(el);
			i++;
		};
	})
	return result.join('');
}
*/

/*
function duplicateEncode(word){
	const charsArray = word.split('');
	const charsObject = charsArray.reduce((acc, char) => {
		if(acc[char.toLowerCase()]) {
			acc[char.toLowerCase()] += 1;
		} else {
			acc[char.toLowerCase()] = 1;
		}
		return acc;
	}, {});
	let resultArray = charsArray.map(char => {
		if(charsObject[char.toLowerCase()] === 1) {
			return '(';
		} else {
			return ')';
		}
	});
	return resultArray.join('');
}
*/

/*function solution(number){
	if (number <= 0) {
		return 0;
	} else {
		let result = 0;
		for (let i = 0 ; i < number; i++) {
			if(i % 3 === 0 || i % 5 === 0) {
				result += i;
			}
		}
		return result;
	}
}*/


/*
* | HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |

head [x] = x
tail [x] = []
init [x] = []
last [x] = x
* */

/*function head(x){
	return x[0];
}

function tail(x) {
	return x.slice(1, x.length);
}

function init(x) {
	return x.slice(0, -1);
}

function last(x) {
	return x[x.length - 1];
}*/


/*function numberOfPairs(gloves) {
  const glovesTypes = gloves.reduce((acc, gloves) => {
	  if(acc[gloves]) {
		  acc[gloves] += 1;
	  } else {
		  acc[gloves] = 1;
	  }
	   return acc;
  }, {});
  let result = 0;
  Object.values(glovesTypes).forEach(numberOfGloves => {
	  if(numberOfGloves % 2 === 0){
		  result += numberOfGloves / 2;
	  } else {
		  result += Math.floor(numberOfGloves / 2);
	  }
  });

  return result;
}*/


/*function createSecretHolder(secret) {
	const object = {
		secret: secret,
		getSecret: function (){
			return this.secret;
		},
		setSecret: function(newSecret){
			this.secret = newSecret;
		}
	};
	return object;
}*/

/*function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
	const ONE_DAY = new Date('January 2, 1970 00:00:00 GMT+00:00').getTime();
	const endDateMs = new Date(expirationDate).getTime();
	console.log(endDateMs);
	const endEndDate = endDateMs + ONE_DAY
	if(new Date(expirationDate).getTime() + ONE_DAY > new Date(currentDate).getTime() && enteredCode === correctCode) {
		return true;
	} else {
		return false;
	}
}*/
/*
* []                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
* */
/*function likes(names) {
	if(names.length === 0) {
		return "no one likes this";
	} else if(names.length === 1) {
		return `${names[0]} likes this`;
	} else if(names.length === 2) {
		return `${names[0]} and ${names[1]} like this`;
	} else if(names.length === 3) {
		return `${names[0]}, ${names[1]} and ${names[2]} like this`;
	} else {
		return `${names[0]}, ${names[1]} and ${names.length - 2} like this`;
	}
}*/

/*function toWeirdCase(string){
	const wholeCharsArray = string.split('');
	let counter = 0;
	for(let i = 0; i < wholeCharsArray.length; i++) {
		if(wholeCharsArray[i] === ' ') {
			counter = 1;
		}
		if(counter % 2 === 0) {
			wholeCharsArray[i] = wholeCharsArray[i].toUpperCase();
			counter += 1;
		} else {
			counter += 1;
		}
	}

	return wholeCharsArray.join('');
}*/

/*function findOdd(A) {
	const accumulator = A.reduce((acc, el) => {
		if(acc[el]) {
			acc[el] += 1;
		} else {
			acc[el] = 1;
		}
		return acc;
	}, {});
	let res = 0;
	for(let i = 0; i < Object.values(accumulator).length; i++) {
		console.log('%cindex.js line:1952 accumulator[i]', 'color: #007acc;', accumulator[i]);
		console.log('%cindex.js line:1953 Object.keys(accumulator)[i]', 'color: #007acc;', Object.keys(accumulator)[i]);
		if(Object.values(accumulator)[i] % 2 !== 0) res = Object.keys(accumulator)[i];
	}
	return parseInt(res);

}*/

/*function spinWords(string){
	const wordsArray = string.split(' ');
	const newArr = wordsArray.map(word => word.length >= 5 ? word.split('').reverse().join('') : word);
	return newArr.join(' ');
}*/

/*
function digitalRoot(n) {
	let result = 0;
	function sum(n){
		if(n.toString().length > 1) {
			let str = n.toString().split('')
			/!*let str = n.toString().split('').reduce((acc, number) => acc + number);*!/
			/!*sum(str);*!/
		} else {
			result = n;
		}
		return '';
	}
	sum(n);
	return result;
}
*/

/*function rgb(r, g, b){
	function round(number) {
		if(number < 0) {
			return 0;
		} else if(number > 255) {
			return 255;
		} else {
			return number;
		}
	};
	let codeKeeper = {
		'R': [],
		'F': []
	};
	function toHex(colorNumber, codeKeeper){
		const arr = (colorNumber / 16).toString().split('.');
		codeKeeper['R'].push(arr[0]);
		codeKeeper['F'].push(arr[1]);
		const second = (parseInt(codeKeeper['R']) / 16).toString().split('.');
		const latest = second[1];
		codeKeeper['R'].push(second[0]);
		codeKeeper['F'].push(second[1]);
		console.log(arr)
		const last = (parseInt(latest) / 16).toString().split('.');
		codeKeeper['R'].push(last[0]);
		codeKeeper['F'].push(last[1]);
		return arr;
	}
	toHex(255, codeKeeper)
	console.log(codeKeeper);

	const corrected = [...arguments].map(colorCode => {
		let color = round(colorCode);

	});


	return corrected;
}*/

/*function arrayDiff(a, b) {
	if(a.length === 0) return [];
	if(b.length === 0) return a;
	return a.map(el => b.includes(el) ? undefined : el).filter(el => el !== undefined);
}*/

/* function getDatesDifference(date1, date2){
	const date1formatted = new Date(date1);
	const date2formatted = new Date(date2);
	console.log(date1formatted);
	console.log(date2formatted);

	const differenceMs = date2formatted - date1formatted;
	  
	const msInDay = 1000* 60 * 60 * 24;
	const differenceInDays = differenceMs / msInDay;

	console.log(differenceInDays);
	
} */



