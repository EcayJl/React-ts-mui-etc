import cardMap from "./CardMap";
export default class CardEngine {
  static getRandomCards() {
    const allLetters = ["b", "h", "k", "t"];
    const stackSize = 14;
    const rndLetter = allLetters[this.getRandomInt(0, 4)];
    const rndSize = this.getRandomInt(1, stackSize);
    return rndLetter + rndSize;
  }
  static getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }
}
