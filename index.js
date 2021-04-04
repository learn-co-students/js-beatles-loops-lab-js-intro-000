let iLoveTheBeatles = n =>
  {
    let array = [];
    let m = 0;
    do
    {
      array[m] = "I love the Beatles!";
      m+=1;
      n-=1;
    } while (n<8 && n>-1)
    return array;
  }
let johnLennonFacts = array =>
  {
    let newArray = [];
    for (var i = 0; i < array.length; i++)
    {
      newArray[i] = `${array[i]}!!!`;
    }
    return newArray;
  }
let theBeatlesPlay = (musician, instrument) =>
  {
    let whatTheyPlay = [];
    for (var i = 0; i < musician.length; i++)
    {
      whatTheyPlay[i] = `${musician[i]} plays ${instrument[i]}`;
    }
    return whatTheyPlay;
  }
