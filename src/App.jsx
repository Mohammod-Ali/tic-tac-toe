import { useState } from "react";

function Square({value}) {

  

  function handleClick () {
    
  }

  
  return (
    <button onClick={handleClick} className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg">
      {value}
    </button>
  );
}



function Board() {

  const [ Squares, setSquares] = useState(Array(9).fill(null))

  return (
    <>
      <div className="flex">
        <Square value={Squares[0]}></Square>
        <Square value={Squares[1]}></Square>
        <Square value={Squares[2]}></Square>
      </div>
      <div className="flex">
        <Square value={Squares[3]}></Square>
        <Square value={Squares[4]}></Square>
        <Square value={Squares[5]}></Square>
      </div>
      <div className="flex">
        <Square value={Squares[6]}></Square>
        <Square value={Squares[7]}></Square>
        <Square value={Squares[8]}></Square>
      </div>
    </>
  );
}

export default Board;
