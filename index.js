



  var theBeatlesPlay = function (musicians, instruments) {
   var array = [];
   for (var i = 0; i < musicians.length; i++) {
   var string = `${musicians[i]} plays ${instruments[i]}`
    array.push(string);
  }
  return array

}

 var johnLennonFacts = function (array) {
  var arrayOfFacts = [];
  var i = 0;
  while (i < array.length) {
    var shout = `${array[i]}!!!`
      arrayOfFacts.push(shout);
      i++;
  }
  return arrayOfFacts;
}

var iLoveTheBeatles = function (number) {
  var array = [];
  var someNumber = number;
  do {
    array.push("I love the Beatles!");
    someNumber++;
  }
  while (someNumber < 15);
return array
}
