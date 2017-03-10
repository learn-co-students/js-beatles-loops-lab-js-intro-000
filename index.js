function theBeatlesPlay(musicians, instruments){
  var beatlesBand = []
    for(var i = 0; i < musicians.length; i++){
      beatlesBand.push( musicians[i] + " plays " + instruments[i])
    }
    return beatlesBand
}

function johnLennonFacts(array){
  	var i = 0;
    var newArray =[]
	while( i < array.length){
    newArray.push(array[i] + "!!!");
    i++;
  }
    return newArray
}

function iLoveTheBeatles(number){
  var beatlesFan = []
  do{beatlesFan.push("I love the Beatles!");
  number++
  }
    while(number < 15)
    return beatlesFan
}
