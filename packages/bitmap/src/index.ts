/*
 *   bit map 管理
 */
import { reverseString } from "./utils";

interface BitItem {
  [index: number | string]: number;
}

interface IBitMap {
  add(num: number): void;
  remove(num: number): void;
  exist(num: number): void;
  getAllNumber(): Array<Number>;
}

export default class BitMap implements IBitMap {
  private data: BitItem;

  constructor(data?: BitItem) {
    this.data = data || {};
  }

  private getIdx(num: number) {
    return Math.floor(num / 32);
  }

  private getPos(num: number) {
    return num % 32;
  }

  public getData() {
    return this.data;
  }

  public add(num: number) {
    const index = this.getIdx(num);
    const pos = this.getPos(num);
    if (this.data[index] === undefined) this.data[index] = 0;
    this.data[index] |= 1 << pos;
  }

  public remove(num: number) {
    const index = this.getIdx(num);
    const pos = this.getPos(num);
    if (this.data[index] === undefined) this.data[index] = 0;
    this.data[index] -= 1 << pos;
  }

  public exist(num: number) {
    const index = this.getIdx(num);
    const pos = this.getPos(num);
    return !!(this.data[index] && this.data[index] & (1 << pos));
  }

  public getAllNumber() {
    const data = this.data;
    const numberArray: Array<Number> = [];
    Object.keys(data).forEach((index) => {
      const hex10Num = this.data[index];
      const layerNumber = Number(index) * 32;
      const numberMerge = reverseString(Number(hex10Num).toString(2));
      for (let i = 0; i < numberMerge.length; i++) {
        if (numberMerge[i] === "1") {
          numberArray.push(layerNumber + i);
        }
      }
    });
    return numberArray;
  }
}
