import { TCardStackSize } from "./CardEngine";

const enum Suits {
  C0LUBS = "k",
  DIAMONDS = "b",
  HEARTS = "h",
  SPADES = "t",
}
const SuitsArr: string[] = ["k", "b", "h", "t"];
export default class PokerEngine {
  static getIncludesObj(arr: number[]) {
    const result = arr.reduce(function (acc: any, el: number) {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});

    return result;
  }

  //   обьеденил типовые действия в один слой. не очень хорошее решение, помечаю под измеение.
  //  монструозная функция
  static chekDeckCombo(deck: string[]) {
    const arr: number[] = deck.map((i) => {
      return +i.substring(1);
    });

    const result = this.getIncludesObj(arr);

    const objValues: number[] = Object.values(result);
    const isDouble = objValues.includes(2);
    const isTriple = objValues.includes(3);
    const isHouse = objValues.includes(2, 3);

    if (isDouble) {
      const result = this.getIncludesObj(objValues);
      if (result[2] === 2) {
        return "isDoublePair";
      }

      return "isDouble";
    }

    if (isTriple) {
      return "isTriple";
    }

    if (isHouse) {
      return "isHouse";
    }
  }

  static isFlush(deck: Array<string>): boolean {
    let isFlush = false;

    deck.every((value) => {
      for (let i = 0; i < 4; i++) {
        if (value.includes(SuitsArr[i])) {
          isFlush = true;
        }
      }
    });

    return isFlush;
  }
}
