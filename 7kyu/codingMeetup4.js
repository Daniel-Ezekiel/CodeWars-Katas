/** 
 * TODO: Function to find the name of the first python developer to signup for the meetup
 * RETURN: a string value, the name of the first Python dev. If there isn't, then return 'There will be no Python developers'.
 * EXAMPLE: var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
]; => 'Victoria, Puerto Rico'
 * PSEUDO CODE: use the find method to obtain the developer object with the first python developer to signup for the meetup, alternative methods include the filter and findIndex methods
 * 
 * **/

function getFirstPython(list) {
  const res = list.find((dev) => dev.language.toLowerCase() === "python");
  return res
    ? `${res.firstName}, ${res.country}`
    : "There will be no Python developers";
}
