- 主执行栈
- timers 时间 settimeout的回调
- poll 轮训 i/o 回调 fs.readFile() 等待时间到达
- check setImmediate 方法

> 默认 会从上到下 依次执行 如果代码执行到poll发现check阶段没有 那就在poll 中等待时间到达后再清空代码

切换队列 把队列清空 如果执行了很多个回调 超过了最大限制 也会切换队列 
poll 阶段下一个阶段是check 如果check 队列中用东西 会先执行check