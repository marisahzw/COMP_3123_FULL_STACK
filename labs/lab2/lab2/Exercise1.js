const greeter = (myArray, counter) => {
    const greetText = "Hello ";
  
    for (const item of myArray) {
      console.log(`${greetText}${item}`);
    }
  }
  
  greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);
  