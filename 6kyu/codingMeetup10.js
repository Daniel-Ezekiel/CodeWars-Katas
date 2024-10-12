/*** 6 kyu - Coding Meetup #10 - Higher-Order Functions Series - Create usernames
 * Challenge: Write a function that updates the information of the developers and adds a username for each developer without changing the order of the original list.
 * Return: an array for the list of developers but updated with a username property
 * Example: 
 * var var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
]; => [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
    username: 'emilyn1994' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
    username: 'nore2004' }
]
 * PseudoCode: use a forEach loop to iterate through the list of developers and then update the object of each developer with the username computed using the firstName in lowercase, the first letter of the last name also in lowercase, then the correct year of birth using the developer's age from the current year that I can get using the date object. Another method is to use the map method, then spread each dev object in the new array and then compute the username property using the same logic.
*/

function addUsername(list) {
  list.forEach(
    (dev) =>
      (dev.username =
        dev.firstName.toLowerCase() +
        dev.lastName.toLowerCase()[0] +
        (new Date().getFullYear() - dev.age))
  );
  return list;

  //   const res = list.map(dev => ({...dev, username: dev.firstName.toLowerCase() + dev.lastName.toLowerCase()[0] + (new Date().getFullYear() - dev.age), }))
  //   return res;
}
