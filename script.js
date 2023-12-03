const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------
// Task 1
const backPages = new Stack();
const nextPages = new Stack();

// Task 2
let currentPage = "Google";

// ------------------------------
// Helper Functions
// ------------------------------

// Task 3
const showCurrentPage = (action) => {
  console.log(`\n${action}`);
  console.log(`Current page = ${currentPage}`);
  console.log('Back page = ', backPages.peek());
  console.log('Next page = ', nextPages.peek());
}

// Task 4
const newPage = (page) => {
  backPages.push(currentPage);
  currentPage = page;
  while (!nextPages.isEmpty()) {
    nextPages.pop();
  }
  showCurrentPage("New Page");
}

// Task 5
const backPage = () => {
  nextPages.push(currentPage);
  currentPage = backPages.pop();
  showCurrentPage("Back Page");
}

// Task 6
const nextPage = () => {
  backPages.push(currentPage);
  currentPage = nextPages.pop();
  showCurrentPage("Next Page");
}
/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

// ------------------------------
// User Interface Part 1
// ------------------------------
// Task 7
let finish = false;

// Task 8
let showBack = false;
let showNext = false;

// Task 9
showCurrentPage('DEFAULT: ');

// Task 10, 11
while (!finish){
  let instructions = baseInfo;
  if (!backPages.isEmpty()){
    instructions += ", " + backInfo;
    showBack = true;
  } else {
    showBack = false;
  }
  if (!nextPages.isEmpty()){
    instructions += ", " + nextInfo;
    showNext = true;
  } else {
    showNext = false;
  }
  instructions += ", " + quitInfo;
  console.log(instructions)

  // Task 14
  const answer = prompt("Where would you like to go today?");

  // Task 15
  let lowerCaseAnswer = answer.toLowerCase();

  // Task 16
  switch(lowerCaseAnswer) {
  case 'n':
    if (showNext){
      nextPage();
      break;
    } else {
      console.log('Cannot go to the next page. Stack is empty.');
      break;
    }
  case 'b':
    if (showBack){
      backPage();
      break;
    } else {
      console.log('Cannot go back a page. Stack is empty.');
      break;
    }
  case 'q':
    finish = true;
    break;
  default:
    newPage(lowerCaseAnswer);
    break;
    }
}
