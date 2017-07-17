function theBeatlesPlay (musicians, instruments) {
  const facts = [];

  for(let i = 0; i < musicians.length; i++){
    facts.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return facts
}

function johnLennonFacts (facts){
  let counter = 0;
  while(counter < facts.length){
    facts[counter] += "!!!";
    counter += 1;
  }
  return facts;
}

function iLoveTheBeatles (num) {
    let iLuvTheBeat = []
   do {
     iLuvTheBeat.push('I love the Beatles!');
     num += 1;
   } while (num < 15)

   return iLuvTheBeat;
}
