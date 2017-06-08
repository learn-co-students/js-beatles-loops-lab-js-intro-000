function theBeatlesPlay(musicians, instruments){
 const emptyArray = [];

    for (let i = 0; i < musicians.length; i++){
      
      emptyArray.push(musicians[i] + " plays " + instruments[i])
    }
  return emptyArray
}

function johnLennonFacts(array){
  let i = 0
  let shoutedFacts = []
  while(i < array.length){
    shoutedFacts.push(`${array[i]}!!!`)
    i++
  }
  return shoutedFacts
}

function iLoveTheBeatles(n){
 const nullArray= [];

  do{
    nullArray.push("I love the Beatles!")
    n++
  } while (n<15) 
   return nullArray

}
