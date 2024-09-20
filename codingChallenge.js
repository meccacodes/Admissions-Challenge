// This problem was very easy for me. Something I'm not sure about is how to tell if my code is performant and efficient. Can this be faster?

const findSum = function(array) {
 let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return(sum);
};

// This problem took me a while to figure out. The first for loop was obvious, but the second one with all the initialized variables was a bit confusing. Here, I also learned about the Object constructor and how to use it to create an object.

const findFrequency = function(array) {

  const counts = {};

  // Convert the array into an object where the keys are the unique elements from the array, and the values are the number of times those elements appear.

  for (const i of array) {
    counts[i] = counts[i] ? counts[i] + 1 : 1;
  }

  // mostFrequent and leastFrequent stores the elements
  // highestCount and lowestCount to keep track of their frequencies 
  // 'highestCount' starts at 0, while 'lowestCount' starts at Infinity so that any actual count will be lower.

  let mostFrequent = '';
  let highestCount = 0;
  let leastFrequent = '';
  let lowestCount = Infinity;

  // For each element of the counts object, compares its count to the current 'highestCount' and 'lowestCount'. 
  // If the count is higher than 'highestCount', it updates 'mostFrequent' and 'highestCount'. 
  // If it's lower than 'lowestCount', it updates 'leastFrequent' and 'lowestCount'.

  for (const key in counts) {
    if (counts[key] > highestCount) {
      mostFrequent = key;
      highestCount = counts[key];
    }
    if (counts[key] < lowestCount) {
      leastFrequent = key;
      lowestCount = counts[key];
    }
  }

  // Creates a new empty object called returnObject using the Object constructor

  const returnObject = new Object();

  // Adds two properties to this object: 'most' and 'least'. The values for these properties are taken from the mostFrequent and leastFrequent variables.

  returnObject.most = mostFrequent;
  returnObject.least = leastFrequent;

  return returnObject;
};

// This problem was very easy for me, I've practiced this before when looking over interview questions.  From what I gather, this is a very common question asked in technical interviews.

// using chaining: split -> reverse -> join -> compare to original string

const isPalindrome = function(str) {
  let reversedStr = str.split('').reverse().join('');
  if (str.toLowerCase() === reversedStr.toLowerCase()) {
    return true;
  } else return false;
};

// This one was difficult for me. In particular the concept of initialising the iterator at 1. I've only ever seen it initialised at 0.

const largestPair = function(array) {

  // As a starting point, set the largest product to be the product of the first two elements in the array.

  let largestProduct = array[0] * array[1];
  
  // The loop starts at index 1 (not 0) and because we need pairs of numbers it continues until the second to last element of the array. 
  //In each iteration, it multiplies the current number (array[i]) with the next number (array[i + 1]) to get the currentProduct.
  // If the currentProduct is greater than the current largestProduct, it updates largestProduct to be the currentProduct.

  for (let i = 1; i < array.length - 1; i++) {
    const currentProduct = array[i] * array[i + 1];
    if (currentProduct > largestProduct) {
      largestProduct = currentProduct;
    }
  }
  
  return largestProduct;

};

// I had to look up the solution to this problem.  I kept trying to use split and join like in the plaindrom question and it was not working.
// I had never seen the inxexOf method before.

const removeParenth = function(str) {
  const start = str.indexOf('(');
  const end = str.indexOf(')');
  return str.slice(0, start) + str.slice(end + 1);
  }

removeParenth('ido(not)liketocode'); // 'idoliketocode'


// This one was mid difficulty for me.  I knew sort of what needed to be done, but the logic-ing was a bit tricky.
// In general trying to navigate how to best logic out the solutions by breaking it down into bite sized steps is one of my weaknesses.
// I thought about trying to use a switch statement here, case a = 1, case b = 2, etc. But I think that would have been more complicated than necessary.
// Also in the back of my head I'm always thinking about perfomarnce and optimisation because I know that is important in the real world.  Although I am not sure how to maasure performace or even what the difference in perfromance is between different solutions.


const scoreScrabble = function(str) {

  // split the string into an array of letters
  const letters = str.split('');

  // create an object to store the points
  const points = {
    'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'l': 1, 'n': 1, 'r': 1, 's': 1, 't': 1,
    'd': 2, 'g': 2, "b": 3, "c": 3, "m": 3, "p": 3, 'f': 4, 'h': 4, 'v': 4,  'w': 4, 'y': 4, 'k': 5, 'j': 8, 'x': 8, 'q': 10, 'z': 10}
  
    // create a variable to store the score
  let score = 0;
  
  // loop through the letters
  for (let i = 0; i < letters.length; i++) {
    // add the score of the letter to the score
    score += points[letters[i]];
  }
  
  // return the score
  return score;
};
