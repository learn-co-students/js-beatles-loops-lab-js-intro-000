// add solution here

function theBeatlesPlay(musicians, instruments)
{
  var theBeatles = [];

  for(let i = 0; i < musicians.length; i++)
  {
    var musicianInfo = musicians[i] + " plays " + instruments[i]

    theBeatles.push(musicianInfo)
  }
  return theBeatles;
}

function johnLennonFacts(facts)
{
  var johnLennon = [];
  var n = 0;

  while ( n<facts.length)
  {
    johnLennon.push(facts[n] + "!!!")
    n++
  }

  return johnLennon

}


function iLoveTheBeatles(num)

{
  var loveTheBeatles = [];


  do {
    loveTheBeatles.push("I love the Beatles!")
  } while (num>=7);
  num ++

  return loveTheBeatles
}
