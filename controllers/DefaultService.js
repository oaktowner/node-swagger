'use strict';
var Firebase = require("firebase");

var myFirebaseRef = new Firebase("https://crackling-torch-499.firebaseio.com/");

exports.findPets = function(tags, limit) {
  var examples = {};
  
  examples['application/json'] = [ {
    "name" : "aeiou",
    "id" : 123456789,
    "tag" : "aeiou"
  }, {
    "name" : "sometimesy",
    "id" : 123456789,
    "tag" : "sometimesy"

  } ];
  
  return(examples[Object.keys(examples)[0]]);
  /*
    console.log(examples);
    console.log("what you want to return:")
    console.log(examples[Object.keys(examples)[0]])


  var myPets = new Firebase("https://crackling-torch-499.firebaseio.com/pets");
  myPets.orderByKey().once("value", function (dataSnapshot) {
    var data = dataSnapshot.val();
    console.log(data)    
    return(data);
  });
  return null;
*/


}
exports.addPet = function(pet) {

  console.log(pet);
  var petsRef = myFirebaseRef.child("pets");
  var newPetRef = petsRef.push();
  newPetRef.set(pet);

  var examples = {};
  
  examples['application/json'] = {
    "name" : "aeiou",
    "id" : 123456789,
    "tag" : "aeiou"
  };
    
  
/*  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];*/
    return(pet);
  
}
exports.findPetById = function(id) {
/*  var petRef = myFirebaseRef.child("pets/" + id);
  petRef.once("value", function (dataSnapshot){
    console.log(data)    
    return(data);
  });
  return(null);
*/
  var examples = {};
  

  examples['application/json'] = {
    "name" : "aeiou",
    "id" : 123456789,
    "tag" : "aeiou"
  };
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
}
exports.deletePet = function(id) {

  var examples = {};
  

  
}
