import { TCardStackSize } from "./CardEngine";

const enum Suits {
  C0LUBS = "k",
  DIAMONDS = "b",
  HEARTS = "h",
  SPADES = "t",
}
const SuitsArr: string[] = ["k", "b", "h", "t"];
export default class PokerEngine {
  static get() {}

  static isFlush(deck: Array<TCardStackSize | string[]>): boolean {
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
