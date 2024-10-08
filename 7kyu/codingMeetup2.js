/** 
 * TODO: Function to get the update an array of developer objects with a new greeting property
 * RETURN: an updated array of developer objects with a new greeting property with a string value based on their language
 * EXAMPLE: var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
]; => [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
];
 * PSEUDO CODE: use the map method and return an array with the previous values then a new property for each array to record the greeting asking what they like about their language of proficiency. 
 * 
 * **/

function greetDevelopers(list) {
  const res = list.map((dev) => {
    return {
      ...dev,
      greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`,
    };
  });
  return res;
}
