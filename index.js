function theBeatlesPlay(musicians,instruments) {
  const emptyArray = new Array()
  for (let i=0; i<musicians.length; i++)
  {
    emptyArray.push(musicians[i] + " plays " + instruments[i])
  }
  return emptyArray
}// add solution here

function johnLennonFacts(facts) {
  const emptyFacts = new Array()
  let i=0
  do
  {
    emptyFacts.push(facts[i]+"!!!")
    i++
  }
  while (i < facts.length)
  return emptyFacts
}

function iLoveTheBeatles(num) {
  const emptyFacts = new Array()
  do
  {
    emptyFacts.push("I love the Beatles!")
    num++
  }
  while (num < 15)
  return emptyFacts
}
