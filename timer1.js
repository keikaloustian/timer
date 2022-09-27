// Capture timers in seconds (type = string)
let timers = process.argv.slice(2);

for (let i of timers) {
  if (Number(i) < 0 || !Number(i)) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('.');
  }, Number(i)*1000)
}
