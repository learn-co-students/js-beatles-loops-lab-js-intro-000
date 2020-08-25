// add solution here
// var arrays = []
function theBeatlesPlay(musicians, instruments){
  var str;
  var arrays = []
  
  for (let i = 0; i < musicians.length; i++){
  
      str = musicians[i] + " plays " + instruments[i];
      arrays[i] = str;
      
      
    }
  
  return arrays;
}
theBeatlesPlay()

function johnLennonFacts(factsArray){
  var i = 0;
var facts = [];
 
  while ( i < factsArray.length){
   facts.push(`${factsArray[i]}!!!`);
   i++;
  }
 
  return facts;
}
johnLennonFacts()

function iLoveTheBeatles(n){
  var arrays = []
  do{
    n++;
    arrays.push(`I love the Beatles!`)
  }while(n < 15)
  return arrays;
  
}