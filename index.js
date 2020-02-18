// add solution here
function theBeatlesPlay(arrayOfM, arrayOfI)
{
  var newArray = [];
  let string = ""
  for(let i = 0; i < arrayOfM.length; i++)
  {
    string = `${arrayOfM[i]} plays ${arrayOfI[i]}`;
    newArray.push(string);
  }
  return newArray;
}

function johnLennonFacts(arrayOfFacts)
{
  let string = "";
  var newArray = [];
  var i = 0;
  while(i < arrayOfFacts.length ){
    string = `${arrayOfFacts[i]}!!!`;
    newArray.push(string);
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(num){

  var newArray = [];
  var string = "";

  do {
    string = "I love the Beatles!";
    newArray.push(string)
    num++;
  }
  while(num < 15){
  return newArray;
  }
}
