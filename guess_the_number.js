function playGame() {
  const minNum = 1;
  const maxNum = 100;
  const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

  let chances;

  let play = true;

  let level = window.prompt(
    "Choose the difficulty level ( Easy / Medium / Hard )"
  );

  while (play) {
    if (!level) {
      window.alert("Please Choose a valid difficulty level");
      level = window.prompt(
        "Choose the difficulty level (Easy / Medium / Hard)"
      );
      continue;
    }

    if (level.toLowerCase() === "easy") {
      chances = 10;
      window.alert(`You have ${chances} chances`);
      play = false;
    } else if (level.toLowerCase() === "medium") {
      chances = 7;
      window.alert(`You have ${chances} chances`);
      play = false;
    } else if (level.toLowerCase() === "hard") {
      chances = 5;
      window.alert(`You have ${chances} chances`);
      play = false;
    } else {
      window.alert("Please Choose a valid difficulty level");
      level = window.prompt(
        "Choose the difficulty level (Easy / Medium / Hard)"
      );
    }
  }

  let attempts = 0;
  let running = true;

  while (running) {
    let guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
      window.alert("❌ Please enter a valid number");
    } else if (guess < minNum || guess > maxNum) {
      window.alert("⚠️ Please enter a number within range");
    } else {
      attempts++;
      chances--;

      if (answer === guess) {
        window.alert(`🎯 Correct! You guessed it in ${attempts} attempts.`);
        running = false;
      } else if (Math.abs(answer - guess) <= 5) {
        window.alert("🔥 You are very close!");
      } else if (answer > guess) {
        window.alert("⬇️ Too low! Guess higher.");
      } else {
        window.alert("⬆️ Too high! Guess lower.");
      }
      if (chances === 0 && guess !== answer) {
        window.alert(`💀 Out of chances! The correct number was ${answer}.`);
        running = false;
      }
    }
  }
  const playAgain = window.prompt("Would you like to play again? Yes/ No");

  if (playAgain && playAgain.toLowerCase() === "yes") {
    playGame();
  } else {
    window.alert("👋 Thank you for playing!");
  }
}

playGame();
