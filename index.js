
function theBeatlesPlay(arrayofM,arrayofI){
  var arrayNew=[]
  for (let i=0;i<arrayofM.length;i++){
    arrayNew.push(`${arrayofM[i]} plays ${arrayofI[i]}`)

  }
return arrayNew;
}

function johnLennonFacts(arrayFacts){
var i=0
while (i<arrayFacts.length){
  arrayFacts[i]+= ('!!!');
  i++;
}
return arrayFacts;
}

function iLoveTheBeatles(num){
  var love=[];
  var i=0;
  do {
    love.push("I love the Beatles!");
  i++;
}
while (i <= num && num<15);
return love;
}
