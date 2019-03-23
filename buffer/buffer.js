let buffer = Buffer.from("邹志兵"); // 把字符串可以转换成16进制
// 一个汉字代表三个字节 e9 82 b9 e5 bf 97 e5 85 b5   
// console.log(buffer.length)  //长度为9
// 可以和字符串进行转换 node只支持utf8格式   可以下载包iconv-title 把二进制gbk转换utf8 
// buffer.toString('base64') //转换成base64格式的

// 位："位(bit)"是计算机中最小的数据单位。每一位的状态只能是0或1
// 字节：8个二进制位构成1个"字节(Byte)"，字节是存储空间的基本计量单位。
// 1个字节可以储存1个英文字母，2个字节可以存储1个汉字
// 1b = 8bit
// 编码的问题
// 二进制 11111111 255 八进制 377 十六进制 ff

// 在计算机中为啥不用二进制的形式进行表示buffer呢？ 因为如果用二进制来表示的话位数太长了
// parseInt('111111111',2) 把二进制的111111111 转换为十进制
// (255).toString(16) 可以把十进制 转换为任意进制
// (0xe7).toString(2) 可以把16进制转换为二进制

// base64 (一切能放置路径的地方 都可以使用base64) img.src background

/**Base64可以将ASCII字符串或者是二进制编码成只包含A—Z，a—z，0—9，+，/ 这64个字符（ 26个大写字母，26个小写字母，10个数字，1个+，
 * 一个 / 刚好64个字符）。这64个字符用6个bit位就可以全部表示出来，
 * 一个字节有8个bit 位，那么还剩下两个bit位，这两个bit位用0来补充。其实，一个Base64字符仍然是8个bit位，
 * 但是有效部分只有右边的6个 bit，左边两个永远是0。
 Base64的编码规则是将3个8位字节(3×8=24位)编码成4个6位的字节(4×6=24位)
，之后在每个6位字节前面，补充两个0，形成4个8位字节的形式，
那么取值范围就变成了0~63。又因为2的6次方等于64，所以每6个位组成一个单元。 
[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/]  base64是由这64位组成为base64的

*/

// 如何把一个字符串转换为base64呢？
//Base64本质上是一种将二进制数据转成文本数据的方案。对于非二进制数据，
//是先将其转换成二进制形式，然后每连续6比特（2的6次方=64）计算其十进制值，
//根据该值在上面的索引表中找到对应的字符，
//最终得到一个文本字符串。假设我们对Hello！进行Base64编码，按照ASCII表，其转换过程如下图所示：
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
console.log((0xb5).toString(2)) //10000101
console.log('------------------')
// 转换为二进制为 11100101 10000101 10110101  一个汉字代表三个字节 一个字节代表8bit 那就是3x8为24
// 因为base64的长度为64个字符  二进制最大表现为111111 划分为6位
// 11100101 10000101 10110101 -> 111001 011000 010110 110101
// 在求出二进制的转换为十进制数 根据十进制数求出每位在base64字符中的位置  就得出结果
console.log(parseInt('00111001',2))
console.log(parseInt('00011000',2))
console.log(parseInt('00010110',2))
console.log(parseInt('00110101',2))
console.log('------------------')
console.log(base[57]+base[24]+base[22]+base[53])  // 5YW1
// base64只是编码 不能加密 理论上会比普通的字符大1/3

// buffer的声明方式 buffer的length为字节的长度
let buffer = Buffer.from("志兵");
let buffer1 = Buffer.alloc(3)  //申请3字节长度的内存空间
let buffer2 = Buffer.from([255,255,255]) // 往buffer里添加一个数组  


// buffer中常见的方法 数组的方法