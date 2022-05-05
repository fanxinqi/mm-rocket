const { default: BitMap } = require("../lib/bitmap.js");
// 获取字节长度
function getLength(val) {
  var str = new String(val);
  var bytesCount = 0;
  for (var i = 0, n = str.length; i < n; i++) {
    var c = str.charCodeAt(i);
    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
      bytesCount += 1;
    } else {
      bytesCount += 2;
    }
  }
  return bytesCount;
}
// 获取随机数
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

describe("performace test", () => {
  test("size reduce test", () => {
    const bitmap = new BitMap();
    const array = [];
    for (let i = 0; i < 10000; i++) {
      bitmap.add(i);
      array.push(i);
    }

    const bitmapByteSize = getLength(JSON.stringify(bitmap.getData()));
    const arrayByteSize = getLength(JSON.stringify(array));
    console.log("bitmap size", bitmapByteSize);
    console.log("array size", arrayByteSize);

    console.log("size reduce times:", arrayByteSize / bitmapByteSize);
    expect(arrayByteSize > bitmapByteSize).toBe(true);
  });
  test("exist function performace test", () => {
    let testMaxNum = 10000;
    let startTime, endTime;
    const bitmap = new BitMap();
    const array = [];
    for (let i = 0; i < testMaxNum; i++) {
      bitmap.add(i);
      array.push(i);
    }

    const randDomInt = getRandomInt(testMaxNum);
    startTime = new Date().getTime();
    bitmap.exist(randDomInt);
    endTime = new Date().getTime();
    const bitmapUseTime = endTime - startTime;
    console.log("bitmap use time:", endTime - startTime);

    startTime = new Date().getTime();
    array.find((item) => item === randDomInt);
    endTime = new Date().getTime();
    const arrayUseTime = endTime - startTime;
    console.log("array use time:", arrayUseTime);
    console.log("bitmap use time:", bitmapUseTime);
    // expect(arrayUseTime > bitmapUseTime).toBe(true);
  });
});
