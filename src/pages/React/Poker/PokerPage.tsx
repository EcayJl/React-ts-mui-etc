import { Typography } from "@mui/material";
import React, { MouseEventHandler, useEffect, useState } from "react";
import Cell from "./Cell";
import Button from "@mui/material/Button";
import styles from "./Cell.module.css";

type TGameStatus = 'downtime' | 'flop' | 'turn' | 'river';

const PokerPage: React.FC = () => {
  const [bet, setBet] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<TGameStatus>('downtime');
  const [cardsPool, setCardsPool] = useState<Array<string>>(['zero','zero','zero','zero','zero']);

  const setCurrentStepDecorator = (stepName: TGameStatus): void => {
    setCurrentStep(stepName)
  }

  useEffect(() => {
    setCardsPoolDecorator()
  }, [currentStep])

  const setCardsPoolDecorator = (): void => {
    switch (currentStep) {
        case 'flop':
            setCardsPool(['b2', 'b2', 'b2', 'zero', 'zero']);
        break;
        case 'turn':
            setCardsPool(['b2', 'b2', 'b2', 'b1', 'zero']);
        break;
        case 'river':
            setCardsPool(['b2', 'b2', 'b2', 'b2', 'b2']);
        break;
    }
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
          <Button variant="text" onClick={() => {setCurrentStepDecorator('flop')}}>Start Flop</Button>
          <Button variant="text" onClick={() => {setCurrentStepDecorator('turn')}}>Turn step</Button>
          <Button variant="text" onClick={() => {setCurrentStepDecorator('river')}}>River step</Button>
        </div>
      </div>
    </>
  );
};

export default PokerPage;
