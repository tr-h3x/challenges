//Array reversal w/o method

const reverseArray = (sentence => {
    let newArray = [];
    while (sentence.length) {
      newArray.push(sentence.pop());
    }
    return newArray;
  })
  
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 

  ////////////////////////////////////

  //For Loop to print array

  const greetAliens = (stringElement) => {
    for (let i = 0; i < aliens.length; i++) {
      console.log(`Oh powerful ${aliens}, we humans offer our unconditional surrender!`);
    }
  }
    
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  
  greetAliens(aliens);

  ////////////////////////////////////

  //Loop array

  const convertToBaby = (arr => {
    let babyAnimals = [];
    for (let i = 0; i < arr.length; i++) {
      babyAnimals.push(`baby ${arr[i]}`);
      };
      return babyAnimals;
    })
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals)) 

  ////////////////////////////////////

  //Loop array

  const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = arr => {
  arr.forEach(politelyDecline);
}

console.log(declineEverything(veggies));

const acceptEverything = (veg) => {
  for (i = 0; i < veg.length; i++) {
    console.log(`Ok, I guess I will eat some ${veg[i]}.`);
  }
}

acceptEverything(veggies);

////////////////////////////////////

// .map() 

const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

const squareNums = arr => {
  return arr.map(toSquare);
}

console.log(squareNums(numbers));

////////////////////////////////////

//For-loop w toUpperCase() and .push() method

const shoutGreetings = arr => {
    let newArr = [];
    for (let i=0; i < arr.length; i++) {
    newArr.push(`${arr[i].toUpperCase()}!`);  
    } return newArr;
  }
  
  const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
  
  console.log(shoutGreetings(greetings))

////////////////////////////////////

// Sort array - descending

const sortYears = arr => {
    return arr.sort(function(a, b){return b-a})
  }
  
  const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]
  
  console.log(sortYears(years))

  ////////////////////////////////////


  //filter() && includes() for two arrays

  const justCoolStuff = (arr1,arr2) => {
    return arr1.filter(item => arr2.includes(item));
  };
  
  
  const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
  
  const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
  
  console.log(justCoolStuff(myStuff, coolStuff))
  

    ////////////////////////////////////
