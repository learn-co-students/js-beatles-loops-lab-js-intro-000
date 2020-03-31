// add solution here
function theBeatlesPlay(musicans, instruments) {
  var array = [];
  for (let i = 0; i < musicans.length; i++) {
    array.push(`${musicans[i]} plays ${instruments[i]}`);
  } return array; 
}
function johnLennonFacts(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + "!!!";
  } return array;
}

/*
function johnLennonFacts(array) {
  var Newarray =[];
  for (let i = 0; i < array.length; i++) {
     Newarray.push(`${array[i]}!!!`);
    // array[i] = array[i] + "!!!";
  } return Newarray;
}*/


function iLoveTheBeatles(number) {
  var NewArray = [];
  do {
    NewArray.push("I love the Beatles!");
    number++;
  } while ( number < 15 );
return NewArray;
}
