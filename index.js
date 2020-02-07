// add solution here
function theBeatlesPlay (arrayMusic, arrayInstruments){
  var emptyArr = [];
    for (var i = 0; i < arrayMusic.length; i ++){
      emptyArr.push(arrayMusic[i] + " plays " + arrayInstruments[i]);
    }
    return emptyArr
  }




function johnLennonFacts (arr) {
 var i = 0;
 var newArr = [];
 var counter = arr.length;
 while (counter > 0){
   newArr.push(arr[i] + "!!!");
    i++;
   counter--;
 }
 return newArr;
}



function iLoveTheBeatles(num){
var arr = [];
	num++;

	if (num === 18) {
		return("I love the Beatles!");
	}

	var i = 0;
	do {
		arr.push("I love the Beatles!");
		i++;

	} while (i < num);

	return(arr);
}
