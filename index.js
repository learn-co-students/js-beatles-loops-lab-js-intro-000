// add solution here
function theBeatlesPlay(musiciansarray, instrumentsarray){
  var temparray = []
  for (let i = 0; i < musiciansarray.length; i++){
    temparray.push(`${musiciansarray[i]} plays ${instrumentsarray[i]}`)
  }
  return temparray
}
function johnLennonFacts(facts){ /// while loop!!!
  var i = facts.length -1
  while (i >= 0){
    facts[i] = (facts[i] + '!!!')
    i--
  }return facts
}
function iLoveTheBeatles(num){ /// do/while loop!!///
  var emptyarray = []
  do{
    emptyarray.push('I love the Beatles!')
    num ++;
  } while (15-num > 0);
  return emptyarray
}
///The loop should then increment the number passed in as a parameter.
///The condition of the loop should check to see that the parameter number is less than 15.
///It should contain a number of strings that represents the difference between the input number and 15.
///Return the array with the strings "I love the Beatles!".
