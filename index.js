function theBeatlesPlay(musicians, instruments){
  var allmusic=[];
  for (var i = 0; i < musicians.length; i++){
    allmusic.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return allmusic;
}
function johnLennonFacts(facts){
var newfacts=[];
var i=0;
while (i<facts.length){
  newfacts.push(facts[i]+'!!!');
  i++;
}
return newfacts;
}



function iLoveTheBeatles(num){
  var love=[];
  do {
    love.push('I love the Beatles!')
    num++;
  } while (num<15);
  return love;
}
