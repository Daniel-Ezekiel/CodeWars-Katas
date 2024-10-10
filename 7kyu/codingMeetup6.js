/*** 7 kyu - Coding Meetup #6: Higher-Order Functions Series - Can they code in the same language?
 * 
 * Challenge: Write a function that determines in all developers code in the same language
 * Return: a boolean value, true or false if all code in the same language or not
 * Example: 
 * var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
]; => true 
 * PseudoCode: use map to get all the languages and use the set method to make the values unique. then if the length is 1, return true, else return false. another method is to get the language for the first developer and use that to check whether all other developers code using that same language.
*/

function isSameLanguage(list) {
  //   Method 1 - Using map, set and checking if length is 1;
  //   const langArr = list.map(dev => dev.language);
  //   const uniqueLang = [...new Set(langArr)];

  //   return uniqueLang.length === 1;

  //   Method 2: Get the first language and use the every method to determine whether it's same for other devs
  const firstLang = list[0].language;
  const res = list.every((dev) => dev.language === firstLang);
  return res;
}
