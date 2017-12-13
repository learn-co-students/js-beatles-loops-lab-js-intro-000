function theBeatlesPlay(musiciansArr, instrumentsArr) {
    let strings = [];
    for (let i = 0; i < musiciansArr.length; i++) {
        strings.push(`${musiciansArr[i]} plays ${instrumentsArr[i]}`)
    }

    return strings
}

function johnLennonFacts(factsArr) {
    let i = 0;
    while (i < factsArr.length) {
        factsArr[i] = `${factsArr[i]}!!!`
        i++
    }

    return factsArr
}

function iLoveTheBeatles(n) {
    let beatlesStringsArr = [];
    const stringToPrint = "I love the Beatles!";

    do {
        beatlesStringsArr.push(stringToPrint)
        n++
    } while (n < 15)

    return beatlesStringsArr
}
