function theBeatlesPlay(musicians, instruments){
	var array =[];
	for(let i = 0; i < 4; i++){
		array.push(`${musicians[i]} plays ${instruments[i]}`);
	}
	return array;
}
/* The first time through the loop, the body of the loop
should create a string using the first index of the 
musicians array and the first index of the instruments 
array: "John Lennon plays guitar". This string should be
 added to the empty array you created. The loop should
  make the same sentence for every member of the musicians
  array. 
The function should return the array of new strings.*/
function johnLennonFacts(facts){
  var counter = 0;
  var array = [];
  while (counter < facts.length){
  	array.push(facts[counter] + '!!!');
  	counter++;
  }
  return array;
}

function iLoveTheBeatles(n){
	var array=[];
	do {
		array.push("I love the Beatles!");
		n++;
	} while(n < 15);
	return array;
}