const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  
  // Beep on command with b
  if (key === 'b') {
    
    process.stdout.write('\x07');
  
  }

  // Set timers with 1 to 9 keys
  if (1 <= Number(key) && Number(key) <= 9) {
    
    console.log(`Starting ${key} second timer\n`)
    
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(key)*1000)
  
  }

  // Termination with Ctrl + C
  if (key === '\u0003') {
    
    console.log("Thanks for using me, ciao!\n");
    process.exit();
  
  }

});

console.log('\nTimer ready\n');