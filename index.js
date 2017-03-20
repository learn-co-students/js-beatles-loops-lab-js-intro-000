function theBeatlesPlay(musicians,instruments){
  var array=[]
  for(let i=0;i<musicians.length;i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  var n=facts.length-1
  while(n>=0){
    var temp=facts[n]
    facts[n]= temp+'!!!'
    n--;
  }
  return facts
}

function iLoveTheBeatles(n){
  var a=0
  var array=[]
  if(n<15){
  do{
    array.push("I love the Beatles!")
    a++
  }while(a<n+1)
}else{
  array.push("I love the Beatles!")
}
  return array;
}