const sortByAge = (arr) => {

    arr.sort((a, b) => a.age > b.age ? 1 : -1);
    

};



let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

console.table(arr);
console.log(arr[0].name);

// now: [john, mary, pete]
