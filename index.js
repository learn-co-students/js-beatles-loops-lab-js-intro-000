function theBeatlesPlay(musicians, instruments) {
  let arr = [];

  for(let i=0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return arr;
}

function johnLennonFacts(arr) {
  let newArr = [];
  let i = 0;

  while(i < arr.length) {
    newArr.push(`${arr[i]}!!!`);
    i++;
  }

  return newArr;
}

function iLoveTheBeatles(n) {
  let arr = [];

  do {
    arr.push(`I love the Beatles!`);
    n++;
  } while (n < 15);
  
  return arr;
}
