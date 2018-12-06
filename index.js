// add solution here
function theBeatlesPlay(muscians, instruments)
{
  var array = []
  for (let i = 0, a = muscians.length; i < a; i++)
  {
    array.push(`${muscians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(array)
{
  var newarray2 = []

    var i = 0
    while (i < array.length) {
      newarray2.push(`${array[i]}!!!`)
      i++
    }
    return newarray2

}

function iLoveTheBeatles(number)
{
  var newarray3 = []

  do {
    newarray3.push("I love the Beatles!")
    number++
  } while (number < 15);

  return newarray3
}
