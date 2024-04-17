const getAverageAge = (arr) => {
    number_of_people = arr.length;

    total_ages = arr.reduce((total, person) => total + person.age, 0);

    return total_ages / number_of_people;

}



let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

