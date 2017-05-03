function theBeatlesPlay (musicians, songs) {
  var playlist = [];
  var string = '';
  for(var i = 0;i<musicians.length;i++) {
    string = musicians[i] + ' plays ' + songs[i];
    playlist.push(string);
  }
  return playlist;
}

function johnLennonFacts (array) {
  var playlist = [],
      string = '';
  for(var i = 0;i<array.length;i++) {
    string = array[i] + '!!!';
    playlist.push(string);
  }
  return playlist;
}

function iLoveTheBeatles (number) {
  var array = new Array();
  var string = "I love the Beatles!";
  for (number; number<15;number++) {
    array.push(string);
  }
  if (number>=17) {
    array=['I love the Beatles!']
  }
  return array;
}