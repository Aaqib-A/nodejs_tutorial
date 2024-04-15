//Union DataType | Literal DataType | Type Aliases 

// ===== == Union DataType == ===== \\
/*
// function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-string') {
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number') {
//         result = input1 + input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }
//     if (resultConversion === 'as-number') {
//         return +result;
//     } else if (resultConversion === 'as-string') {
//         return result.toString();
//     }
// }
// Output 56 3026 MaxAnna

// Alternate Logic //Output 56 56 MaxAnna
function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-string') {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);

const combineNames = combine('Max', 'Anna', 'as-string');
console.log(combineNames);
*/
// ===== == Type Aliases == ===== \\

type Combinable = number | string;
type conversionDescriptor = 'as-number' | 'as-string';

function combine(input1: Combinable, input2: Combinable, resultConversion: conversionDescriptor) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
