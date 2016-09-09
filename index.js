

function theBeatlesPlay(musicans, instruments){
  var whoPlayWhat = []
  for(var i=0;i<musicans.length;i++){
      whoPlayWhat = [...whoPlayWhat, musicans[i] + " plays " + instruments[i]]
}
  return whoPlayWhat
}

function johnLennonFacts(fact){
var i=fact.length
  while ( i>0) {
    fact[fact.length-i]=fact[fact.length-i] + "!!!"
    --i;
  }
  return fact
}

function iLoveTheBeatles(n){
  var a= []
  do {
    a=[...a, "I love the Beatles!"]
    n--
  } while (n>=0 && n<15)
  return a

}
