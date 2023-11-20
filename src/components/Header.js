import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCount, setPoint } from "../redux/cardSlice";

function Header() {
	const count = useSelector((state) => state.card.count);
	const point = useSelector((state) => state.card.point);
	const first = useSelector((state) => state.card.firstChoice);
	const second = useSelector((state) => state.card.secondChoice);

	const dispatch = useDispatch();

	useEffect(() => {
		if (first !== "" && second !== "") {
			dispatch(setCount());
			if (first === second) {
				dispatch(setPoint("true"));
			} else {
				dispatch(setPoint("false"));
			}
		}
	}, [first, second, dispatch]);

	return (
		<div className="header">
			<p>Memory Card Game</p>
			<div className="headerBottom">
				<div>
					<p>
						Notes: <br /> Start game 200 points <br /> If your choise is correct you will get 50 points <br /> If your choise is wrong you will lose 10 points
					</p>
				</div>
				<div>
					<p>
						Your Score: {point} <br />
						Count: {count}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Header;
