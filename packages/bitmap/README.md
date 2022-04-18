# fast-bitmap

用一个 bit 位来存放数据状态，利用计算机最小单位存储，针对原始类型数据利用率不高的优化，达到提升压缩存储效果，另外利用索引，二进制位运算达成快速查找的目的

# 目前版本主要作用

1.  **压缩大量数据存储的内存空间**
    节约空间是因为正常一个 int（32 位），只能表示一个数，优化后一个 int 表示 32 个数状态，所以空间是压缩的，连续的大量的数最好情况下是 原来 size/ 32
1.  **提高查询效率**
    检索效率是分层了 & 位运算比对 来提升，有点类似后端分库分表

# api

add(num: number): void; 添加一个数
remove(num: number): void; 删除一个数
exist(num: number): void; 判断一个数是否存在
getAllNumber(): Array<Number>; 获取所有的数

# 使用示例

````javascript
// 初始化
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

// 新增大量数据
const FastBitmap = require("fast-bitmap");
const fastBitmap = new FastBitmap();
for(let i=0; i<20000; i++) {
  fastBitmap.add(i);
};

fastBitmap.exit(9999) // true
fastBitmap.exit(20001) // false

// 移除一个数
  const bitmap = new BitMap();
    bitmap.add(1001);
    bitmap.add(5555);
    bitmap.exist(1001); // true
    bitmap.exist(5555); // true

    bitmap.remove(1001);
    bitmap.remove(5555);
    bitmap.exist(1001);  // false
    bitmap.exist(5555); // false

// 判断一个数是否存在
   const bitmap = new BitMap();
    bitmap.add(1001);
    bitmap.add(5555);
    bitmap.exist(1001); // true
    bitmap.exist(5555); // true

    bitmap.remove(1001);
    bitmap.remove(5555);
    bitmap.exist(1001); // false
    bitmap.exist(5555); // false
	```
````
