// add solution here
const theBeatlesPlay = (musicians, instruments) => {
  let arr = [];
  for(let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr;
}

const johnLennonFacts = (arr) => {
  let i = 0;
  while(i < arr.length) {
    arr[i] = `${arr[i]}!!!`
    i++;
  }
  return arr;
}

const iLoveTheBeatles = (n) => {
  let arr = []
  do {
    n++
    arr.push('I love the Beatles!')
  } while(n < 15)
  return arr
}
