'use strict';

exports.findPets = function(tags, limit) {

  var examples = {};
  
  examples['application/json'] = [ {
  "name" : "aeiou",
  "id" : 123456789,
  "tag" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.addPet = function(pet) {

  var examples = {};
  
  examples['application/json'] = {
  "name" : "aeiou",
  "id" : 123456789,
  "tag" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.findPetById = function(id) {

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