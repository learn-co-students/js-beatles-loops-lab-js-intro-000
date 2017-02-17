//Create a function `theBeatlesPlay`, which accepts two parameters- an array of musicians and an array of instruments
/*
describe('Beatles Loops', function() {
  it("returns an array of strings containing what instruments each instrument plays", function() {
    const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

    expect(theBeatlesPlay(musicians, instruments)).toEqual(["John Lennon plays Guitar", "Paul McCartney plays Bass Guitar", "George Harrison plays Lead Guitar", "Ringo Starr plays Drums"]);
  });
*/


function theBeatlesPlay(musicians, instruments) {
  var arrToReturn = [] ;
  var intArrSize  = musicians.length ;
  var strTMP      = "" ;

                                        for ( var i = 0 ; i <= intArrSize - 1 ; i++ ){
                                            strTMP = musicians[i] + " plays " + instruments[i] ;
                                            arrToReturn.push(strTMP) ;

                                        }


return   arrToReturn ;
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Create a function `johnLennonFacts`. This function will accept one argument, an array of facts about John Lennon (note that it might not be exactly the following facts):
/*
describe('johnLennonFacts', function(){
  it("returns an array of strings with exclamation points", function() {
    expect(johnLennonFacts([
      "He was the last Beatle to learn to drive",
      "He was never a vegetarian",
      "He was a choir boy and boy scout",
      "He hated the sound of his own voice"
    ])).toEqual(["He was the last Beatle to learn to drive!!!", "He was never a vegetarian!!!", "He was a choir boy and boy scout!!!", "He hated the sound of his own voice!!!"]);

    expect(johnLennonFacts([
      "foo",
      "bar",
    ])).toEqual(["foo!!!", "bar!!!"])
  });
});
*/


function johnLennonFacts(arrOfFacts) {
    var arrToReturn = [] ;
    var i = 0 ;
                            while (arrOfFacts[i]) {
                                                      arrToReturn.push(arrOfFacts[i] + "!!!") ;
                                                      i++ ;
                            }

  return   arrToReturn ;
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
Create a function `iLoveTheBeatles` which accepts a number as a parameter.
 The body of the function should create a variable that stores an empty array.
 Then, implement a do-while loop inside the function that adds `"I love the Beatles!"` to the empty array.
 Then the loop should increment the number passed in as a parameter.
 The condition of the loop should check to see that the parameter number is less than `15`.
  The function should return the array with the strings `"I love the Beatles!"`.

*/
/*
describe('iLoveTheBeatles', function() {
  it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function() {
    expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
  });

  it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function() {
    expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
  });
});
*/
function iLoveTheBeatles(intNum) {
  var arrToReturn = [] ;
  var intCNT      = intNum  ;

                                        do {
                                                       arrToReturn.push("I love the Beatles!") ;

                                                       intCNT++ ;

                                        } while (intCNT < 15);




return   arrToReturn ;
}
