import { Alert, TextField, Typography } from "@mui/material";
import React, {
  MouseEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import Cell from "./Cell";
import Button from "@mui/material/Button";
import styles from "./Cell.module.css";
import DefaultModal from "../../../components/common/Modal";
import { Context } from "./context";
import CardEngine from "./CardEngine"

type TGameStatus = "downtime" | "flop" | "turn" | "river";

console.log(CardEngine.getNCards());

const PokerPage: React.FC = () => {
  const [bet, setBet] = useState<number>(0);
  const [poket, setPoket] = useState<number>(500);
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [isAlert, setAlert] = useState<string>("none");
  useEffect(() => {
    setTimeout(() => {
      setAlert("none");
    }, 2300);
  }, [isAlert]);

  const [currentStep, setCurrentStep] = useState<TGameStatus>("downtime");
  const [cardsPool, setCardsPool] = useState<Array<string>>([
    "zero",
    "zero",
    "zero",
    "zero",
    "zero",
  ]);
  const setModalProxyDecorator = (): void => {
    modalStatus ? setModalStatus(false) : setModalStatus(true);
  };
  const setCurrentStepDecorator = (stepName: TGameStatus): void => {
    setCurrentStep(stepName);
  };

  useEffect(() => {
    setCardsPoolDecorator();
  }, [currentStep]);

  const setCardsPoolDecorator = (): void => {
    switch (currentStep) {
      case "flop":
        setCardsPool(["b1", "h6", "b8", "zero", "zero"]);
        break;
      case "turn":
        setCardsPool(["b1", "h6", "b8", "b1", "zero"]);
        break;
      case "river":
        setCardsPool(["b1", "h6", "b8", "b1", "h4"]);
        break;
    }
  };

  const DinamicBtn = () => {
    if (currentStep === "flop") {
      return (
        <Button
          variant="text"
          onClick={() => {
            setCurrentStepDecorator("turn");
          }}
        >
          Turn step
        </Button>
      );
    } else if (currentStep === "turn") {
      return (
        <Button
          variant="text"
          onClick={() => {
            setCurrentStepDecorator("river");
          }}
        >
          River step
        </Button>
      );
    } else {
      return (
        <Button
          variant="text"
          onClick={() => {
            setCurrentStepDecorator("flop");
          }}
        >
          Start game Flop step
        </Button>
      );
    }
  };

  const cellElements = cardsPool.map((cardName) => (
    <Cell
      cardName={cardName}
      key={cardName === "zero" ? Math.random() : cardName}
    />
  ));
  return (
    <Context.Provider
      value={{
        modalStatus,
        setModalProxyDecorator,
      }}
    >
      <div className="poker-container">
        <Typography variant="h2" sx={{ p: 1.5 }}>
          Minimal bet 100 ₽💰
        </Typography>
        <Typography sx={{ p: 1.5 }}>
          You can increase the BET at each step.
        </Typography>

        <div className={styles.cellRow}>{cellElements}</div>
        <div className={styles.pokerUi}>
          <Typography variant="h2" sx={{ p: 1.5 }}>
            Poket: 500 ₽💰
          </Typography>
          <Typography variant="h2" sx={{ p: 1.5 }}>
            Bet: {bet} ₽
          </Typography>
          <Button
            variant="text"
            className={styles.animated}
            sx={{ mr: 1 }}
            onClick={() => {
              console.log(modalStatus);

              if (modalStatus === false) {
                setModalStatus(true);
              }
              console.log(modalStatus);
            }}
          >
            Set Bet
          </Button>
          <DinamicBtn />
        </div>
      </div>
      <DefaultModal>
        <div>Enter your bet.</div>
        <TextField
          onChange={(e) => {
            if (e.target.value === "") {
              setBet(0);
            }
            Math.sign(+e.target.value) && e.target.value !== ""
              ? setBet(+e.target.value)
              : setAlert("block");
          }}
          id="standard-basic"
          label={`my poket balance ${poket} RUB`}
          variant="standard"
        />
        <Alert sx={{ mt: 2, display: `${isAlert}` }} severity="error">
          Enter the available balance.
        </Alert>
      </DefaultModal>
    </Context.Provider>
  );
};

export default PokerPage;
