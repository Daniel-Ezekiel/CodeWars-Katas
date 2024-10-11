/*** 7 kyu - Coding Meetup #6: Higher-Order Functions Series - Find the most senior developer
 * 
 * Challenge: Write a function that find the most senior developers in the list
 * Return: an array of objects with the information of the most senior developer(s);
 * Example: 
 * var list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]; => [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]
 * PseudoCode: map out the ages and then sort them. Then use the set method to get the unique ages ana then grab the highest value and filter the original list by that value to obtain the correct result.
*/

function findSenior(list) {
  const ages = list.map((dev) => dev.age);
  const sortedAges = ages.sort((a, z) => a - z);
  const uniqueAges = [...new Set(sortedAges)];
  const mostSeniorAge = uniqueAges[uniqueAges.length - 1];

  const res = list.filter((dev) => dev.age === mostSeniorAge);
  return res;
}
