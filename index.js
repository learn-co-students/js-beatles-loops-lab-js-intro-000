function theBeatlesPlay(musicians, instruments){
  var Beatles = [];
  for (var i = 0; i < musicians.length; i++) {
    Beatles.push(`${musicians[i]} plays ${instruments[i]}`);
  };
return Beatles;
};

function johnLennonFacts(facts){
  var factsArray = [];
  var i = 0;
  while (i<facts.length){factsArray.push(`${facts[i]}!!!`);
i++;};
return factsArray;
};

function iLoveTheBeatles(num){var newArray = [];
do {newArray.push("I love the Beatles!");num++;

} while (num<15);
return newArray;
};
