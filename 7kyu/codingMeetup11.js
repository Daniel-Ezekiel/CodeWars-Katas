/** 
 * Coding Meetup #11 - Higher-Order Functions Series - Find the average age
 * 
 * Challenge: To write a function and determine what the average age of all developers is when computed
 * Return: a number representing the average age of the developers
 * Example: var list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
]; => 50
 *Pseudo-code: using the reduce method, compute the sum of all the ages and then divide by the total number of developers or use the map method to grab all the ages, then use the reduce method to obtain the total of the ages and then divide by the total number of developers.
 */

function getAverageAge(list) {
  const res = list.reduce((total, dev) => total + dev.age, 0) / list.length;
  return Math.round(res);

  //   const agesAverage = list.map(dev => dev.age).reduce((acc, c) => acc + c , 0)/list.length;
  //   return Math.round(agesAverage)
}
