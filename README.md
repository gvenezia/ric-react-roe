# Ric-React-Roe
It's tic-tac-toe in React! The web app renders a tic-tac-toe board, a display message, and an interactive history of the game. Users can click on any of the past recorded moves to revert the game to that state. The display message will tell you who's turn is next, whether anyone's won the game, or whether the game is a draw.

### Why was it built?
To explore the basic principles of React and create a single-page web app.

### How was it built?
I follow [the official React tutorial](https://reactjs.org/tutorial/tutorial.html) to create the basic functionality of this project. 

Now I'm adding these extra features that aren't explained in the tutorial: 
* ~~Display the location for each move in the format (col, row) in the move history list~~
* ~~Bold the currently selected item in the move list~~
* ~~Rewrite Board to use two loops to make the squares instead of hardcoding them~~
* Add a toggle button that lets you sort the moves in either ascending or descending order
* When someone wins, highlight the three squares that caused the win
* ~~When no one wins, display a message about the result being a draw~~

#### Note:
While React apps requires configuration of tools like Babel and Webpack, this project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)—which preconfigures the necessary tools.

Here is the most recent version of the [create-react-app guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
