/** 
 * TODO: Function to find the total number of programmers for each programming language of the developers attending the meetup
 * RETURN: an object with each language and the total of developers that use that language.
 * EXAMPLE: var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
]; => { C: 2, JavaScript: 1, Ruby: 1 }
 * PSEUDO CODE: Use map to get all the languages and then use the set method to get the unique values for the languages. Next is to use the for each method to populate and track the number for each of the languages and store in an object
 * 
 * **/
function countLanguages(list) {
  // *** METHOD 1 ***
  const res = {};
  const langArr = list.map((dev) => dev.language);
  const uniqueLangs = [...new Set(langArr)];

  uniqueLangs.forEach(
    (lang) =>
      (res[lang] = list.reduce(
        (acc, dev) =>
          dev.language.toLowerCase() === lang.toLowerCase() ? acc + 1 : acc + 0,
        0
      ))
  );
  //   uniqueLangs.forEach(lang => res[lang] = list.filter(dev => dev.language.toLowerCase() === lang.toLowerCase()).length)
  return res;
}
