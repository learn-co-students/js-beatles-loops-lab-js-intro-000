// add solution here
function theBeatlesPlay(musicians,instruments)
{
let arr=[];

  for(let i =0;i<musicians.length;i++)
  {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr;
}

function johnLennonFacts(facts)
{
  const fa=[];
let i = 0;
while (i<facts.length) {
  fa.push(`${facts[i]}!!!`);
  i++;
}
return fa;
}

function iLoveTheBeatles(n)
{
  let arr=[];
  do
  {
    arr.push("I love the Beatles!");
  n++;
  }
  while (n<15)

  return arr;
}
