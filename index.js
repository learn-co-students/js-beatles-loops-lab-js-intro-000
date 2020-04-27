// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var arr = []
  for(let i = 0; i < musicians.length; i += 1)
  {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}

function johnLennonFacts(facts)
{
  var arr = []
  {
    for(let i = 0; i < facts.length; i += 1)
    {
      arr.push(`${facts[i]}!!!`)
    }
  }
  return arr
}

function iLoveTheBeatles(num)
{
  var arr = []
  do {
    num += 1
    arr.push(`I love the Beatles!`)
  } while (num < 15);
  return arr
}
