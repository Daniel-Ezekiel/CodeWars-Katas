/*** 7 kyu - Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?
 * 
 * Challenge: Write a function that determines whether each age group in tens is represented by at least one developer.
 * Return: a boolean value, true or false if all age groups have a representative
 * Example: 
 * var list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
    { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
    ]; => true 
 * PseudoCode: store all age groups into an array then use the every method on the array of age groups with the condition that checks whether some developers have their age within an availabel age group. Another way is to map through the list of developers and then grab all available continents. Call the set method to get the unique continents and then finally check whether there are 5 continents total for the unique continents. Return true if there are and false if there aren't 
*/

function isAgeDiverse(list) {
  const ageRange = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  const res = list.some((dev) => dev.age > 100)
    ? ageRange.every((age) =>
        list.some((dev) => dev.age - age >= 0 && dev.age - age <= 9)
      )
    : false;
  return res;
}
