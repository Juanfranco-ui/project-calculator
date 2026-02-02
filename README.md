# Web Calculator - The Odin Project

This is a calculator I made using **HTML**, **CSS**, and **Vanilla JavaScript**. It can do all the basic math and has a clean, responsive look.

## How it works

* **The Math Brain:** I built an `operate` function that handles plus, minus, times, and divide using a `switch` statement.
* **Managing Variables:** The script keeps track of `firstNumber`, `secondNumber`, and the `currentOperator`. I set it up so the display updates every time you click a button.
* **Chaining:** The logic lets you keep going with your math. If you hit an operator after typing two numbers, it solves the first part and uses that result for the next step.
* **The UI:** * I went with a dark theme and used **Flexbox** and **Media Queries** so it looks good on any screen.
    * I used the CSS `order` property to move buttons around without messing up the HTML structure.
    * I added `hover` and `active` effects so the buttons feel real when you click them.

## The Files

* **`index.html`**: This is the skeleton of the app, with the display and all the button containers.
* **`style.css`**: This has all the colors and makes sure the calculator works on mobile.
* **`calculator.js`**: This is where the magic happens. It handles the clicks, turns strings into numbers (using `Number()`), and runs the math logic.