// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(fact) {
  var num = 0

  while (num < fact.length) {
    fact[num] = fact[num] + '!!!'
    num++
  }
  return fact
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push('I love the Beatles!')
    number = number + 1;
  } while (number < 15);
  return array
}
