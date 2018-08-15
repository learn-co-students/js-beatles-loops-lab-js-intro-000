// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var array = [];
  for(var i = 0; i < musicians.length; i++)
  {
    array.push('${musicians[i]}' + "plays"+ '{$instruments[i]}')
  }
  return array;
}

function johnLennonFacts(farray)
{
  var farray = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];
  for (let i = 0; i < farray.length; i++)
  array[i] = farray[i] + '!!!'
  return array
}


function iLoveTheBeatles(number)
{
  var array = [];
  var i = 0;
  do {
    array.push('I love the Beatles ');
    i++;
  }
  while(number < 15);
  return array;
}
