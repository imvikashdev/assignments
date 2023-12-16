const recursionTimer = (start, gap, customCallback) => {
  setTimeout(() => {
    customCallback(start);
    recursionTimer(start + gap, gap, customCallback);
  }, gap * 1000);
};

// recursionTimer(1, 1, (count) => {
//   console.log(count);
// });

exports.recursionTimer = recursionTimer;
