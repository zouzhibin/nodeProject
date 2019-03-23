```
js 主线程是单线程 ajax setTimeout 在浏览器中会多开线程
代码从上到下执行 会先执行同步代码 在执行异步代码
宏任务macro task（慢）例如setTimeout 微任务microtasks（快）例如Promise.then 宏任务微任务都是异步任务

MutationObserver 微任务
setImmediate 宏任务 只在ie下兼容
MessageChannel 宏任务 消息通道
process.nextTick  下一队列 也是微任务

vm.$nextTick(function(){}); 异步执行 里面有所有的宏任务和微任务


在浏览器环境中，常见的 macro task 有 setTimeout、MessageChannel、postMessage、setImmediate。而常见的 micro task 有 MutationObsever 和 Promise.then。
```

- process.cwd()  current working directory //在哪执行文件 就可以打印出当前位置
- process.env enviromnent  开发环境(process.env.NODE_ENV) 生产环境  window下进行设置 set a=1  linux export a=1
- process.argv 获取当前进程的所传的参数

```
process.argv --port 3000 --color red
let args = process.argv.slice(2)
let obj = {}
for(let i=0;i<args.length;i++>){
    let current = args[i]
    if(current.includes("--")){
        obj[current.slice(2)] = args[i+1]
    }
}
```

