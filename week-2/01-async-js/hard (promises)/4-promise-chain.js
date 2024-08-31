/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const startTime = Date.now(); // Record start time

  return wait1(t1)
    .then(() => wait2(t2))  // Chain the next promise
    .then(() => wait3(t3))  // Chain the final promise
    .then(() => {
      const endTime = Date.now(); // Record end time
      const elapsedTime = endTime - startTime; // Calculate elapsed time in milliseconds
      return elapsedTime; // Resolve with the total elapsed time
    });
}

module.exports = calculateTime;
