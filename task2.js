function tellJoke() {
    console.log("Why don't scientists trust atoms? Because they make up everything!");
   }

   const jokeInterval = setInterval(tellJoke, 2000);

   // After 10 seconds, stop telling jokes

   setTimeout(() => {

    clearInterval(jokeInterval);

   }, 10000);