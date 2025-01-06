// Let's build a simple poll app!  
// A poll has a question, an array of options from which people can choose, and an array with 
// the number of replies for each option. This data is stored in the starter 'poll' object below.  
// const poll = {  
// question: "What is your favourite programming language?",  
// options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],  
// answers: new Array(4).fill(0),          // This generates [0, 0, 0, 0].  
// }; 
 
// Your tasks:  
// 1. Create a method called registerNewAnswer on the poll object. The method does 2 
// things: 
// • 1.1.  Display a prompt window for the user to input the number of the selected 
// option. The prompt should look like this:  
//                   What is your favourite programming language? 
//                   0: JavaScript  
//                   1: Python  
//                   2: Rust  
//                  3: C++  
//                 (Write option number)  
             
// Create the prompt string using the properties (question & options) from the   
// poll object. 
 
// • 1.2.  Based on the input number, update the 'answers' array property. For 
// example, if the option is 3, increase the value at position 3 of the array by 1. 
// Make sure to check if the input is a number and if the number makes sense 
// (e.g. answer 52 wouldn't make sense, right?)  
// 2. Create a “Answer Poll” button on your webpage. 
// 3. Call registerNewAnswer method whenever the user clicks the "Answer poll" button 
// 4. Create a method displayResults which displays the poll results.  
// 5. Run the displayResults method at the end of each registerNewAnswer method call. 
 
// GOOD LUCK        


const poll = {  
     question: "What is your favourite programming language?",  
     options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],  
     answers: new Array(4).fill(0),          // This generates [0, 0, 0, 0].  
     }; 

poll.registerNewAnswer=function(){
    let displays=Number(prompt(`${poll.question}\n${poll.options[0]}\n${poll.options[1]}\n${poll.options[2]}\n${poll.options[3]}\n`));

    
    let dis=poll.options[displays]

    console.log(dis);
    
    poll.answers[displays] ++
    console.log(poll.answers);
    
 if(displays>this.options.length-1){
    console.log('ERROR');
    
 }
   

}


function displayResults(){
  let max=Math.max(...poll.answers)
  console.log(max);
  
  let indMax=poll.answers.indexOf(max);
  
  console.log(`WINNER IS "${poll.options[indMax]}" SCORE IS:${max}`);

}

document.querySelector("#btn-1").addEventListener("click",function(){
    poll.registerNewAnswer()
    displayResults()
})







                                   // SECOND QUESTION



// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about 
// their dog's age, and stored the data into an array (one array for each). For now, they are 
// just interested in knowing whether a dog is an adult or a puppy.  
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.  
// Your tasks:  
// Create a function checkDogs, which accepts 2 arrays of dog's ages (dogsJulia and 
// dogsKate), and does the following things:  
// 1. Julia found out that the owners of the first and the last two dogs actually have cats, 
// not dogs! So, create a shallow copy of Julia's array, and remove the cat ages from 
// that copied array (because it's a bad practice to mutate function parameters)  
// 2. Create an array with both Julia's (corrected) and Kate's data  
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1  
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy ")  
// 4.   Run the function for both test datasets  
// Test data:  
// • Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3] 
// • Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

let dogsJulia=[3, 5, 2, 12, 7];
let dogsKate=[4, 1, 15, 8, 3];

function checkDogs(datas){
   
    
    let juliascopy=[...datas];
    juliascopy.shift()
    juliascopy.splice(-2,2)
    console.log(juliascopy);
    let juliaKate=[...dogsKate,...juliascopy];
    console.log(juliaKate);
    let adult=juliaKate.filter((item)=>{
        return item>5
    })
    let puppy=juliaKate.filter((item)=>{
        return item<5
    })
    console.log(`ADULT DOGS ARE ${adult}`);
    console.log(`PUPPY DOGS ARE ${puppy}`);
    
    
}

checkDogs(dogsJulia)


//                                  THIRD QUESTION
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog 
// ages to human ages and calculate the average age of the dogs in their study.  
// Your tasks:  
// and does the following things in order:  
// Create a function calcAverageHumanAge, which accepts an array of dog’s ages (‘ages’), 
// 1. Calculate the dog age in human years using the following formula: if the dog is  
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,  
// humanAge = 16 + dogAge * 4. Store the values in variables humanAges. 
// Use Array Methods. 
// 2. Exclude all dogs that are less than 18 human years old (which is the same as 
// keeping dogs that are at least 18 years old). Store the values in variables adults. 
// 3. Calculate the average human age of all adult dogs (use reduce method to 
// calculate average). Return average. 
// 4. Run the function for both test datasets  
// Test data:  
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];


function calcAverageHumanAge(ages) {

    const humanAges = ages.map(dogAge => {
        return dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
    });

    const adults = humanAges.filter(age =>{ 
        return age >= 18
    });

    const average=adults.reduce((acc,item)=>{
         return acc+=item
    },0)/adults.length

    return average;
}


console.log(calcAverageHumanAge(data1)); 
console.log(calcAverageHumanAge(data2)); 


// Rewrite the 'calcAverageHumanAge' function from Challenge #2  
// calcAverageHumanAge2, but this time as an arrow function, and using chaining!  
// Learn more about chaining: https://wish-wah.medium.com/javascript-string-and-array
// method-chaining-60bfb7723514 
// Test data:   
// • Data 1: [5, 2, 4, 1, 15, 8, 3]  
// • Data 2: [16, 6, 10, 5, 6, 1, 4] 



let calcAverageHumanAge2=(ages)=>
 ages.map(item=> item<=2?2*item:16+item*4)
   .filter(item=>item>18)
   .reduce((acc,item,index,arr)=>acc+=item/arr.length,0);
    
console.log(calcAverageHumanAge2(data1));


// Coding Challenge #18   
// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating 
// too much or too little.  
// Eating too much means the dog's current food portion is larger than the recommended 
// portion, and eating too little is the opposite.  
// Eating an okay amount means the dog's current food portion is within a range 10% 
// above and 10% below the recommended portion (see hint).  
// const dogs = [ 
// { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] }, 
// { weight: 8, curFood: 200, owners: ['Matilda'] }, 
// { weight: 13, curFood: 275, owners: ['Sarah', 'John'] }, 
// { weight: 32, curFood: 340, owners: ['Michael'] }, 
// ]; 
// Your tasks:  
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate the 
// recommended food portion and add it to the object as a new property. Do not create 
// a new array, simply loop over the array. Forumla: recommendedFood = weight ** 
// 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)  
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. 
// Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners 
// array, and so this one is a bit tricky (on purpose)  
// 3. Create an array containing all owners of dogs who eat too much 
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little 
// ('ownersEatTooLittle').  
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice 
// and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"  
// 5. Log to the console whether there is any dog eating exactly the amount of food that is 
// recommended (just true or false)  
// 6. Log to the console whether there is any dog eating an okay amount of food (just true 
// or false)  
// 7. Create an array containing the dogs that are eating an okay amount of food (try to 
// reuse the condition used in 6.)  
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in 
// an ascending order (keep in mind that the portions are inside the array's objects        
// Hint is in next page 
// )  
// Hints:  
// • Use many different methods to solve these challenges.  
// • Being within a range 10% above and below the recommended portion means: 
// current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the 
// current portion should be between 90% and 110% of the recommended portion.  



const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
  ];
  

  for (const dog of dogs) {
    dog.recommendedFood = Math.round(dog.weight ** 0.75 * 28);
  }
  

  const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
  if (sarahsDog.curFood > sarahsDog.recommendedFood) {
    console.log("Sarah's dog is eating too much!");
  } else if (sarahsDog.curFood < sarahsDog.recommendedFood) {
    console.log("Sarah's dog is eating too little!");
  } else {
    console.log("Sarah's dog is eating the recommended amount!");
  }
  

  const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recommendedFood)
    .flatMap(dog => dog.owners);
  
  const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recommendedFood)
    .flatMap(dog => dog.owners);
  

    if (ownersEatTooMuch.length > 0) {
    console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
  }
  if (ownersEatTooLittle.length > 0) {
    console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
  }
  

  const anyDogEatingRecommended = dogs.some(dog => dog.curFood === dog.recommendedFood);
  console.log(anyDogEatingRecommended);
  

  const anyDogEatingOkay = dogs.some(dog =>
    dog.curFood > (dog.recommendedFood * 0.90) &&
    dog.curFood < (dog.recommendedFood * 1.10)
  );
  console.log(anyDogEatingOkay);
  

  const okayDogs = dogs.filter(dog =>
    dog.curFood > (dog.recommendedFood * 0.90) &&
    dog.curFood < (dog.recommendedFood * 1.10)
  );
  

  const sortedDogs = [...dogs].sort((a, b) => a.recommendedFood - b.recommendedFood);
  
  console.log(sortedDogs);
  