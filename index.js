function theBeatlesPlay(musicians,instruments){// create a emptyfunction() and give it 2 variables parameters
  var array = []// create a variable called array which has no value[]
  for (var i=0; i < musicians.length; i++){//var i has a value of 0, if i is smaller than .length(true), it will add 1 to i
    array.push(musicians[i] + " plays " + instruments[i]);// array.push will add 1 musicians + plays + instruments to the variable array(new array) }
}
  return array// will return array once condtion of for Loop is finished
}

function johnLennonFacts(facts){// create a function with a array parameter
var i = 0// create a variable and gave it a value 0 as a starting point
while(i < facts.length){// tested while 0 is smaller than facts length(this is the ending point)
  facts[i]=facts[i]+"!!!"// facts[index value] adds !!! to the array
  i++// incerement(++) starting from 0 till facts.length
}
return facts // returns the facts(array) with the added !!!
}

function iLoveTheBeatles(i){// create a function and gave it a value(7)
var array=[]// created a new array without a value
do{array.push("I love the Beatles!")//added 'I love beatles' to the array
i++}//increment
while(i<15)// till its <15
return array// return array
}
