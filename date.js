//In the Node.js file system each file treated as a separete module.
//Every module is presented with an object 'module'.
//If you want to use some variables or functions from current module in the different module
//you should add this data to the object 'exports' which is exist inside 'module' by default
//To use this module in different module create in it a constant  and assign to it 'require('./moduleName')'
//you can use a shortcut 'exports' instead of 'module.exports'
module.exports = function() {
  let dateToday = new Date();
  const weekDayToday = dateToday.toLocaleString(['en-GB', 'ru-RU'], {
    weekday : 'long',
    day : 'numeric',
    month : 'long'
  });
  return weekDayToday;
}
