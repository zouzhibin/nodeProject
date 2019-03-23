```
let path = require("path)
处理文件路径的 basename extname dirname join resolve
```
- path.basename(p, [ext]) p 要处理的path ext 要过滤的字符
- path.extname 返回path路径文件扩展名，如果path以 ‘.' 为结尾，将返回 ‘.'，如果无扩展名 又 不以'.'结尾，将返回空值。
```
path.extname('index.html')； // returns '.html'
path.extname('index.')； // returns '.'
path.extname('index')； // returns ''
```
- path.dirname(p); 当参数值为目录路径时，该方法返回该目录的上层目录；当参数值为文件路径时，该方法返回该文件所在的目录。
- path.join() 
```
let r = path.join('a/b/c','../','d/e/f');
a/b/d/e/f

let r = path.resolve('a/b/c','../','d/e/f');
会多打印出当前所在文件的文件夹路径 resolve方法不能有/
```

- __dirname 当前文件所在的文件夹的路径
- __filename 当前文件的绝对路径



- fs.exists 查看文件是否存在
- fs.access 看文件是否能访问到

```
 配置vscode debuger 模式
 "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${file}",
            "cwd":"${cwd}"
        }
    ]
```


## commonjs reuire方法的实现
- 内置实现了一个require方法
- 通过Module._load 方法 加载模块
- Module._resolveFilename 根据相对路径转换成绝对路径 并且增加后缀
- 模块的缓存问题  Module._cache 
- new Module 创建模块 id 存的是名字 即文件的绝对路径  exports = {} 代表this
- tryModuleLoad(module) 尝试加载这个模块
    - 取出文件的后缀
    - 加载模块 读取文件 fs.readfile
    - Module.wrap 包裹读取的内容
    - 包裹后使用runInthisContext 运行字符串
    - 让 字符串执行 this改变成exposts

## 第三方模块
```
let fs = require("fs") //这是第三方模块  第三方模块不能出现../ ./的路径
他是通过module.paths 模块的查找路径
[ 'd:\\20190308project\\nodePriject\\common\\node_modules',
  'd:\\20190308project\\nodePriject\\node_modules',
  'd:\\20190308project\\node_modules',
  'd:\\node_modules' ]
```    
- npm root -g：查看node全局的包的安装路径
- npm root：查看当前包的安装路径
- npm update moduleName：更新node模块
- npm search packageName 发布一个npm包的时候，需要检验某个包名是否已存在

## 实现全局命令
- 在package.json文件中
- 1) 需要加一个bin的配置
- 2) 前面是命令 后面是执行的文件
- 3) #! /usr/bin/env node  
- 4) npm link 指向全局
```
{
    "name": "jw",
    "main": "a.js",
    "bin": {
        "jw": "./a.js"
    }
}
```

## 把我的包 发布到npm官网
- 切换到官方源 npm install nrm -g /nrm use npm
- 登录账户 npm addUser
- 发布代码 npm publish
- 取消发布卸载 npm unpublish --force
