const colB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const colI = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const colN = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
const colG = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
const colO = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];
let squareB = [B1, B2, B3, B4, B5];
let squareI = [I1, I2, I3, I4, I5];
let squareN = [N1, N2, N3, N4, N5];
let squareG = [G1, G2, G3, G4, G5];
let squareO = [O1, O2, O3, O4, O5];

//Revise code to include, I,N,G,and O arrays, to pick 25 numbers. Will probably set up DOM to display square in Balls at top of page and number in square.




let y = [];

let z = [];

let i = 0;

let j = 0





for (let num of colB) {



  let inArray = false;

  let pickNumber = colB[(Math.floor(Math.random() * colB.length))];

  let sqrB = squareB[(Math.floor(Math.random() * squareB.length))];





  //Choose random square from array squareB

  if ((y.includes(sqrB)) && (y.length != 5)) {

    inArray = true;

    num++;

  } else {

    y.push(sqrB);



    let x = squareB.indexOf(y[i]);

    squareB.splice(x, 1);

    num++;

    x++;

    i++;

  }



  //Choose random number from array colB and remove from array

  if ((z.includes(pickNumber)) && (z.length != 5) && (y.includes(sqrB))) {

    inArray = true;

  } else {

    z.push(pickNumber);



    let w = colB.indexOf(z[j]);

    colB.splice(w, 1);

    console.log(sqrB, pickNumber);

    j++;

  }



  //Stop when y has 5 squares and z has 5 numbers

  if ((y.length === 5) && (z.length === 5)) {

    break;

  }

}

//This code should be able to display the random number in the appropriate square
function insert() {
  text = ;
  document.getElementById("B1").innerHTML = text;

}



insert();
