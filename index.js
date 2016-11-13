// theBeatlesPlay case
var musicians = [
  'John Lennon',
  'Paul McCartney',
  'George Harrison',
  'Ringo Starr'
]
var instruments = [
  'Guitar',
  'Bass Guitar',
  'Lead Guitar',
  'Drums'
]
var strings = []
function theBeatlesPlay(musicians, instruments){
      var i = musicians.length && instruments.length
      for (i = 0; i < musicians.length && i < instruments.length; i++){
        strings.push(musicians[i] + ' plays ' + instruments[i])
      }
    return strings
}
// johnLennonFacts case
function johnLennonFacts(facts){
  var counter = 0;
  while (counter < facts.length){
    facts.push(facts[0] + "!!!")
  }
  return facts
}
