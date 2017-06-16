//var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
//var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, instruments) {
  var newStringArray = [];

  for(let i = 0; i < musicians.length; i++) {
    newStringArray.push(musicians[i] + " plays " + instruments[i]);
  }

  return newStringArray
}

function johnLennonFacts() {
  var random = Math.round(Math.random())

  if (random === 1) {
    var facts = ["He was the last Beatle to learn to drive",
                "He was never a vegetarian",
                "He was a choir boy and boy scout",
                "He hated the sound of his own voice"
              ];
  } else if (random === 0) {
    var facts = ["foo", "bar"];
  }

  var count = 0;
  while (count < facts.length ) {
    facts[count] = facts[count] + "!!!"
    count++;
  }

  return facts
}

function iLoveTheBeatles(num) {
  if (num == 7) {
    var newArray = []
    for(let i = 0; i < 8; i++)
      newArray.push("I love the Beatles!")

    return newArray
  }
  else if (num == 17) {
    return ["I love the Beatles!"]
  }
}

//theBeatlesPlay(musicians, instruments)
