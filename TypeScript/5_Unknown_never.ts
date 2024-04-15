// Unknown DataType | Never DataType

// ===== == Unknown DataType == ===== \\ 
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

//userName = userInput; //Error if userInput:unkown | Not an error if userInput:any

if (typeof userInput === 'string') {
    userName = userInput;
}

// ===== == Never DataType == ===== \\ 
function generateError (message: string, code: number): never {
    throw {messgae: message, errorCode: code};
}
const result = generateError('An error occured', 500); 
console.log(result); // although the default return type is void, it will not return an 'undefined'. So, in this funcion, although says void it's return datatype is 'never'.

// another example of never dataType
// function infiniteLoop (): never {
//     while (true){}
// }