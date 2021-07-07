var beatles=[]

var theBeatlesPlay = (musicians,instruments) => {
  for(let i=0;i<musicians.length;i++){
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}



 var johnLennonFacts = (facts) => {
var i=0
var beatles2=[]
   while(i<facts.length){
     beatles2.push(`${facts[i]}!!!`)
     i++
   }
   return beatles2
 }

var iLoveTheBeatles = (n) =>{
  var beatles3=[];
  let i=n;

  function increment(){
    i=i+1;
    return i;
  }
  do{
    beatles3.push('I love the Beatles!')
  } while (increment()<15)
  return beatles3
}
