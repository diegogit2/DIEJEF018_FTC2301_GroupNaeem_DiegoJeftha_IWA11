const firstName = 'John';
const age = 35;
const hobbies = 'Coding';

const logTwice = (hobby1) => {
  console.log(hobby1)   //changed parameter to hobby 1
  console.log(hobby1)   //changed parameter to hobby 1
}

hobby = () => {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobbies}!`)
}

hobby ();