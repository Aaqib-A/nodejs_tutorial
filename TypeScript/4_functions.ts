// Function Return Types and Void | Function Types | Function Callbacks

// ===== == Function Return Types and Void == ===== \\ 
function add4(n1: number, n2: number): number {
    return n1 + n2;
}

//void datatype
function printResult4 (num: number) {
    console.log('Result: ' + num);
}
console.log( printResult4( add4(5,12) ) ); //Will return undefined

//Undefined DataType
function printResult4_2 (num: number): undefined {
    console.log('Result: ' + num);
    return; //For undefined datatype the function should return a value
}

// ===== == Function Types == ===== \\ 
/*
let combineValues: Function;
combineValues = add4;
//combineValues=5; // if we add this statement without the ":Funciton" above. it will throw an error at console.log as it no longer is a function
//combineValues = printResult4; // Again, will give an error due to different parameters
console.log(combineValues(8,8));
*/

//More refined approach to define function types
//let combineValues: () => number; //takes no parameters and returns a number
/*
let combineValues: (a: number, b: number) => number; //takes 2 parameters and returns a number
combineValues = add4;
console.log(combineValues(8,8));
*/

// ===== == Function Callbacks == ===== \\ 
function addAndHandle (n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2;
    cb (result);
}
addAndHandle(10, 20, (result)=>{
    console.log(result);
    return result; // is allowed in TS if void. "Void" above ignores the return statuement
});