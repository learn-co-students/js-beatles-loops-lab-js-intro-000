// add solution here
function theBeatlesPlay(musicians,instruments) {
  emptyArray= []
  for (let i=0, i<musicians.length, i+=1) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray
}
