/** 
 * TODO: Function to get the number of JavaScript developers in Europe from a array of developers
 * RETURN: a number or 0 if there's nothing
 * EXAMPLE: var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
    ]; => 1
 * PSEUDO CODE: use the filter method and return the array length based on the condition of which developer object is both a JavaScript developer and living in Europe.
    try the reduce method as well and see if it's possible to get the same result.
 * 
 * **/

function countDevelopers(list) {
  //   Using the filter method on the list array, return res.length to get the total number of JS developers
  //   const res = list.filter(a => a.continent.toLowerCase() == 'europe' && a.language.toLowerCase() == 'javascript')

  //   Using the reduce method on the list array, use the currentValue to track developers and accumulate the value depending on the conditional result
  const res = list.reduce(
    (acc, c, a) =>
      c.continent.toLowerCase() == "europe" &&
      c.language.toLowerCase() == "javascript"
        ? acc + 1
        : acc + 0,
    0
  );
  return res;
}
