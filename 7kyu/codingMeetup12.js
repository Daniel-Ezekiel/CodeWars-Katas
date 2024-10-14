// Challenge: Write a function to find the GitHub admins for a particular programming language in the array list of developers
// Return: another array with the list of devs who are GitHub admins for the specified programming language or an empty array if there aren't any admins
/* 
  Example
  var list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
  ]; => [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
  ]
*/
// Pseudocode: Use the filter method to get the developers who are GitHub admins for the specific programming language, if there aren't any admins, this method will return an empty array

function findAdmin(list, lang) {
  return list.filter(
    (dev) => dev.language === lang && dev.githubAdmin === "yes"
  );
}
