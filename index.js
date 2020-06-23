// add solution here
function theBeatlesPlay(musicians, instruments){
  var tab = []
  for(let i = 0; i < musicians.length; i++){
     var result = musicians[i]+" plays "+instruments[i]
     tab.push(result)
  }

  return tab
}
function johnLennonFacts(array){
 var i = 0
 while(i < array.length){

   array[i] = array[i] + "!!!"
   i += 1
 }
 return array
}

function iLoveTheBeatles(number){
  var tab = []
  do{
    tab.push("I love the Beatles!")
    number += 1
  }while(number < 15)

  return tab
}
