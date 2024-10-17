// Challenge: Write a function to find from a list of developers, the devs who have missing information and return a list of them as well as a question property within their objects
// Return: an array with the developers having missing info and a new question property asking about that missing info
/* 
  Example
  var list1 = [
    { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
    ]; => [
    { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
    question: 'Hi, could you please provide your firstName.' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
    question: 'Hi, could you please provide your language.' }
    ]
*/
// Pseudocode: Using the filter option, and the Object.keys method you can filter through the list and get the devs who have some keys with missing non-nullish/empty values. Then set the question property for the objects that get returned from the filter method.

function askForMissingDetails(list) {
  //   const incompleteDevList = list.filter(dev => Object.keys(dev).some(prop => !(dev[prop])));
  //   const res = incompleteDevList.map(dev => {
  //     const emptyProps = Object.keys(dev).filter(prop => !(dev[prop]));
  //     emptyProps.forEach(prop => dev.question = `Hi, could you please provide your ${prop}.`);
  //     return dev;
  //   })
  //   console.log(res)

  const incompleteDevList = list.filter((dev) => {
    const emptyProps = Object.keys(dev).filter((prop) => !dev[prop]);
    if (emptyProps.length) {
      emptyProps.forEach(
        (prop) => (dev.question = `Hi, could you please provide your ${prop}.`)
      );
      return dev;
    }
  });
  return incompleteDevList;
}
