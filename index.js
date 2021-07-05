/* for loop-

for ([initialization]; [condition]; [iteration]) {
  [loopBody];
}
*/

function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array
}

/* while loop--

while ([condition]) {
  [loopBody with iteration statement];
}
*/

function johnLennonFacts(array) {
let i = 0
while (i < array.length) {
array[i] = array[i] + "!!!";
  i += 1
}
return array
}

/* Do-While Loop 

do {
  [loopBody];
} while ([condition]);

*/

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!");
    number ++;
  } while (number < 15)
  return array 
} 