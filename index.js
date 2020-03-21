// add solution here

function  theBeatlesPlay(musicians, instruments) {
  var newArray = []
for (let i = 0; i < musicians.length && i < instruments.length; i++ ){
  newArray.push(`${musicians[i]} plays ${instruments[i]}`)
}
 return newArray
}


function  johnLennonFacts(array) {
  let counter = 0
 while(counter < array.length) {
   array[counter] = array[counter] + "!!!"
   counter += 1
 }
 return array
}



function iLoveTheBeatles(number) {
  var nwArray = []
   do {
     nwArray.push("I love the Beatles!")
     number ++
   } while(number < 15)
return nwArray
}
