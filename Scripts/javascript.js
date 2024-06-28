const start = getElementbyId("Start");
start.addEventListener('click', playCard);

function playCard() {


const colBINGO = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 
  63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75]; 
const squareBINGO = ["B1", "B2", "B3", "B4", "B5", "I1", "I2", "I3", "I4", "I5", "N1", "N2", "N3", "N4", "N5", "G1", 
  "G2", "G3", "G4", "G5", "O1", "O2", "O3", "O4", "O5"];

//Revise code to include, I,N,G,and O arrays, to pick 25 numbers. Will probably set up DOM to display square in Balls at top of page and number in square.
let y = [];
let z = [];
let i = 0;
let j = 0;


for (let num of colBINGO) {
  let inArray = false;
  let pickNumber = colBINGO[(Math.floor(Math.random() * colBINGO.length))];
  let sqrBINGO = squareBINGO[(Math.floor(Math.random() * squareBINGO.length))];

  //Choose random square from array squareBINGO

  if ((y.includes(sqrBINGO)) && (y.length != 24)) {
    inArray = true;
    num++;
  } else {
    y.push(sqrBINGO);
    let x = squareBINGO.indexOf(y[i]);
    squareBINGO.splice(x, 1);
    num++;
    x++;
    i++;
  }

  //Choose random number from array colBINGO and remove from array

  if ((z.includes(pickNumber)) && (z.length != 24) && (y.includes(sqrBINGO))) {
    inArray = true;
  } else {
    z.push(pickNumber);
    let w = colBINGO.indexOf(z[j]);
    colBINGO.splice(w, 1);
    
    //console.log(sqrBINGO, pickNumber);
    const dcard = document.getElementbyId(squareBINGO);

    displayCard();

    function displayCard() {
      let text = pickNumber;
      dcard.innerHTML = text;
    }

    j++;
  }

  //Stop when y has 24 squares and z has 24 numbers
  if ((y.length === 24) && (z.length === 24)) {
    break;
  }
}
}

//This code should be able to display the random number in the appropriate square
// function insert() {
//   text = ;
//   document.getElementById("B1").innerHTML = text;
// }

// insert();
