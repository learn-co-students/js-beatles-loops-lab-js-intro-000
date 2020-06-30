// add solution here
function theBeatlesPlay(musicians, instruments){
  let output = [];

  for(let i = 0 ; i < musicians.length ; i++){
    output.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return output;
}

function johnLennonFacts(facts){
  let count = 0;
  let output = [];

  while (count < facts.length){
    output.push(`${facts[count]}!!!`)
    count++
  }
  return output
}

function iLoveTheBeatles(num){
  let output = [];

  do {
    output.push('I love the Beatles!')
    num++
  } while (num < 15)

  return output;
}
