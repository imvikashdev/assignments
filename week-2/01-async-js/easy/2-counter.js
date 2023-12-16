const recursionTimer = (start, gap) => {
  setTimeout(() => {
    console.log(start);
    recursionTimer(start + gap, gap);
  }, gap * 1000);
};

recursionTimer(1, 3);
