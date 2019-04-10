function theBeatlesPlay(array1,array2) {
  var empty = [];
  for (let i=0; i< array1.length;i++){
    empty.push(`${array1[i]} plays ${array2[i]}`)
  }
  return empty;
}
function johnLennonFacts(array3) {
  var i=0;
  var empty= [];
  while(i<array3.length) {
    empty.push(array3[i] + "!!!")
    i++;
  }
  return empty;
}
function iLoveTheBeatles(number) {
  var newarray = [];
  do{number++;
    newarray.push("I love the Beatles!");
  }while(number<15);
  return newarray;
}