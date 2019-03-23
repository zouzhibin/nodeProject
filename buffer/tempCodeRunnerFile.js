let r = Buffer.from("兵")
console.log(r) 
// console.log(r.toString("base64"))  // 转换为base64为 5YW1
// 他内部是如何进行转换为base64的呢？
let base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// console.log(base.length)
// 1、先进性转换为二进制  但是Buffer表现的形式是16进制的 如 打印r的结果为 <Buffer e5 85 b5>
// 2、如此即把16进制转换为2进制
console.log((0xe5).toString(2)) //11100101
console.log((0x85).toString(2)) //10000101
console.log((0x85).toString(2)) //10000101
// 转换为二进制为 11100101 10000101 10000101  一个汉字代表三个字节 一个字节代表8bit 那就是3x8为24
// 11100101 10000101 10000101 -> 111001 011000 010110 000101
console.log(parseInt('11100101',2))
console.log(parseInt('10000101',2))
console.log(parseInt('10000101',2))