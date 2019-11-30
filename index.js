// add solution here
function theBeatlesPlay(musicians, instruments) {
  var myArray = []
  for (i = 0; i < musicians.length; i++) {
    myArray.pop(`${musicians[i]} plays ${instruments[i]}`)
  }
  return myArray
}
