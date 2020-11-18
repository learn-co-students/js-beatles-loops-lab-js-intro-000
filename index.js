const theBeatlesPlay = (musicians, instruments) => {
  const arr = [];

  for (let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return arr;
};

const johnLennonFacts = facts => {
  let i = 0;
  let exclamationFacts = [];
  
  while (i < facts.length) {
    exclamationFacts.push(`${facts[i]}!!!`);
    i += 1;
  }
  return exclamationFacts;
};

const iLoveTheBeatles = num => {
  let loveForBeatles = [];
    
  do {
    loveForBeatles.push('I love the Beatles!');
    num++;
  } while (num < 15);
  
  return loveForBeatles;
};