function theBeatlesPlay(musicians,instruments) {
  const theBeatlesArray = [];
  for (var i = 0; i<musicians.length; i++) {
    theBeatlesArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
return theBeatlesArray}


function johnLennonFacts(array) {
  var newArray = []
  var i = 0
  while ( i < array.length) {

    newArray.push(`${array[i]}!!!`);
    i++;
  }
return newArray
}

function iLoveTheBeatles(number) {
  var newDoArray = []

  do {
    newDoArray.push("I love the Beatles!")
    //Then the loop should increment the number passed in as a parameter.  
    number++;
  } while (number < 15);


  return newDoArray;
}
