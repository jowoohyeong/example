var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    console.log(key);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    console.log(acc);
     return acc;
  }, {});
}

var groupedPeople = groupBy(people, 'age');
console.log(groupedPeople);