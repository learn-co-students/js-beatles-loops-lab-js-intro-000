// add solution here
function theBeatlesPlay (musicians, instruments){
  var array =[ ];
  for (var i=0; i<musicians.length ;i++){
  array.push(musicians[i]+ ' plays ' +  instruments[i])
    
  }
  return array
}

function johnLennonFacts(facts){
var counter= 0 ;
 while (counter<facts.length){
facts[counter] += '!!!'
counter +=1
}
return facts 
}


function iLoveTheBeatles(Number){
  var array =[ ];
  do {
  array.push('I love the Beatles!')
Number +=1;
}
while ( Number <15)

return array;
}