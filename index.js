function theBeatlesPlay(arr1,arr2)
{
  var earr=[];
  for(var l=0;l<arr1.length;l++)
  {
    earr[l]=arr1[l]+" plays "+arr2[l];
  }
  return earr;
}

function johnLennonFacts(arr)
{
   var lc=0;
    while(lc<arr.length)
    {
      arr[lc]=arr[lc]+"!!!";
      lc++;
    }
  return arr;
}

function iLoveTheBeatles(num)
{
  var earr=[];
  do {
    earr.push("I love the Beatles!");
    num++;
  } while (num<15);

  return earr;
}
