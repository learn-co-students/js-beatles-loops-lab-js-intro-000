var theBeatlesPlay = (musicians, instruments ) => {
  let arr = [];
  for(let i=0; i<musicians.length; i++){
    let arrEl = musicians[i] + ' plays ' + instruments[i];
    arr.push(arrEl);
  }
  return arr;
}

var johnLennonFacts = (facts) => {
  let newFacts = [];
  facts.forEach(function(fact) {
    newFacts.push(fact + '!!!');
  });
  return newFacts;
}

var iLoveTheBeatles = (i) => {
  let loveBeatlesArr = [];
  do {
    loveBeatlesArr.push('I love the Beatles!');
    i++;
  } while (i < 15);
  return loveBeatlesArr;
}
