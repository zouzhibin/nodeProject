//console.log(window)
//(function (exports, require, module, __filename, __dirname) { }) node内部文件模块在外部包了一层函数,c采用了闭包
// 因此在文件内打印console.log(global) 为 {}  在repl(命令窗口)中就能打印出global
// 全局属性 global
// 还有一些属性
// exports, require, module, __filename, __dirname

// node 实现模块化 (命名冲突 代码维护方便 方便协作)
// 浏览器中实现模块化 var obj = {a} 不能完全解决命名冲突的 调用过长 单例
// 自执行函数来实现 seajs cmd require.js amd
// common.js 规划 通过读取文件读取（utf-8）实现了模块化
    //1.文件即模块
    //2.定义了导出方式 module.exports exports
    //3.定义了导入方式 require

    // 让字符串执行？eval /new Function 在浏览器中
    // let hello ='zouzhibing'
    // eval('console.log(hello)') eval 执行有依赖关系

    // 
    //let str ='let a =1;return a';
    //let newFn = new Function(str)
    //console.log(newFn())

    //node vm 
    //node官方文档里提到node的vm模块可以用来做沙箱环境执行代码，对代码的上下文环境做隔离。
    // 沙箱环境中执行的代码对于外部代码没有产生任何影响，无论是新声明的变量b，还是重新赋值的变量a。
     //注意最后一行的代码默认会被加上return关键字，因此无需手动添加，一旦添加的话不会静默忽略，而是执行报错。
// let vm = require("vm"); //node 中执行字符串 可以采用vm模块
// 他可以提供一个沙箱环境 运行代码 干净的环境
//   let hello ='zf'
//   vm.runInThisContext("console.log('hello')")