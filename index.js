//Returns an array of strings containing what instruments each instrument plays
function theBeatlesPlay(musicians, instruments) {
	// body...
	var combinedArray = [];
	for (var i = 0; i < musicians.length; i++) {
		combinedArray.push(`${musicians[i]} plays ${instruments[i]}`);
	};
	return combinedArray;
};

//Returns an array of strings with exclamation points
function johnLennonFacts(array) {
	// body...
	var i = 0;

	while(i < array.length){
      array[i] = array[i] + "!!!";
      i++;
	};

	return array;
};

function iLoveTheBeatles(number) {
	// body...
	var iLoveArray = [];

	do {

	  iLoveArray.push("I love the Beatles!");
      number ++;
	} while (number < 15);
    //number > 0 && number-- < 17
	return iLoveArray;
};
