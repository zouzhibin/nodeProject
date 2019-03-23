let path = require("path")
let fs = require("fs")
let vm = require("vm")
function Module(id){
    this.id = id;
    this.exports = {}
}
Module.wrapper = [
    "(function(exports,module,require,__dirname,__filename){",
    "})"   
]
Module._extensions = {
    ".js"(module){
        let content = fs.readFileSync(module.id,'utf8');
        let fnstr = Module.wrapper[0]+content+Module.wrapper[1]
        let fn = vm.runInThisContext(fnstr)
        fn.call(module.exports,module.exports,module)
        console.dir(fn.toString())
    },
    '.json'(module){
        console.log(module)
        let json1 = fs.readFileSync(module.id,'utf8')
        console.dir(this)
        module.exports = json1  //这里 是把文件读取的结果放到module.export上
    }
}
Module._cache = {}
function tryModuleLoad(module){
    let extension = path.extname(module.id) //获取文件名的后缀
    Module._extensions[extension](module)  // 通过后缀来匹配对应得解析模块的方法 比如.js 就解析js方法
}

function req(modlePath){
    // 获取当前要加载的文件的绝对路径 因为文件的绝对路径是唯一的
    let absPathname = path.resolve(__dirname,modlePath)
    
    let extName = Object.keys(Module._extensions)
    
    let old = absPathname
    let index = 0
    function findName (absPathname){
        if(index ===extName.length){
            return absPathname
        }
        try{
            console.log('111',absPathname)
            fs.accessSync(absPathname)
            return absPathname
        }catch(e){
            let ext = extName[index++]
            console.log("absPathname",absPathname,old.concat(ext))
            let p = old.concat(ext)
            // 这里加个return  是因为findName(p) 如果找到了值 就应该把找到的路径return 出去 如果不加return 
            // 后面 获得的值就是underfind
            return findName(p)  
        }
    }
    // console.log(1111,absPathname)
    absPathname = findName(absPathname) //判断文件是否存在
    console.log(2222,absPathname)
    try{
        fs.accessSync(absPathname)
    }catch(e){
        throw new Error("文件不存在")
    }
    if(Module._cache[absPathname]){
        return Module._cache[absPathname].exports //如果存在缓存 ，就把exports返回
    }
    let module = new Module(absPathname); // 
    Module._cache[absPathname] = module
    tryModuleLoad(module) //这个方法的目的是为了给 module.exports进行赋值
    return module.exports //req 方法会默认返回exports对象

}

let obj = req("./a")
// 1.module.exports 和exports的区别
// exports 是module.exports的别名 但是不能直接改变exports对象的引用，因为不会影响module.exports对象的值
console.log(obj)


console.log(module.paths)