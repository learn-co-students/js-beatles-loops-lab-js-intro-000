function theBeatlesPlay(arrMusic, arrInstrument)
{
  var arr = new Array();
  var string;
  for (var i = 0; i < arrMusic.length; i++)
  {
    string = arrMusic[i] + ' plays ' + arrInstrument[i];
    arr.push(string);
  }
  return arr;
}

function johnLennonFacts(array)
{
  var newFacts = new Array();
  var i = 0;
  while (i < array.length)
  {
    newFacts.push(array[i] + '!!!');
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(n)
{
  var i = n;
  var arr = new Array();
  do {
    arr.push('I love the Beatles!');
    i++;
  } while (i < 15);
  return arr;
}
