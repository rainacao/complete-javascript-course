/* Write your code below. Good luck! 🙂 */
let markMassKg;
let markHeightM;
let johnMassKg;
let johnHeightM;

// data 1
markMassKg = 78;
markHeightM = 1.69;
johnMassKg = 92;
johnHeightM = 1.95;

// data 2
markMassKg = 95;
markHeightM = 1.88;
johnMassKg = 85;
johnHeightM = 1.76;


const BMIMark = markMassKg / (markHeightM * markHeightM);
const BMIJohn = johnMassKg / (johnHeightM * johnHeightM);
console.log(BMIMark, BMIJohn)

const markHigherBMI = BMIMark > BMIJohn;