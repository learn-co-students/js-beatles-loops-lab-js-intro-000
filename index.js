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

function iLoveTheBeatles(parameter){
  var beatlesFan = []
  do{beatlesFan.push("I love the Beatles!")
  }
    while(parameter < 15)
    return beatlesFan
}
