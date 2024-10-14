// Challenge: Write a function to determine if the meetup has diverse programming languages
// Return: a boolean value, depending on whether there are diverse languages or not. LAnguages are diverse if the max number of languages is at most 2 times the min number of languages.
/* 
  Example
  var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
]; => false
*/
// Pseudocode: determine the total number of developers for each programming language, then check whether the max language number is at most 2 times the min language number.

function isLanguageDiverse(list) {
  const uniqueLangs = [...new Set(list.map((dev) => dev.language))];
  const countObj = {};
  uniqueLangs.forEach(
    (lang) =>
      (countObj[lang] = list.filter((dev) => dev.language == lang).length)
  );
  const allCount = Object.values(countObj);

  return Math.max(...allCount) <= 2 * Math.min(...allCount);
}
