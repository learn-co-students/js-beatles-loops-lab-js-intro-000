var arrayM = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var arrayI = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (arr1, arr2) {
  var newArray = [];
  for (var i = 0; i < arr1.length; i++) {
      newArray.push(arr1[i] + " plays " + arr2[i])
  }
return newArray;
}
theBeatlesPlay (arrayM, arrayI);



const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts (array) {
  var answer = [];
  for( var i = 0; i < array.length; i++) {
      answer.push(array[i] + "!!!");
  }
  return answer;
}
johnLennonFacts(facts);



function iLoveTheBeatles(number) {
  var answer = [];
  do{
    answer.push("I love the Beatles!")
    number ++
  } while(number < 15)
  return answer;
}
iLoveTheBeatles(5)
