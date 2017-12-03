// function theBeatlesPlay(musicians, instruments) {
//   var final = []
//   for( var i = 0; i < musicians.length; i++) {
//     final.push('musicians${i} plays instruments${i}')
//   }
//   return final
// }


function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return array;
}


function johnLennonFacts(facts) {
  const final = []
  let i = 0
  while(i < facts.length) {
    final.push(`${facts[i]}!!!`)
    i++
  }
  return final
}

function iLoveTheBeatles(number) {
  const array = []

  do {
    array.push('I love the Beatles!')
    number++
  } while (number < 15)

  return array
}



// function iLoveTheBeatles(number) {
//   var result = []
// }
