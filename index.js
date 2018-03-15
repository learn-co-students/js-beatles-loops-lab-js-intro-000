function theBeatlesPlay(name_arr, instrument_arr) {
  var new_arr = []
  for (var i = 0; i < name_arr.length; i++) {
    new_arr.push(`${name_arr[i]} plays ${instrument_arr[i]}`)
  }
  return new_arr
}

function johnLennonFacts(array) {
  let i = 0
  while (i < array.length) {
    array[i] += "!!!"
    i += 1
  }
  return array
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n += 1
  } while (n < 15)
  return array
}
