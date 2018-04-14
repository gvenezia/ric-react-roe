/* Boilerplate code from the react tic-tac-toe setup tutorial https://reactjs.org/tutorial/tutorial.html*/

/* Import the required react modules and the .css */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ============= Components ==================
function Square(props){
    return (
      <button 
        className="square" 
        onClick={props.onClick} 
        >
          {props.value}
      </button>
    );
};

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square 
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  
  // Instead of hard coding, use loops to generate render the board
  // Fill with the squares by looping through the rows and columns, 
  // and pushing the squares into JSX wrappers
  render() {
    let num = 0;
    let boardArr = [];
    let squares = [[],[],[]];
    
    for (let row = 0; row < 3; row++){
      for (let col = 0; col < 3; col++){
        // for the first row, render the squares for each column and load eacn into the squares array
        squares[row].push(this.renderSquare(num++));
      }
      
      // with the loaded array, push them into the main boardArray with a html wrapper
      boardArr.push(<div className="board-row">{squares[row]}</div>);
    }
    
    // Now the loaded boardArr can be returned
    return <div>{boardArr}</div> ;
  }
}

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        newSquare: null,
        }],
      xIsNext: true,
      stepNumber: 0,
    };
  }
  
  handleClick(i){
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    
    // Check for the end of the game
    if (calculateWinner(squares) || squares[i]){
      return;
    }
    
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        newSquare: i,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
  
  jumpTo(step){
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  };
  
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    let bold = null;
    
    const moves = history.map( (step, move) => {
      const descOfCurrMove = move ? `Go to move #${move} (row: ${Math.floor(step.newSquare / 3) + 1}, col: ${(step.newSquare % 3) + 1})` : `Go to the beginning`;
      
      // Add a computed style for each <li>
      move === this.state.stepNumber ? bold = {fontWeight: '800'} : bold = null;
      
      return (
        <li id={move}>
          <button style={bold} onClick={() => this.jumpTo(move)}>{descOfCurrMove}</button>
        </li>
      );
    });
    
    let status;

    if (winner){
      status = `Winner: ${winner}`;
    } else {
      status = this.state.xIsNext ? `Next player: X` : `Next player: O`;
    }
    
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ================= Functions ==================
// Helper function
function calculateWinner(squares) {
  // hard coded winning combinations
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    // destructuring assignment
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// =============== React DOM Render =========================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
