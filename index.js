const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(arrMus, arrIns) {
  let strings =[];
  for (let i = 0; i<arrMus.length; i+=1) {
    strings.push(arrMus[i] + " plays " + arrIns[i]);
  }
  return strings;
}

function johnLennonFacts(array) {
  let exclaim =[];
  for (let facts in array) {
    exclaim.push(array[facts] + "!!!");
  }
  return exclaim;
}

function iLoveTheBeatles(num) {
  let arr = [];
  do {
    arr.push("I love the Beatles!");
    num +=1;
  } while (num <15 );
  return arr;
}
