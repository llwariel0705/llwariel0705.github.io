let q = document.getElementById("question");
let a = document.getElementById("answer");

//Create question and answer object
class flashCard {
  constructor (question, answer, message) {
    this.question = question;
    this.answer = answer;
    this.message = message;
  }
}

//Create three question sets and push them into the card array
let card = [];
card.push(new flashCard ("What is your name?", "Amy"));
card.push(new flashCard ("What is your age?", 13));
card.push(new flashCard ("What is your favorite food?", "Ice cream"))

let i = 0;
//Add a listener that displays the answer when clicking the question
q.onclick = function displayAnswer() {
    a.innerHTML = card[i].answer;
  }
  
//Create functions for the previous and next button to display the question one at a time
function nextCard() {
  if (i < card.length - 1) {
    i = i + 1;
  }
  else if (i === card.length - 1) {
    i = 0
  }
  q.innerHTML = card[i].question;
  a.innerHTML = " ";
  alert("Click on the question to see the answer");
}

function previousCard() {
  if (i > 0) {
     i = i - 1;
  }
  else if (i === 0) {
    i = card.length - 1;
  }
  q.innerHTML = card[i].question;
  a.innerHTML = " ";
  alert("Click on the question to see the answer");
}
