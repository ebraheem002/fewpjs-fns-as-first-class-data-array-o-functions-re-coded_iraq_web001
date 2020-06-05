
function wakeDog(dogName,dogBreed){

  var str = `Wake ${dogName} the ${dogBreed}`

  console.log(str)
      //return str

}
function leashDog(dogName,dogBreed){
var str = "Leash ".concat(dogName, " the ").concat(dogBreed); 

console.log(str)
 //return str

}

function walkToPark(dogName,dogBreed){
  
 let str =`Walk to the park with ${dogName} the ${dogBreed}`
   console.log(str)
 //return str
}

function throwFrisbee(dogName,dogBreed){
 let str = `Throw the frisbee for ${dogName} the ${dogBreed}`
 //return str
}

function walkHome(dogName,dogBreed){
 let str = `Walk home with ${dogName} the ${dogBreed}`
 //return str
}

function unleashDog(dogName,dogBreed){
  let str = `Unleash ${dogName} the ${dogBreed}`
  return str
}

// let Arr = [
//   wakeDog('Xerox','Border Collie'),
//   leashDog('Boo Radley','Pibble'),
//   walkToPark('Bunny','Labrador'),
//   throwFrisbee('Mary J. Blige','Papillon'),
//   walkHome('Santa Paws','Husky'),
//   unleashDog('Lauren','Golden Retriever')
//   ]
  
  let routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
  ]
  
     
     let Arr = [
   'Xerox',
   'Boo Radley',
   'Bunny',
   'Mary J. Blige',
   'Santa Paws',
   'Lauren'
 ]
 
 let Arr2=[
   'Border Collie',
   'Pibble',
   'Labrador',
   'Papillon',
   'Husky',
   'Golden Retriever'
   ]

 function exerciseDog (dogName,dogBreed){

   for(var i=0;i<routine.length;i++){
    
   routine[i](Arr[i],Arr2[i])
       

   }

 }
 exerciseDog()