var theBeatlesPlay = (musicians,instruments) => {

  var newArray = [];
  var i;
  for (i = 0; i < musicians.length; i++) {

    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray;
}


var johnLennonFacts = facts => {
  var i = 0;
  while (i < facts.length) {
    facts[i] = `${facts[i]}!!!`;
    i++;
}
  return facts;
}


var iLoveTheBeatles = n => {

    var array = []
    do {
      array = [...array, 'I love the Beatles!']
      n++
    } while (n < 15)
    return array
}
