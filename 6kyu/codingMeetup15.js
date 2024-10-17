// Challenge: Write a function to determine the developers whose addition of the ASCII values of the characters of their first name is an odd number
// Return: an array of developers that match this condition
/*
  Example
  var list1 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
    ]; => [
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
    ]
*/
// Pseudocode: en filter through for those developers that the sum of the ascii code of each character in their first name is odd. You can check for this condition by converting the name to an array and the using the reduce or forEach method to sum the ascii values for each character until you get the sum. Then you can use the modulo operator to check if the sum is odd.

function findOddNames(list) {
  return list.filter(
    (dev) =>
      [...dev.firstName].reduce(
        (acc, c, i, a) => acc + a.join("").charCodeAt(i),
        0
      ) % 2
  );
}
