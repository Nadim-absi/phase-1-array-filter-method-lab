const drivers =[ 'Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby',"BoBBy" ]
const driverObjects = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function findMatching(list,selectedDriver){
    const matchedDrivers = list.filter((name) =>  name.toLowerCase() === selectedDriver.toLowerCase())
    return matchedDrivers
}
findMatching(drivers,"bobby")

function fuzzyMatch(list,selectedLetters){
    const matchedDrivers = list.filter(function(name){
       if(name.charAt(0) ===selectedLetters.charAt(0) &&  name.charAt(1) ===selectedLetters.charAt(1))
       return name
    })
    return matchedDrivers
}
console.log(fuzzyMatch(drivers,"Sa"))

function matchName(list,chosenFromObject){
    const matchedDrivers =list.filter((name)=> name.name === chosenFromObject);
    return matchedDrivers
}
// Code your solution here
