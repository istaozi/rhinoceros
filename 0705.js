function quacks(o) {
    for (var i=1;i<arguments.length;i++){
        var arg=arguments[i];
        switch (typeof  arg){
            case 'String':
                if (typeof o[arg]!=="function") return false;
                continue;

            case 'function':
                 //检查函数的原型对象上的方法，如果实参是函数，则使用他的原型
                arg=arg.prototype;
            case 'object':
                for(var m in arg){
                    if(typeof arg[m]!=="function") continue;
                    if(typeof o[m]!=="function") return false;
                    return  false;
                }
        }
    }
}

/*
* 集合set 是一种数据结构，用以标识非重复值的无序集合。
* 集合的基础方法包括添加值、检测值是否在集合中，这种集合需要一种通用的实现，以保证操作效率。
* 集合类必须给集合中的每一个对象或函数定义一个唯一的属性标示。
*
* */

function Set() { //构造函数
    this.values={}; //集合数据保存在对象的属性里
    this.n=0; //集合中值得个数
    this.add.apply(this,arguments);
}

Set.prototype.add=function () {
    for(var i=0;i<arguments.length;i++){
        var val=arguments[i];
        var str=Set._v2s(val);
        if(this.values.hasOwnProperty(str)){
            delete this.values[str];
            this.n--;
        }
        return this;
    }
}
Set.prototype.contains=function (value) {
    return this.values.hasOwnProperty(Set._v2s(value));
}

Set.prototype.size=function () {
    return this.n;
}

//这是一个内部函数，用以将任意js值和唯一的字符串对应起来
Set._v2s=function (val) {
    switch (val){

    }
}