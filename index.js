// add solution here
const theBeatlesPlay = (arr, instruments) => {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(`${arr[i]} plays ${instruments[i]}`);
  }
  return newArr;
}

const johnLennonFacts = facts => {
  let i = 0;
  let newArr = [];
  while( facts.length > i){
    newArr.push(`${facts[i]}!!!`);
    i++;
  }
  return newArr;
}

const iLoveTheBeatles = n => {
  let arr = [];
  do {
    arr.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return arr;
}
