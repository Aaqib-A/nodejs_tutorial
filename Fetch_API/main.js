// Fetch API requires a discussion of ...
// Callbacks, Promises, Thenables, and Async/Await

//Callbacks
function firstFunction(parameters, callback) {
  // do stuffs;
  callback();
}

/*
//AKA "callback hell"
firstfunction(para, function () {
  // do stuffs
  secondFunction(param, function () {
    thirdFunction(para, function () {});
  });
});
*/

//Promises

//3 states: Pending, Fulfilled, Rejected
const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes! resolved the promise");
  } else {
    reject("No! Rejected the promise");
  }
});

console.log(myPromise);

myPromise
  .then((value) => {
    return value + 1;
  })
  .then((newValue) => {
    console.log(newValue);
  })
  .catch((err) => {
    console.error(err);
  });

const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("myNextPromise Resolved!");
    }, 3000);
});

myNextPromise.then(value => {
    console.log(value);
})