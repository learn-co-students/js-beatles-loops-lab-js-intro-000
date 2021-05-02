// add solution here
function theBeatlesPlay(musicians,instruments)
{
  var comboStrings = [];
  for (var i = 0; i < musicians.length; ++i)
  {
    comboStrings[i] = musicians[i] + " plays " + instruments[i];
  }

  return comboStrings;
}

function johnLennonFacts(facts)
{
  var stringOfFacts = [];
  var b = 0;
  while (b < facts.length)
  {
    stringOfFacts[b] = facts[b] + "!!!";
    ++b;
  }
  return stringOfFacts;
}

function iLoveTheBeatles(number)
{
  var beatles = [];
  var check = number + 1;
  var c = 0;

  do {
    beatles[c] = "I love the Beatles!";
    ++c;

  } while (c <= number && check <= 15)


  return beatles;

}
