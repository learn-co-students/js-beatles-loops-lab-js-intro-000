function theBeatlesPlay(names,instruments)
{
  var sentences = []
  for(var i = 0;i<names.length;i++)
  {
    sentences.push(names[i] + " plays " + instruments[i])
    console.log(sentences[i])
  }
    return sentences
}

function johnLennonFacts(facts)
{
  var i=0
  var withExclamations=[]
  while  (i < facts.length)
  {
    withExclamations.push(facts[i] + "!!!")
    i=i+1
  }
  return withExclamations
}
function iLoveTheBeatles(n)
{
  var strings=[]

  do {
    strings.push("I love the Beatles!")
    n++
    
  }
  while (n<15)
return strings
}
