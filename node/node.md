## node runtime
- 让javascript代码运行在服务端，node基于v8 ,并不包含javascript的全局
- DOM BOM Ecmascript 
- node中 基本包含EcmaScript 读写文件
- 提供简单 高性能服务器（cpu密集 计算 i/o密集 文件读取）
- 分配单位 靠的是进程 进程中 一个环境 环境中可以开很多线程（主线程是单线程 node api 异步的）底层还是通过多线程模拟了异步 libuv
- 结果是靠事件驱动的
- 浏览器 为什么不是多线程的  ？ 防止同时操作一个dom
- java 多线程 （切换执行上下文 切换的很快）并发操作同一个文件 锁的概念
- 多进程 增强稳定性 可靠

## node 
- 异步/同步 被调用方 可以决定此方法是同步还是异步的
- 阻塞和非阻塞 调用方的状态就是 阻塞或者非阻塞 同步阻塞 异步非阻塞

## node安装
- nvm 来切换版本 npm install nvm -g   使用nvm use version (mac)
- nvm-win 在window上切换版本
- nrm node仓库管理 可以取决于从哪个源上下载

```
global 上有很多隐藏的属性和方法 但是如果打印console.log(global) 时是看不到的，要想看到global上隐藏的属性
可以用 console.dir(global,{showHidden:true}) 打印所有隐藏的属性
```