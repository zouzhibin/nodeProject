 let vm = require("vm"); //node 中执行字符串 可以采用vm模块
  //他可以提供一个沙箱环境 运行代码 干净的环境
  let hello ='zf'
  vm.runInThisContext("console.log('hello')")