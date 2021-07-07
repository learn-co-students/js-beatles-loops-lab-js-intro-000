// add solution here
function theBeatlesPlay(musicians, instruments) {
  let newArray = [];

  for(let i = 0; i < musicians.length; i++) {
    let name = musicians[i];
    let instrument = instruments[i];
    let string = `${name} plays ${instrument}`;

    newArray.push(string);
  }

  return newArray;
}

function johnLennonFacts(array) {
  let newArray = [];
  let i = 0;
  while(i < array.length){
    let string = array[i] + '!!!';
    newArray.push(string);
    i++;
  }

  return newArray;
}

function iLoveTheBeatles(num) {
  let newArray = [];

  if(num < 15) {
    do{
      newArray.push('I love the Beatles!');
      num--;
    } while(num >= 0);
  } else {
    newArray.push('I love the Beatles!');
  }

  return newArray;
}
