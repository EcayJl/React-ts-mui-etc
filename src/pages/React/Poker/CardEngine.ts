import cardMap from "./CardMap";

export type TCardStackSize = [string, string, string, string, string];
interface IRenderArray {
  mainArr: Array<TCardStackSize | string[]>;
  flopArr: Array<TCardStackSize | string[]>;
  turnArr: Array<TCardStackSize | string[]>;
}
export default class CardEngine {
  static getBundleRenderArray(): IRenderArray {
    const mainArr = this.getNCards();

    console.log(mainArr, "lo");

    let flopArr = mainArr.slice(0, 3);
    let turnArr = mainArr.slice(0, 4);

    flopArr = flopArr.concat(["zero", "zero"]);
    turnArr = turnArr.concat(["zero"]);
    return {
      mainArr,
      flopArr,
      turnArr,
    };
  }

  static getNCards(n: number = 5): Array<TCardStackSize | string[]> {
    const arr: string[] = [];

    for (let i = 0; i < n; i++) {
      let currLink = this.getRandomStyleLink();

      if (arr.includes(currLink)) {
        while (arr.includes(currLink)) {
          currLink = this.getRandomStyleLink();
        }
      }

      arr.push(currLink);
    }

    let result: Array<TCardStackSize> = [];
    Object.assign(result, arr);

    return result;
  }

  static getRandomStyleLink(): string {
    const allLetters = ["b", "h", "k", "t"];
    const stackSize = 14;
    const rndLetter = allLetters[this.getRandomInt(0, 4)];
    const rndSize = this.getRandomInt(1, stackSize);

    return rndLetter + rndSize;
  }

  static getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
