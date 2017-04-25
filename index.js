
function theBeatlesPlay(musicians, instruments) {
  const newarr = []
  for ( let i = 0, l = musicians.length; i < l; i++) {
    newarr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return newarr;

}

function johnLennonFacts(facts) {
   const shoutedFacts = []

   let i = 0;
 while(i < facts.length) {
   shoutedFacts.push(`${facts[i]}!!!`);
   i++
 }
   return shoutedFacts
}

function iLoveTheBeatles(num) {
  const arr = []

  do {
    arr.push(`I love the Beatles!`)
    num++
  } while( num < 15)

  return arr;
}
