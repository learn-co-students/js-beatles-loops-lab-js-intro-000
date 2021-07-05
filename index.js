function theBeatlesPlay(musicians, instruments)// add solution here
{
  var newArray= new Array();
  for(let i=0;i<musicians.length;i++)
  {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray
}
function johnLennonFacts(facts)
{
  var i=0,newArray=new Array();
  while (i<facts.length)
  {

    newArray.push(facts[i]+'!!!');
    i++;
  }
  return newArray
}
function iLoveTheBeatles(num)
{
  var newArray=new Array();
  do
  {
    newArray.push('I love the Beatles!')
    num++;
  }
  while (num<15)
  return newArray
}
