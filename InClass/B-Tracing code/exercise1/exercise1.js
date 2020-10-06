let greetPeople = (people) => {
  let greeting = "Hello"
  people.forEach( person => {
    person === people[people.length-1] ? greeting = `${greeting} ${person}.` : greeting = `${greeting} ${person},`;
  })
  return greeting;
}

/*
  Let's trace this piece of code - what is the value of result with this input
  
  */
  let mentors = ['Irina', 'Ashleigh', 'Etza'];
  let result = greetPeople(mentors);
  console.log(result);

