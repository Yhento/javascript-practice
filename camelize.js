const camelize = (str) => {

    let camelized_word = str.split('-')
                              .map((word, index) => index == 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
                              .join('');
    return camelized_word;








};

camelize("list-style-image");
camelize("background-color");
camelize("-webkit-transition");