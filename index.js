function theBeatlesPlay(musiciansArr, instrumentsArr) {
  var arr = []
    for (var i = 0; i < musiciansArr.length; i++) {
      arr.push(`${musiciansArr[i]} plays ${instrumentsArr[i]}`)
    }
    return arr
  }

  function johnLennonFacts(facts) {
    var i = 0
    while (i < facts.length) {
      facts[i] += "!!!"
      i++
    }
    return facts
  }

  function iLoveTheBeatles(number) {
    var arr = []
    do {
      arr.push("I love the Beatles!")
    } while (++number < 15)
    return arr
  }
