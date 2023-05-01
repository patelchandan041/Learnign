function findShortestWordLength(str) {
    var words = str.split(' ');
    var shortest = Infinity;
    for (var i = 0; i < words.length; i++) {
      if (words[i].length < shortest) {
        shortest = words[i]
      }
    }
    return shortest;
  }
  console.log(findShortestWordLength("The quick brown fox jumps over the lazy dog")); // 3
  