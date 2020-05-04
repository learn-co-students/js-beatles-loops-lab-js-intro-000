// add solution here
function theBeatlesPlay(musicians, instruments) {
  const arr = [];
  const music = musicians.length;
  const instr = instruments.length;

  for (let num = 0; num < music; num++) {
    arr.push(musicians[num] + " plays " + instruments[num]);
  }
  return arr;
}

// ---------------------------------------------------------------------------

function johnLennonFacts(array) {
  var length = array.length;
  var num = 0;
  var arr = [];

  while(length > num){
    arr.push(array[num] + "!!!");
    num += 1;
  }
  return arr;
}

// ---------------------------------------------------------------------------

function iLoveTheBeatles(num) {
  var arr = [];
  var n = 0;

  if(num > 15) {
    num = 0;
  }

  function incrementVariable() {
    n = n + 1;
    return n;
  }

  do {
    arr.push("I love the Beatles!")
  } while (incrementVariable() <= num);
return arr;
}
