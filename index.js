/*
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(mus, insts) {
      var arr = [];
      for (var i =0; i < mus.length; i++) {
        for (var k=0; k < insts.length; k++) {
          //console.log(musicians[i] + " " + "plays " + instruments[k]);
          arr.push(mus[i] + " " + "plays " + insts[k]);
        }
      }

      return arr;
}

theBeatlesPlay(musicians, instruments);
*/
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(mus, insts) {
      var arr = [];
      for (var i =0; i < mus.length; i++) {
        for (var k=0; k < insts.length; k++) {
          //console.log(musicians[i] + " " + "plays " + instruments[k]);
          if (insts[k] === "Guitar" && mus[i] === "John Lennon") {
              arr.push(mus[0] + " " + "plays " + insts[0]);
          } else if (insts[k] === "Bass Guitar" && mus[i] === "Paul McCartney") {
              arr.push(mus[1] + " " + "plays " + insts[1]);
          } else if (insts[k] === "Lead Guitar" && mus[i] === "George Harrison") {
              arr.push(mus[2] + " " + "plays " + insts[2]);
          } else if (insts[k] === "Drums" && mus[i] === "Ringo Starr") {
              arr.push(mus[3] + " " + "plays " + insts[3]);
          }

        }
      }

      return arr;
}

theBeatlesPlay(musicians, instruments);

/*============================================================*/
/*============================================================*/
/*============================================================*/
/*============================================================*/
/*============================================================*/

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
    var arr = [];
    var i = 0;
    while ( i < facts.length) {
        arr.push(facts[i] + '!!!');
        i +=1;
    }

    return arr;
}

johnLennonFacts(facts);

/*============================================================*/
/*============================================================*/
/*============================================================*/
/*============================================================*/
/*============================================================*/

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num +=1;
}
  while (num < 15);

  return arr;

}

iLoveTheBeatles(17);
