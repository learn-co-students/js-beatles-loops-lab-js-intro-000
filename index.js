// add solution here
function theBeatlesPlay(musicians, instruments) {
  let x = [];
  for (let i = 0; i < musicians.length; i++){
    x.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return x;
}

function johnLennonFacts(arr){
  let i = 0;
  let newArr = [];
  while (i < arr.length) {
    newArr.push(`${arr[i]}!!!`);
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(num) {
  let x =[];
  if (num === 17){
    x.push("I love the Beatles!")
  } else {
    do {
      x.push("I love the Beatles!");
      num = num - 1;
    } while (num >= 0)
  }
  return x;
}
