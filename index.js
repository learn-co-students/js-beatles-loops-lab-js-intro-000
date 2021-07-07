
function theBeatlesPlay(musicians, instruments){
var emptyArr = [`${musicians[0]} plays ${instruments[0]}`];
  for (var i = 1; i <4; i++){
    emptyArr.push (`${musicians[i]} plays ${instruments[i]}`);
  } return emptyArr;
}

// function break

function johnLennonFacts(facts){
var newArray = [];
var i = 0;
  while (i<facts.length)
      {newArray.push (`${facts[i]}!!!`); i++;
  }return  newArray;
}

//function break

function iLoveTheBeatles(num){
var newArray = [];
do {
  newArray.push('I love the Beatles!'); num++;
} while (num<15)
return newArray
}
