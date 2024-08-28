import { useState } from 'react';
import Button from './Button';
import HandButton from './HandButton';
import { compareHand, generateRandomHand, } from './utils';
import HandIcon from './HandIcon';



function getResult(me, other) {
    const comparison = compareHand(me, other);
    if (comparison > 0) return '승리';
    if (comparison < 0) return '패배';
    return '무승부';
  }

function App() {
    const [hand,setHand] =useState("rock");
    const [otherHand,setOtherHand] = useState("rock");
    const [gameHistory, setGameHistory] = useState([]);


    const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem =getResult(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand); 
    setGameHistory([...gameHistory,nextHistoryItem])
 };

 const handleClearClick = () => {
   
   setHand('rock');
   setOtherHand('rock');
   setGameHistory([]);
 };

 


  return (
    <div>
        <Button onClick={handleClearClick}>처음부터</Button>
        <p>{getResult(hand, otherHand)}</p>
    <div>
        <HandIcon value={hand}/>
        VS
        <HandIcon value={otherHand}/>
    </div>
    <p>승부기록: {gameHistory.join(',')}</p>
    <div>
      <HandButton value="rock" onClick={handleButtonClick} />
      <HandButton value="scissor" onClick={handleButtonClick} />
      <HandButton value="paper" onClick={handleButtonClick} />
    </div>
    </div>
  );
}

export default App;
