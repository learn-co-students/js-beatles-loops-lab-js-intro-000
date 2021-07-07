// take 2 arrays of strings (musicians and instruments) and
// returns an array of strings containing what instruments each musician plays
function theBeatlesPlay(musicians, instruments) {
  var newStrings = new Array()
  for (let i = 0; i < musicians.length; i++) {
    newStrings.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newStrings
}

// takes in any array of strings  (facts) and
// returns a new array with exclamation points added to each element
function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    // facts[i] = `${facts[i]}!!!`
    facts[i] = facts[i] + '!!!'
    i += 1
  }
  return facts
}

// takes a number and start increment this number
// returns an array of 'I love the Beatles!' once when passed the parameter 15
// (the number of elements in the array is the ifference between the input number and `15`)
function iLoveTheBeatles(number) {
  var returnStr = new Array()
  do {
    returnStr.push("I love the Beatles!")
  } while (++number < 15)
  return returnStr
}
