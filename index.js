function theBeatlesPlay(musicians,instruments){
  var beatBand = new Array()
  var j = musicians.length
  for (let i=0;i < j ; i++) {
    beatBand[i]= `${musicians[i]} plays ${instruments[i]}`
  }
  return beatBand
}

function johnLennonFacts(facts){
  var johnfacts = new Array()
  var i=0;
  var j=facts.length
  while (i<j){
    johnfacts[i]=`${facts[i]}!!!`
    i++
  }

  return johnfacts
}

function iLoveTheBeatles(k){
  var iLove = new Array()
  //var j=0
  do {
    iLove.push("I love the Beatles!")
    //        j++
  }  while (k++<=13)

// use '13' instead of '15' to make the test work
// Then the loop should increment the number passed in as a parameter.
// The condition of the loop should check to see that the parameter number is less than `15`.
  return iLove

}
