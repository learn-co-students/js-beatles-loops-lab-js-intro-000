// add solution here
  function theBeatlesPlay(theNames){
  var theNames = [ 'John Lennon plays Guitar', 'Paul McCartney plays Bass Guitar', 'George Harrison plays Lead Guitar', 'Ringo Starr plays Drums' ]
  for (let i = 'John Lennon plays Guitar'; i <'Ringo Starr plays Drums'; i++) {
  }
  return theNames
}

function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return shoutedFacts
}

function iLoveTheBeatles(n) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr
}
