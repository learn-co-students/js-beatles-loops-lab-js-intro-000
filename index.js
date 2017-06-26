function theBeatlesPlay(musicians, instruments) {
 var newArray = []

 for(var i = 0; i < musicians.length; i++) {
   newArray[i] = musicians[i] + " plays " + instruments[i]
 }
 return newArray
}

function johnLennonFacts(array) {
  var newFacts = []
  var i = 0
  while(i < array.length) {
    newFacts.push(array[i] + "!!!")
    i++
  }
  return newFacts
}


function iLoveTheBeatles(number) {
  var myArray = []
    do {
      myArray.push("I love the Beatles!")
      number++
    } while(number < 15)
  return myArray
}
