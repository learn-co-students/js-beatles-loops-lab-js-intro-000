// add solution here
function theBeatlesPlay(musicians, instruments)
{
  let empty=[];
  for (let i=0;i<musicians.length;i++)
  {
  empty.push(`${musicians[i]} plays ${instruments[i]}`);
  console.log(empty);
  }
  return empty;
}


function johnLennonFacts(facts)
{
  let i=0;
  let factsCopy=[];
  console.log(`<====>input ${facts} size ${facts.length}`)
  while (i<facts.length)
  {
    factsCopy.push(facts[i]+'!!!');
    console.log(i);
    i++;
  }
  console.log(factsCopy);
  return factsCopy;
}


function iLoveTheBeatles(n)
{
  let empty=[];
  do{
    empty.push('I love the Beatles!')
    n++;
  }while(n<15)
  return empty;
}
