function generateHashtag (str) {

    var hashtag = str.split(' ').reduce(function(tag, word) {
      return tag + word.charAt(0).toUpperCase() + word.substring(1);
    }, '#');
    
    return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}

console.log(generateHashtag('      Hello       World     '));


string = '      Hello       World     ';

console.log(string.split(' ').join(''));