function theBeatlesPlay(musicians,instruments){
  var allTheMusicians= [];
  for(var i=0;i<musicians.length;i++)
  allTheMusicians.push(musicians[i] + " plays " + instruments[i]);

    return allTheMusicians;
}
function johnLennonFacts(facts){
   var result=[];
   var i = 0;
    while (i < facts.length) {
        result.push(facts[i] +"!!!");
        i++;
    }
    return result;
  }
function iLoveTheBeatles(number){
var empty=[];
  do{
  empty.push("I love the Beatles!")
  number++;
}while(number<15);
return empty;
}
