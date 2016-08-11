function theBeatlesPlay(musicians, instruments) {
  const newArray = [];
  for (let i = 0; i < musicians.length; i++ ) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray;
}


function johnLennonFacts (facts) {
  const excited = [];
    let i = 0;
    while (i < facts.length) {
    excited.push(`${facts[i]}!!!`)
    i++;
  }
  return excited
}

function iLoveTheBeatles (n) {
  const love = [];
  do {
    love.push("I love the Beatles!")
    n++
} while (n < 15);

return love
}
