const rot13 = (str) => {
    const rot13FirstHalf = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
    const rot13SecondHalf = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var characters = str.split('');

    characters.forEach((character, index) => {

        lookup_character = character.toLowerCase();
        


        if (rot13FirstHalf.includes(lookup_character)) {
            character === character.toUpperCase() ? characters[index] = rot13SecondHalf[rot13FirstHalf.indexOf(lookup_character)].toUpperCase() 
                                                  : characters[index] = rot13SecondHalf[rot13FirstHalf.indexOf(lookup_character)];
            
        } 
        else if (rot13SecondHalf.includes(lookup_character)) {
            character === character.toUpperCase() ? characters[index] = rot13FirstHalf[rot13SecondHalf.indexOf(lookup_character)].toUpperCase() 
                                                  : characters[index] = rot13FirstHalf[rot13SecondHalf.indexOf(lookup_character)];
        }

        
        

        


    })
    console.log(characters.join(''));
    console.log(str);



} 



rot13("Guvf vf zl svefg EBG13 rkprepvfr!");

