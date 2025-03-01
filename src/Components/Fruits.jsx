import React, { useState } from "react";

const Fruits = () => {
  const [count, setCount] = useState(0);
  handleClick_1 = () => setCount(count + 1);

  const [number, setNumber] = useState(0);
  handleClick_2 = () => setNumber(number + 1);

  const [vote, setVote] = useState(0);
  handleClick_3 = () => setVote(vote + 1);

  let fruits = [
    {
      img: "🍎",
      name: "Apple",
      method: handleClick_1,
      num: count,
    },
    {
      img: "🥭",
      name: "Mango",
      method: handleClick_2,
      num: number,
    },
    {
      img: "🍇",
      name: "Grapes",
      method: handleClick_3,
      num: vote,
    },
  ];

  return (
    <div className="basket">
      {fruits.map((f) => (
        <div className="fruit-container">
          <h1 className="image">{f.img}</h1>
          <h3 className="F-name">{f.name}</h3>
          <button type="submit" onClick={f.method}>
            Vote
          </button>
          <p className="counter">Votes: {f.num}</p>
        </div>
      ))}
    </div>
  );
};

export default Fruits;
