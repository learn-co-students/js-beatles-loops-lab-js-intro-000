// add solution here
function theBeatlesPlay(musicians,instruments) {
  var music_array=[]
  for(let i=0; i<musicians.length; i++) {
    music_array.push(musicians[i]+" plays "+instruments[i])
  }
  return music_array
}

function johnLennonFacts(facts) {

  var new_facts=[]
  var i=0
  while (i < facts.length) {
    new_facts.push(facts[i]+"!!!")
    i+=1
  }
  return new_facts
}

function iLoveTheBeatles(num) {

  var array=[]
  do {
    array.push("I love the Beatles!")
    num+=1

  }
  while (num < 15)

return array
}
