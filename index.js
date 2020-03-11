// add solution here
function theBeatlesPlay(mus, instr) {
  var st = []
  for (var i = 0; i < mus.length; i++) {
    st.push(`${mus[i]} plays ${instr[i]}`)
  }
  return st
}

function johnLennonFacts(fac) {
  var i = 0
  var st = []
  while (i < fac.length) {
    st[i] = fac[i] + '!!!'
    i++
  }
  return st
}

function iLoveTheBeatles(n) {
  var st = []
  do {
    st.push('I love the Beatles!')
    n++
  } while (n < 15)
  return st
}
