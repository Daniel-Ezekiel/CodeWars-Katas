/** 
 * TODO: Function to determine if a Ruby developer will be attending a meetup I am organising from the given data
 * RETURN: a boolean value, true if a Ruby developer will be attending a meetup, false if not
 * EXAMPLE: var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
]; => true
 * PSEUDO CODE: use the filter/reduce method to determine if there's a Ruby developer in the data given for developers attending the meetup then return true if there is and false if there isn't
 * 
 * **/

function isRubyComing(list) {
  //   const res = list.filter(dev => dev.language.toLowerCase() === 'ruby').length;
  const res = list.reduce(
    (count, dev) => (dev.language.toLowerCase() === "ruby" ? count + 1 : count),
    0
  );
  return Boolean(res);
}
