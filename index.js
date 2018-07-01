function theBeatlesPlay(musiciansArray, instrumentsArray){
    var array = []
    for (let i = 0; i < musiciansArray.length; i++)
        array.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`)
    return array
}

function johnLennonFacts(factsArray){
    var array = []
    for (let i = 0; i < factsArray.length; i++)
        array[i] = factsArray[i] + '!!!'
    return array
}

function iLoveTheBeatles(number){
    var array = []
    do {
        array.push('I love the Beatles!')
        number++
    } while (number < 15)
    return array
}
