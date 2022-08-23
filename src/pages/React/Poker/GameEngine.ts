const enum Suits {
  CLUBS = "k",
  DIAMONDS = "b",
  HEARTS = "h",
  SPADES = "t",
}
//на вынос из файла. в будущем планирую сделать работу с мастями иначе.
const SuitsArr: string[] = ["k", "b", "h", "t"];

// todo переписать все это в функционалочке
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
  static getTrainCombinations(deck: string[]) {
    const arr: number[] = this.cutCardNumber(deck);
    const result = this.getIncludesObj(arr);
    const objValues: number[] = Object.values(result);

    return objValues;
  }

  static isPair(deck: string[]): boolean {
    const objValues = this.getTrainCombinations(deck);
    const isDouble = objValues.includes(2);

    return isDouble ? true : false;
  }

  static isSet(deck: string[]) {
    const objValues = this.getTrainCombinations(deck);
    const isSet = objValues.includes(3);

    return isSet ? true : false;
  }

  static isTwoPair(deck: string[]): boolean {
    const objValues = this.getTrainCombinations(deck);
    const result = this.getIncludesObj(objValues);

    return result[2] === 2 ? true : false;
  }

  static isFullHouse(deck: string[]) {
    return this.isSet(deck) && this.isTwoPair(deck) ? true : false;
  }

  static seniorCardCase(arr: string[]) {
    return {};
  }

  static isRoyalSet(deck: string[]): boolean {
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

  static isCare(arr: string[]): boolean {
    const result = this.getIncludesObj(this.cutCardNumber(arr));
    if (result[1] === 4) {
      return true;
    } else {
      return false;
    }
  }

  static isRoyalFlush(deck: string[]): boolean {
    if (this.isFlush(deck)) {
      return this.isRoyalSet(deck);
    } else {
      return false;
    }
  }

  static isStraight (deck: string[]) {
    const cutDeck = this.cutCardNumber(deck);
    const sortDeck: number[] = cutDeck.sort(function(a, b) {
      return a - b;
    });
    console.log(sortDeck);
    
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
