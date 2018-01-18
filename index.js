function theBeatlesPlay(musicians, instruments) {
  var balls = [];
    for (var i = 0; i < musicians.length; i++) {
        balls.push(musicians[i] + " plays " + instruments[i]);
    }
    return balls;
}

function johnLennonFacts(facts) {
    var newFacts = [];
    var i = 0;
    while (i < facts.length) {
        newFacts.push(facts[i] +"!!!");
        i++;
    }
    return newFacts;
}


function iLoveTheBeatles(number) {
  var nuts = [];
  do {
    nuts.push("I love the Beatles!");
    number++;
  } while (number < 15);
return nuts;
}
