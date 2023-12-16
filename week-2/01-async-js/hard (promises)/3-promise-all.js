/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}

async function calculateTime(t1, t2, t3) {
  const start = process.hrtime();
  await Promise.all([wait1(t1), wait2(t2), wait3(t3)]);
  const diff = process.hrtime(start);
  const elapsed = diff[0] * 1e3 + diff[1] / 1e6; // convert to milliseconds

  return elapsed;
}

module.exports = calculateTime;
