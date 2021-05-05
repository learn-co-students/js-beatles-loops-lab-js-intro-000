// add solution here
function theBeatlesPlay(member,instrument) { 
  var sentences = []
  for (let i = 0; i < member.length; i++) {
    sentences[i] = `${member[i]} plays ${instrument[i]}`
  
  }
  return sentences
}



function johnLennonFacts(array) {

  var i = array.length - 1
  var newarray = []
  while (i >= 0) {
    newarray[i] = array[i] + "!!!"
    i--
      }
  
  return newarray
}

function iLoveTheBeatles(num) {
  var newarray = []
  var i = 0
  do { 
    newarray[i] = "I love the Beatles!"
    i++
    num++
    }while(num < 15)
 return newarray   
}