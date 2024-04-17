let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => {
    let obj = {};

    obj['fullName'] = `${user.name} ${user.surname}`;
    obj['id'] = user.id;

    return obj;



});
console.table(usersMapped);
console.log(usersMapped[1].id + 2);
console.log(usersMapped[1].fullName);

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
