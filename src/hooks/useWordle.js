import { useState } from 'react';

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
    console.log(currentGuess);
  }

  const handleKeyup = ({ key }) => {
    if (key === 'Enter') {
      if (turn > 5) {
        console.log('you have used all your guesses.');
        return;
      }
      if (history.includes(currentGuess)) {
        console.log('you have already tried this word.');
        return;
      }
      if (currentGuess.length !== 5) {
        console.log('must be 5 chars long.');
        return;
      }

      formatGuess();
    }

    if (key === 'Backspace') {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      })
      return;
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  }

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
}

export default useWordle;
