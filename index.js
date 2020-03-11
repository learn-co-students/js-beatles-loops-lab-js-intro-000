// add soluemption here
function theBeatlesPlay(musicians,instruments){
  var musiciansInstruments=[];
  for(var i=0;i<musicians.length;i++)
  {
       musiciansInstruments[i]=`${musicians[i]} plays ${instruments[i]}`;
  }
return musiciansInstruments;
}

function johnLennonFacts(facts)
{
 var i=0
 while(i<facts.length)
 {
   facts[i]=`${facts[i]}!!!`
   i++;
 }
 return facts;
}

function iLoveTheBeatles(number)
{
  const emptyArray=[];
  do{
    emptyArray.push(`I love the Beatles!`);
    number++;
  }while(number<15)
  return emptyArray;
}
