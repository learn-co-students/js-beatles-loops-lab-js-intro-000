
function theBeatlesPlay(musician, instrument) {
  var Beatles = [];

  for (let i = 0; i < musician.length; i++) {
    Beatles.push(musician[i] + " plays " + instrument[i]);
    console.log(Beatles[i]);
  }
  return Beatles;
}

function johnLennonFacts(array) {
  var facts = [];
  var i = 0;

  while (i < array.length) {
    facts.push (array[i] + "!!!");
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var love = [];

  do {
    love.push("I love the Beatles!");
    number++;
  }
  while (number < 15);
  return love;
}
