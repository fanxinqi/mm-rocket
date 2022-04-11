/*
 * @Author: your name
 * @Date: 2022-04-11 14:39:19
 * @LastEditTime: 2022-04-11 20:09:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /me/mm-rocket/packages/bitmap/test/sampling.ts
 */

const { default: BitMap } = require("../lib/bitmap.js");

function equar(a, b) {
  // 判断数组的长度
  if (a.length !== b.length) {
    return false;
  } else {
    // 循环遍历数组的值进行比较
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
}

describe("feature test", () => {
  test("constructor test", () => {
    // 1 & 5 & 10 位存在数
    const hexNum10 = parseInt("10000100010", 2);
    const bitmap = new BitMap({
      0: hexNum10,
    });
    expect(bitmap.exist(1)).toBe(true);
    expect(bitmap.exist(5)).toBe(true);
    expect(bitmap.exist(10)).toBe(true);
    // 11 不在bitmap里面
    expect(bitmap.exist(11)).toBe(false);
  });

  test("add function test", () => {
    const bitmap = new BitMap();
    bitmap.add(1001);
    bitmap.add(5555);
    expect(bitmap.exist(1001)).toBe(true);
    expect(bitmap.exist(5555)).toBe(true);
    expect(bitmap.exist(1000)).toBe(false);
  });

  test("remove function test", () => {
    const bitmap = new BitMap();
    bitmap.add(1001);
    bitmap.add(5555);
    expect(bitmap.exist(1001)).toBe(true);
    expect(bitmap.exist(5555)).toBe(true);

    bitmap.remove(1001);
    bitmap.remove(5555);
    expect(bitmap.exist(1001)).toBe(false);
    expect(bitmap.exist(5555)).toBe(false);
  });

  test("exist function test", () => {
    const bitmap = new BitMap();
    bitmap.add(1001);
    bitmap.add(5555);
    expect(bitmap.exist(1001)).toBe(true);
    expect(bitmap.exist(5555)).toBe(true);

    bitmap.remove(1001);
    bitmap.remove(5555);
    expect(bitmap.exist(1001)).toBe(false);
    expect(bitmap.exist(5555)).toBe(false);
  });

  test("getAllNumber function test", () => {
    const numArray = [1001, 5555];
    const bitmap = new BitMap();
    numArray.forEach((num) => {
      bitmap.add(num);
    });
    expect(equar(numArray.sort(), bitmap.getAllNumber().sort())).toBe(true);
  });
});
