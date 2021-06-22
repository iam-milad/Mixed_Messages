//get a random number from 0 to whatever the size of array.
const getRandomNumber = (arrLength) => {
  return Math.floor(Math.random() * arrLength);
}

//find and return description that either applies to male or female.
function findDescription(celebArr, occuArr, descArr){

  const  celebrity = celebArr[getRandomNumber(celebArr.length)];
  const  celebAccupation = occuArr[getRandomNumber(occuArr.length)];
  const descriptionItem =  descArr[getRandomNumber(descArr.length)];
  const genderArrSize = descriptionItem.appliesTo.length;

  for(let i = 0; i < genderArrSize; i++){
    if(celebrity.gender === descriptionItem.appliesTo[i]){
      if(celebrity.gender === "female"){
        return `${celebrity.name} is a ${celebAccupation} and she is a ${descriptionItem.description} woman`;
      } else {
        return `${celebrity.name} is a ${celebAccupation} and he is a ${descriptionItem.description} man`;
      }
    }
  }

  //if no matching description found, return null.
  return null;
}

//get final description.
const getDescription = () => {

  //array of objects containing celebrities names and genders.
  const celebrities = [{name: "Elon Musk", gender: "male"}, 
                      {name: "Katy Perry", gender: "female"}, 
                      {name: "Angelina Jolie", gender: "female"}, 
                      {name: "Ariana Grande", gender: "female"}, 
                      {name: "Tom Cruise", gender: "male"}, 
                      {name: "Selena Gomez", gender: "female"},
                      {name: "Cristiano Ronaldo", gender: "male"}];

  //array of accupations that apply to celebrities in the array above.
  const occupation = ["entrepreneur", "singer", "Actor", "footballer"];

  //array of objects containing description and gender(s) to which the description can apply (e.g., handsome only applies to male).
  const  descriptions = [{description: "rich", appliesTo: ["male", "female"]},
                          {description: "tall", appliesTo: ["male", "female"]}, 
                          {description: "pretty", appliesTo: ["female"]}, 
                          {description: "handsome", appliesTo: ["male"]}, 
                          {description: "clever", appliesTo: ["male", "female"]},
                          {description: "fit", appliesTo: ["male", "female"]}, 
                          {description: "curvy", appliesTo: ["female"]}];

  //foundDescription is set to null initially to run the while loop. Note: we could use "do while" loop here, but I chose while loop instead.
  let foundDescription = null;

  //call findDescription function until a description is found.
  while(foundDescription === null){
    foundDescription = findDescription(celebrities, occupation, descriptions);
  }

  //return the description found
  return foundDescription;

}

console.log(getDescription());
