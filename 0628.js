function inherit(p) {
    if (p == null) throw TypeError();
    if (Object.create) return Object.create(p);
    var t = typeof p;
    if (t !== "object" && t !== "function") throw TypeError();
    function f() {

    }

    f.prototype = p;
    return new f();
}

function range(from, to) {
    //使用inherit函数来创建对象，这个对象继承自在下面定义的原型对象
    var r = inherit(range.methods);
    r.from = from;
    r.to = to;
    return r;
}
range.methods = {
    abc: function (x) {
        return this.from <= x && x <= this.to;
    },
    foreach: function (f) {
        for (var x = Math.ceil(this.from); x <= this.to; x++)f(x)
    },
    toString: function () {
        return "(" + this.from + "----" + this.to + ")";
    }
}

var r = range(1, 3);
console.log(r.abc(2));

r.foreach(console.log);
console.log(r.toString());


//构造函数，用来初始化新创建的“范围对象”，仅仅初始化
function Range(from, to) {
    //存储“范围对象”的起始位置和结束位置（状态）
    //这两个属性是不可继承的，每个对象都有唯一的属性
    this.from = from;
    this.to = to;
}

//所有的"范围对象"都继承自这个对象，属性的名字必须是prototype
Range.prototype = {
    includes: function (x) {
        return this.from <= x && this.to >= x;
    },
    foreach: function (f) {
        for (var i = Math.ceil(this.from); i <= this.to; i++)f(i)
    },
    toString: function () {
        return "(" + this.from + "..." + this.to + ")";
    }
}

var rr = new Range(1, 2);
console.log(rr.includes(2));

r.foreach(console.log);
console.log(rr.toString());


/*
 * JavaScript中定义类的步骤可以缩减为一个分三步的算法。
 * 第一步：定义一个构造函数，并设置初始化新对象的实例属性
 * 第二步：给构造函数的prototype对象定义实例的方法
 * 第三步：给构造函数定义类字段和类属性
 *
 *
 * */

//用来枚举属性的对象工具函数（把p中可枚举的属性复制到o中，并返回o）
function extend(o, p) {
    for (prop in p) {
        o[prop] = p[prop];
    }
    return o;
}

/*
* 一个用以定义简单类的函数
* 1，用以设置实例属性的函数
* 2，实例的方法，复制到原型中
* 3，类属性，复制到构造函数中
* */

function defineClass(constructor, methods, static) {
    if (methods) extend(constructor.prototype, methods);
    if (static) extend(constructor, static);
    return constructor;
}

var SimpleRange = defineClass(
    function (f, t) {
        this.f = f;
        this.t = t;
    },
    {
        includes: function (x) {
            return this.from <= x && this.to >= x;
        },
        foreach: function (f) {
            for (var i = Math.ceil(this.from); i <= this.to; i++)f(i)
        },
        toString: function () {
            return "(" + this.from + "..." + this.to + ")";
        }
    },
    {
        upto: function (o,t) {
            return new SimpleRange(o, t);
        }
    }
)

SimpleRange.upto(1,4);
console.warn(SimpleRange.upto(1,4))
console.warn(SimpleRange.includes(6))