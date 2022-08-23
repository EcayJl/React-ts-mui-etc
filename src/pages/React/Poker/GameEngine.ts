const enum Suits {
  CLUBS = "k",
  DIAMONDS = "b",
  HEARTS = "h",
  SPADES = "t",
}
//на вынос из файла. в будущем планирую сделать работу с мастями иначе.
const SuitsArr: string[] = ["k", "b", "h", "t"];
export default class PokerEngine {
  static staticCases = {
    metaRoyalCase: [1, 13, 12, 11, 10],
  };

  static getIncludesObj(arr: number[]) {
    const result = arr.reduce(function (acc: any, el: number) {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});

    return result;
  }

  static cutCardNumber(arr: string[]): number[] {
    return arr.map((i) => {
      return +i.substring(1);
    });
  }

  static isCare(arr: string[]): boolean {
    const result = this.getIncludesObj(this.cutCardNumber(arr));
    if (result[1] === 4) {
      return true;
    } else {
      return false;
    }
  }

  static seniorCardCase(arr: string[]) {
    return {};
  }

  //   обьеденил типовые действия в один слой. не очень хорошее решение, помечаю под измеение.
  //  монструозная функция
  static chekDeckCombo(deck: string[]) {
    const arr: number[] = this.cutCardNumber(deck);

    const result = this.getIncludesObj(arr);

    const objValues: number[] = Object.values(result);
    const isDouble = objValues.includes(2);
    const isTriple = objValues.includes(3);
    const isHouse = objValues.includes(2) && objValues.includes(3);

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

  static isRoyalSet(deck: string[]) {
    const arr: number[] = this.cutCardNumber(deck);
    const metaArr: number[] = [1, 13, 12, 11, 10];

    const isAllTrue: boolean[] = [];

    for (let i = 0; i < metaArr.length; i++) {
      if (arr.includes(metaArr[i])) {
        isAllTrue.push(true);
      } else {
        isAllTrue.push(false);
      }
    }

    return isAllTrue.every((el) => el === true);
  }

  static isRoyalFlush(deck: string[]) {
    if (this.isFlush(deck)) {
      return this.isRoyalSet(deck);
    }
  }

  static isFlush(deck: Array<string>) {
    let isFlush: boolean[] = [];

    for (let i = 0; i < 5; i++) {
      isFlush.push(
        deck.every((value) => {
          value.includes(SuitsArr[i]);
        })
      );
    }

    if (isFlush.some((el) => el === true)) {
      return true;
    } else {
      return false;
    }
  }
}
