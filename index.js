function theBeatlesPlay(musicians, instruments) {
	var temp = []
	for (let count = 0; musicians[count] != undefined; count++) {
		temp.push(`${musicians[count]} plays ${instruments[count]}`);
	}
	return temp
}

function johnLennonFacts(array) {
	var newarray = []
	let count = 0
	while (array.length > count) {
		newarray.push(`${array[count]}!!!`);
		count++
	}
	return newarray
}

function iLoveTheBeatles(parameter) {
	var temparray = []
	do {
		temparray.push('I love the Beatles!')
		parameter++
	} while (parameter < 15);
	return temparray
}