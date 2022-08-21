import { Typography } from "@mui/material";
import React, { MouseEventHandler, useEffect, useState } from "react";
import Cell from "./Cell";
import Button from "@mui/material/Button";
import styles from "./Cell.module.css";

const PokerPage: React.FC = () => {
  const [bet, setBet] = useState<number>(0);
  const [cardsPool, setCardsPool] = useState<Array<string>>(['zero','zero','zero','zero','zero']);

  const setCardsPoolDecorator = (): void => {
    setCardsPool(['b2', 'b2', 'b2', 'zero', 'zero']);
  }

  const cellElements = cardsPool.map((cardName) => (
    <Cell
      cardName={cardName}
      key={cardName === "zero" ? Math.random() : cardName}
    />
  ));
  return (
    <>
      <div className="poker-container">
        <Typography variant="h2" sx={{ p: 1.5 }}>
          Minimal bet 100 ₽💰
        </Typography>

        <div className={styles.cellRow}>{cellElements}</div>
        <div className={styles.pokerUi}>
          <Typography variant="h2" sx={{ p: 1.5 }}>
            Poket: 500 ₽💰
          </Typography>
          <Typography variant="h2" sx={{ p: 1.5 }}>
            Bet: {bet} ₽
          </Typography>
          <Button variant="text">Set Bet</Button>
          <Button variant="text" onClick={() => {setCardsPoolDecorator()}}>Start Flop</Button>
          <Button variant="text">Turn step</Button>
          <Button variant="text">River step</Button>
        </div>
      </div>
    </>
  );
};

export default PokerPage;
