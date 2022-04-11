/*
 * @Author: your name
 * @Date: 2022-04-11 18:21:27
 * @LastEditTime: 2022-04-11 19:38:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /me/mm-rocket/packages/bitmap/src/utils.ts
 */
function reverseString(s: string): string {
  return s.split("").reverse().join("");
}
function sort(arr: Array<number>): void {
  for (let i: number = 0; i < arr.length - 1; i++) {
    let flag: boolean = false; // 防止数组已经有序而继续排序

    for (let j: number = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // 交换两个
        let temp: number = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        flag = true;
      }
    }

    // console.log(arr);

    if (!flag) {
      // 数组有序后直接跳出循环
      break;
    }
  }
}

export { reverseString,sort };
