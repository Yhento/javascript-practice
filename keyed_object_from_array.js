const groupById = (users) => {

    let value = users.reduce((obj, item) => {
        console.log(item);
        obj[item.id] = item;

        return obj;

    







    },{});

    return value;
}








let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users);

  console.table(usersById);

  