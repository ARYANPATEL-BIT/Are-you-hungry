# 🎯 Guess The Number Game

A fun and interactive number guessing game available in both **Python** and **JavaScript** implementations. Test your intuition and try to guess the randomly generated number between 1 and 100!

---

## 🎮 Features

- 🎚️ **Three Difficulty Levels**: Easy, Medium, and Hard
- 💬 **Smart Feedback**: Get hints like "Too High", "Too Low", or "Very Close!"
- ✅ **Input Validation**: Ensures only valid numbers are accepted
- 📊 **Score Tracking**: See your attempts and final score
- 🔄 **Replay Option**: Play multiple rounds without restarting
- 🌐 **Multi-Platform**: Console version (Python) and Browser version (JavaScript)

---

## 🎯 How to Play

1. **Choose your difficulty level**:
   - 🟢 **Easy**: 10 chances
   - 🟡 **Medium**: 7 chances
   - 🔴 **Hard**: 5 chances

2. **Start guessing** numbers between 1 and 100

3. **Receive feedback** after each guess:
   - `🔥 You're very close!` - Within 5 numbers of the answer
   - `Too High! Choose Lower` - Your guess is above the target
   - `Too Low! Guess Higher` - Your guess is below the target

4. **Win by guessing correctly** or run out of chances!

5. **Play again** or exit after each round

---

## 🐍 Python Version

### Prerequisites
- Python 3.x installed on your system

### Sample Gameplay
Choose difficulty (easy/medium/hard): medium
Guess a number (1-100): 50
Too Low! Guess Higher
6 chances left!
Guess a number (1-100): 75
🔥 You're very close!
5 chances left!
Guess a number (1-100): 73
🎉Congratulation! You guessed the number in 3 tries!
Your final score: 30
Play Again? (Y/N): y


### Key Features
- Console-based interface
- Exception handling for invalid inputs
- Score calculation based on attempts
- Continuous play loop with replay option

---

## 🌐 JavaScript Version

### Prerequisites
- Any modern web browser

### How to Run
1. Create an HTML file and include the JavaScript code in a `<script>` tag
2. Open the HTML file in your browser
3. The game will start automatically with popup prompts

### Sample Gameplay
- Browser prompts will guide you through difficulty selection
- Alert boxes will provide feedback on your guesses
- Choose to replay directly after finishing

### Key Features
- Browser-based with `window.prompt()` and `window.alert()`
- Automatic restart via recursive function call
- Clean emoji-based feedback system

---

## 📁 Project Structure

guess-the-number/
│
├── guess_the_number.py # Python implementation
├── game.js # JavaScript implementation
└── README.md # This file


---

## 🎨 Gameplay Mechanics

### Difficulty Levels

| Level  | Chances | Challenge |
|--------|---------|-----------|
| Easy   | 10      | Beginner-friendly |
| Medium | 7       | Moderate challenge |
| Hard   | 5       | Expert mode |

### Feedback System
- **Very Close**: Your guess is within 5 numbers of the answer
- **Too High/Too Low**: General direction hints
- **Chances Counter**: Displays remaining attempts after each guess

### Scoring
- **Python Version**: Score = Attempts × 10
- Lower attempts = Better score!

---

## 🚀 Getting Started

### Python
Clone the repository
git clone <repository-url>

Navigate to the directory
cd guess-the-number

Run the Python version
python guess_the_number.py

🛠️ Technologies Used
Python 3: Console-based game logic

JavaScript (ES6): Browser-based interactive version

Random Number Generation: random.randint() (Python) / Math.random() (JavaScript)

### How to Run
