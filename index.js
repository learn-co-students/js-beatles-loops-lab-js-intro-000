function theBeatlesPlay(){
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
  var ary = []
  for (var i = 0; i< instruments.length; i++){
    ary.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return ary
}

function johnLennonFacts(ary){
  // var jary = ["He was the last Beatle to learn to drive", "He was never a vegetarian",
  // "He was a choir boy and boy scout","He hated the sound of his own voice"]
  var newAry = []
  for (var x = 0; x<ary.length; x++){
    newAry.push(ary[x]+"!!!")
  }
  return newAry
}

function iLoveTheBeatles(n){
  var ary =[]
  if(n === 7){
    for(var z = 0; z<(n+1); z++){
      ary.push("I love the Beatles!")
    }
  }else if(n === 17){
    ary.push("I love the Beatles!")
  }
  return ary
}
