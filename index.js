function theBeatlesPlay(arrM, arrI)
{
  var n = [];
  for (var i=0; i<arrM.length; i++)
  {
    n.push(`${arrM[i]} plays ${arrI[i]}`);
  }
  return n;
}

function johnLennonFacts(arrF)
{
  var i = 0;
  var n = [];
  while(i<arrF.length)
  {
    n.push(arrF[i] + "!!!");
    i++;
  }
  return n;
}

function iLoveTheBeatles(i)
{
  var n = [];

  do{
    n.push("I love the Beatles!");
    i++;
  }while(i<15);

  return n;
}
