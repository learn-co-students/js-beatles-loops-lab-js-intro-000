function theBeatlesPlay(musicians, instruments)
{
  var array = new Array();
  var n = musicians.length;
  for(let i = 0; i < n; i++)
  {
    array[i] = musicians[i] + " plays " +[instruments[i]];
  }
  return array;
}
function johnLennonFacts(factsarray)
{ var n = factsarray.length;
  var i = 0;
  while(i < n)
  {
    factsarray[i] = factsarray[i] + "!!!";
    i++;
    
  }
  return factsarray;
}
function iLoveTheBeatles(num)
{
  var counter = 0;
  var array = new Array();
  do{
    array[counter] = "I love the Beatles!";
    counter++;
    num++;
  }while(num < 15);
  return array;
}
