// Challenge: Write a function to determine the count for the developer food options among those who are attending the meetup
// Return: an object with each food option and the number of developers who prefer that option
/* 
  Example
  var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
        meal: 'vegetarian' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
        meal: 'standard' },
    { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
        meal: 'vegan' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
        meal: 'vegetarian' },
    ]; => { vegetarian: 2, standard: 1, vegan: 1 }
*/
// Pseudocode: Get the unique food options and the create an object with which a loop would be used to add the count for each food option into that object

function orderFood(list) {
  const mealCountObj = {};
  const uniqueMeals = [...new Set(list.map((dev) => dev.meal))];
  uniqueMeals.forEach(
    (meal) =>
      (mealCountObj[meal] = list.filter((dev) => dev.meal === meal).length)
  );
  return mealCountObj;
}
