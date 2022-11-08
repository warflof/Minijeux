/*
let monArray = [
    ['bleu ', 'rouge ','vert '],
    ['jaune ', 'blanc '],
    ['velvet ', 'cyan ']
];

let monArrayLength = monArray.length;

for (i = 0; i < monArrayLength; i++) {
    console.log(monArray[i]);
}

console.log('-------------');

monArray.forEach(function(monArray){
    console.log(monArray)
})


console.log(monArrayLength);
console.log(monArray[1][1] + monArray[0][2]);

console.log('---------------')

for (let j = 0; j < monArray.length; j++){
    for (let g = 0; g < monArray[j].length; g++) {
        console.log(monArray[j][g])
    }
}


console.log('----------------');

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let count = 0;

while (count < numbers.length) {
    if (numbers[count] < count) {
        break;
    }
    else {
        console.log([numbers[]]);
    }
    count++
}
*/

let row;
for (let i = 0; i <= 10; i++) {
    row ='';
    for (let j = 0; j < i; j++) {
        row += j + ' ';
    }
    console.log(row);
}


/*
let total = 0;

while (total < 10) {
    total++
    console.log('total : ' + total)
}

do {
    total++
    console.log('total : ' + total)
}while (total < 10)
*/
/*
let squareNumber = 1


for (let x = 1; x < 9; x++) {
  for (let y = 1; y < 9; y++) {
    console.log('x:' + x + '|y:' + y + ' [' + squareNumber + ']')
    squareNumber++
  }
}


let x = 1

while (x < 9) {
    let y = 1
    while (y < 9) {
        console.log('x: ' + x + ' | y: ' + y + ' [' + squareNumber + ']' )
        squareNumber++
        y++
    }
    x++
}
*/


