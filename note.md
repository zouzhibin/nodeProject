```
js 主线程是单线程 ajax setTimeout 在浏览器中会多开线程
代码从上到下执行 会先执行同步代码 在执行异步代码
宏任务macro task（慢）例如setTimeout 微任务microtasks（快）例如Promise.then 宏任务微任务都是异步任务

MutationObserver 微任务
setImmediate 宏任务 只在ie下兼容
MessageChannel 宏任务 消息通道

vm.$nextTick(function(){}); 异步执行 里面有所有的宏任务和微任务


在浏览器环境中，常见的 macro task 有 setTimeout、MessageChannel、postMessage、setImmediate。而常见的 micro task 有 MutationObsever 和 Promise.then。
```