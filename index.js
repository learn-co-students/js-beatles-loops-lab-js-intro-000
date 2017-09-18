function theBeatlesPlay(musicians,  instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++){
    var comb = musicians[i] + " plays " + instruments[i]
    array.push(comb)

  }
  return array
}

 function johnLennonFacts(array){
   var newarray = []
   var n = 0
   while(n < array.length){
    newarray.push(array[n] + "!!!")
     n++
   }
   return newarray
 }

 function iLoveTheBeatles(parameters){
   var factt = [];

    do{
      parameters++
      factt.push('I love the Beatles!')}
    while (parameters < 15)
return factt

 }
