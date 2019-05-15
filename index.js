// add solution here
function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for(let i=0;i<musicians.length;++i) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}
function johnLennonFacts(array) {
  for(let i=0;i<array.length;++i) {
    array[i] += '!!!';
  }
  return array;
}
function iLoveTheBeatles(num) {
  let array = [];
  do {
    array.push('I love the Beatles!');
    ++num;
  } while (num<15)
  return array;
}
