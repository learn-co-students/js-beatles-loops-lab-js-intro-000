function theBeatlesPlay(musiciansArr, instrumentsArr) {
  var Arr = []
  //arr.length = 4
  //0, 1, 2, 3 1 is at index 0,
    for (var x = 0; x < musiciansArr.length; x++) {
      Arr.push(`${musiciansArr[x]} plays ${instrumentsArr[x]}`)
    }
    return Arr
  }

  function johnLennonFacts(facts) {
    var index = 0
    while (index < facts.length) {
      facts[index] += "!!!"
      index++
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

    
