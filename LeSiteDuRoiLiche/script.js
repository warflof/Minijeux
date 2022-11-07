let numbers = [3, 8, 5, 9, 1]
let numbersLength = numbers.length;

// cette boucle va parcourir le tableau de 0 à la taille du tableau - 1 
// car le tableau commence à 0 et donc 0,1,2,3,4 -> Il y a bien 5 éléments !

// 1 - On initialise une variable (main) qui représentera chaque ID du tableau.
// 2 - On boucle tant qu'on ne dépasse pas la taille du tableau - 1 
//     (main < numbersLength -1).
// 3 - Notre boucle évolue de 1 en 1 grâce à main++

// En somme, cette boucle parcours chaque ID du tableau un à un en comparant l'ID
// à chaque passage à la longueur du tableau - 1.
for (let main = 0; main < numbersLength -1; main++) { 


    /* Cette boucle est à l'intérieur de notre première boucle.
       Elle va donc s'appliquer sur chaque ID.

       Cette boucle traquera chaque cellule et fera la permutation de nombres
       entre eux. (Elle poussera le nombre le plus grand à droite.).

       La boucle va parcourir le tableau à partir de 0.
       Pour cela :
       1 - On initialise une variable (cell) à 0

       Cette boucle va nous permettre de checker chaque ID, donc elle ira chercher
       

    
    */
    for (let cell = 0; cell < numbersLength - main -1; cell++) {
        if (numbers[cell] > numbers[cell + 1]) {
                numbers[cell] = numbers[cell] + numbers[cell + 1];
                numbers[cell + 1] = numbers[cell] - numbers[cell + 1];
                numbers[cell] = numbers[cell] - numbers[cell + 1];

        }
    }
}

alert(numbers);