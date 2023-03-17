// How to set an item on local storage
localStorage.setItem('New-Item', 'Value Here');

// How to get an item on local storage
const getItem = localStorage.getItem('New-Item');
console.log(getItem);

// How to remove an item on local storage
localStorage.removeItem('New-Item'); //after coding this previous value removed 

// How to clear all item on local storage
localStorage.setItem('roll-1', 25);
localStorage.setItem('roll-2', 26);
localStorage.setItem('roll-4', 27);
localStorage.setItem('roll-4', 28);
localStorage.setItem('roll-5', 29);

localStorage.clear(); //after this all date cleared


