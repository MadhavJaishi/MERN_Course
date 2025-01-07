function calculateTotalSpentByCategory(transactions) {
    let objects = [];
    for (let i = 0; i < transactions.length; i++) {
      let flag = false;
      for (let j = 0; j < objects.length; j++) {
        if (transactions[i]["category"] === objects[j]["category"]) {
            flag = true;
            objects[j]["totalSpent"] += transactions[i]["price"];
        }
      }
  
      if (flag) {
        continue;
      }
      
      let object = {};
      object["category"] = transactions[i]["category"];
      object["totalSpent"] = transactions[i]["price"];
      objects.push(object);
    }
    return objects;
  }
  let transactions = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
    {
        id: 2,
        timestamp: 1656259600000,
        price: 20,
        category: 'Food',
        itemName: 'Burger',
    },
    {
        id: 3,
        timestamp: 1656019200000,
        price: 15,
        category: 'Clothing',
        itemName: 'T-Shirt',
    },
    {
        id: 4,
        timestamp: 1656364800000,
        price: 30,
        category: 'Electronics',
        itemName: 'Headphones',
    },
    {
        id: 5,
        timestamp: 1656105600000,
        price: 25,
        category: 'Clothing',
        itemName: 'Jeans',
    },
];
  console.log(calculateTotalSpentByCategory(transactions));