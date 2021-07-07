// add solution here

function theBeatlesPlay(musicians, instruments){
  var array = [];
  for( var i = 0; i <= musicians.length - 1; i++){
    var temp = `${musicians[i]} plays ${instruments[i]}`
    array.push(temp)
  }
  return array
}

function johnLennonFacts(array){
  var counter = array.length
  var newArray = []
  var place = 0
  while(counter > 0){
    var holder = `${array[place]}!!!`
    newArray.push(holder)
    --counter
    place++
  }
  return newArray
}

function iLoveTheBeatles(num){
  var array = []
  var counter = num
  do{
    array.push("I love the Beatles!")
    counter++
  } while(counter < 15)
  return array
}