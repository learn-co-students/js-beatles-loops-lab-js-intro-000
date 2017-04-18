function theBeatlesPlay(array_musicians, array_instruments) {
  var n = [];
  for (let i = 0; i < array_musicians.length; i++){
    n.push(`${array_musicians[i]} plays ${array_instruments[i]}`)
  }
  return n
}

function johnLennonFacts(array) {
  while (array[array.length - 1].slice(-1) != '!') {
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i] + "!!!";
    }
  }
    return array
}

function iLoveTheBeatles(num) {
  var love = []
  do {
  love.push('I love the Beatles!')
  num++
} while (num < 15);
  return love 
}



