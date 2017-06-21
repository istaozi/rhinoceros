/**
 *  每一个JavaScript对象都和另外一个对象相关联。“另一个”对象就是我们熟知的原型，每一个对象都从原型继承属性。
 *
 *  所有通过对象直接量创建的对象都具有一个原型对象，并可以通过JavaScript代码Object.prototype。
 */
var empty={}
var point={x:0,y:0}
//empty.prototype.y
//console.info(empty.prototype.y)

//
function inherit(p) {
    if (p == null) throw TypeError();
    if (Object.create) return Object.create(p);
    var t = typeof p;
    if (t !== "Object" && t !== "function") throw  TypeError();
    function f() {

    }

    f.prototype = p; //f将其原型属性赋值给了p
    return new f;
}
var unitcircle={r:1};

var c=inherit(unitcircle);
c.x=1;
c.y=2;
c.r=11;

//定义存取器属性最简单的方法就是使用 对象直接量语法的一种扩展写法
/*var o={
    data_prop:value,
    get accessor_prop(){},
    set accessor_prop(value){}
}*/
 var o=new  Array();
console.log(Array.prototype)

