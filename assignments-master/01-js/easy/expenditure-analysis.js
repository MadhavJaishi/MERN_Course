/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

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

module.exports = calculateTotalSpentByCategory;
