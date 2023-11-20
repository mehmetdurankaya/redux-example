import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetGame } from "../redux/cardSlice";
import Card from "./Card";

function CardList() {
	const cards = useSelector((state) => state.card.items);
	const gameStatus = useSelector((state) => state.card.gameStatus);
	const point = useSelector((state) => state.card.point);

	const dispatch = useDispatch();

	const handleButton = () => {
		dispatch(resetGame());
	};

	return (
    <div className="cardList">
      {gameStatus === "end" &&
        (point > 0 ? (
          <div className="gameEnd">
            <h1 className="vic">You Won</h1>
            <button onClick={() => handleButton()} className="vicBut">
              Play Again
            </button>
          </div>
        ) : (
          <div className="gameEnd">
            <h1 className="lose">GAME OVER</h1>
            <button onClick={() => handleButton()} className="loseBut">
              Try Again
            </button>
          </div>
        ))}
      {gameStatus === "continue" &&
        cards.map((card, key) => <Card card={card} key={key} />)}
    </div>
  );
}

export default CardList;
