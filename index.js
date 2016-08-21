function theBeatlesPlay(musicians, instruments){
  var shaheer=[];
for(let i=0;i<musicians.length;i++){
shaheer.push(`${musicians[i]}` +" plays "+ `${instruments[i]}`)
}
return shaheer
}


/*function johnLennonFacts(facts){
  var i=4;
        while(i){
facts=console.log(facts[i], "!!!");
i--;
}
return facts
}*/

function johnLennonFacts(facts) {
  var i = 0;
        while(i < facts.length) {
facts[i]+= "!!!";
i++;
}
return facts;
}

function iLoveTheBeatles(number){
  var coool=[];
    do{
coool.push("I love the Beatles!");
number++;
  }while(number<15)
  return coool;
}
