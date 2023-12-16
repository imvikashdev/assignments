/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  const time = new Date().getTime();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().getTime() - time);
    }, t * 1000);
  });
}

function wait2(t) {
  const time = new Date().getTime();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().getTime() - time);
    }, t * 1000);
  });
}

function wait3(t) {
  const time = new Date().getTime();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().getTime() - time);
    }, t * 1000);
  });
}

async function calculateTime(t1, t2, t3) {
  const result = (await Promise.all([wait1(t1), wait2(t2), wait3(t3)])).reduce(
    (acc, curr) => acc + curr,
  );
  console.log(result);
  return result;
}

module.exports = calculateTime;
