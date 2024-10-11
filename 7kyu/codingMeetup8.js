/*** 7 kyu - Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
 * 
 * Challenge: Write a function that determines whether each continent of the world is represented by at least one developer.
 * Return: a boolean value, true or false if all the continents each have a representative
 * Example: 
 * var list1 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
    ]; => true 
 * PseudoCode: store all continents of the world into an array then use the every method on the array of continents with the condition that checks whether some developers have their respective continents represented in the array of continents. Another way is to map through the list of developers and then grab all available continents. Call the set method to get the unique continents and then finally check whether there are 5 continents total for the unique continents. Return true if there are and false if there aren't 
*/

function allContinents(list) {
  const allConts = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const res = allConts.every((cont) =>
    list.some((dev) => dev.continent === cont)
  );
  return res;

  //   const allConts = list.map(dev => dev.continent)
  //   const uniqueConts = [...new Set(allConts)];
  //   return uniqueConts.length === 5;
}
