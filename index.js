var theBeatlesPlay = (musicians, instruments)=>{
  var result =[]
  for(let i=0; i<musicians.length;i++)
    result.push(musicians[i]+" plays "+instruments[i])
  return result
}

var johnLennonFacts = (facts)=>{
  return facts.map(function(i){
    return i+'!!!'
  })
}

var iLoveTheBeatles = (number) =>{
  var result =[]
  do{
    result.push('I love the Beatles!')
    number ++
  }while(number<15)
  return result
}
