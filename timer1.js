const args = process.argv;

beep = (num) => {
  for (let i = 2; i < num.length; i++) {
    if (-1 < num[i]) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, num[i] * 1000)
      console.log(`${num[i]} seconds`);
    } else {
      continue;
    }
  }
};

beep(args);