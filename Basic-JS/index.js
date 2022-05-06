// Developer Test 

// Basic JavaScript (bonus for efficiency):

// Below are varriables to be used for the below questions
// Global Varriables

var departmentInfo = require('./json/departmentInfo.json');
var objectArray = require('./json/objectArray.json');
var people = require('./json/people.json');

var objectF = {
  value: 'f',
  Id: 5
};


// end Global Varriables 

// 1. Write a function that adds two given numbers
function sumTwoNumbers(a, b) {
  return a + b;
}

// 2. Adding 'objectF' to an 'objectArray'
objectArray.push(objectF);

// 3. Write a function that returns Id 3 from 'objectArray'
function returnItemFromObjectArray(id) {
  var result = objectArray.filter(obj => obj.Id == id);
  return result && result.length > 0 ? result[0].Id : "no item matched";
}


// 4. Write a function that merges 'people' with 'departmentInfo' based on department
function getMergeList(peopleList, departmentList, mergedKey) {
  var newPeopleList = [];
  var resultList = [];

  departmentList.forEach(department => {
    newPeopleList = newPeopleList.length > 0 ? [] : newPeopleList;
    peopleList.forEach(person => {
      if (person[mergedKey] == department[mergedKey]) {
        newPeopleList.push(person);
      }
    });
    resultList.push({ ...department, "people": newPeopleList });
  });
  return resultList;
}




console.log(sumTwoNumbers(2, 2));
console.log(objectArray);
console.log(returnItemFromObjectArray(3));
console.log(getMergeList(people, departmentInfo, "department")); 
