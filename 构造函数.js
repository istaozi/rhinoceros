/**
 * 一个函数用来初始化一个新建的对象，称之为构造函数
 * 每个构造函数都定义了一类对象。
 */

//使用自己的对象多次复制，同时实例 根据设置的访问等级 可以访问其内部的属性和方法
//当对象被实例化后，构造函数就会立即执行它所包含的任何代码
function myObj(msg) {
    //公用属性
    this.myMsg=msg;
    this.address="sh";

    //私有属性
    var name='hq';
    var age=29;
    var that=this;

    //私有方法
    function sayName(){
        alert(that.name);
    }
    //公有方法
    this.sayAge=function () {
        alert(name)
    }
}

//
myObj.prototype.sayHellow=function () {
    alert("hello everyOne");
}
//静态属性
myObj.name="china";
//静态方法
myObj.alertName=function () {
    alert(this.name);
};

//实例化
var m1=new myObj('111');
/*console.info(m1.address);
console.info(myObj.address);
m1.alertname();*/
/*var abc="abcde//fd";
console.info(abc.length+"===="+abc.charAt(0)+"===="+abc.charAt(abc.length-1)+"===="+abc.substr(0,2)+"===="+abc.substring(0,2)+"===="+abc.split("//")+"===="+abc.replace('a','9')+"===="+abc.toUpperCase())*/

var a="test",n=1,b=true;
var S=new String(a);
var N=new Number(n);
var B=new Boolean(b);
console.info(a==S);
console.info(n===N);
/*
console.info(typeof(b)+"--"+typeof(B));
*/
var scope="global";
function checkscope() {
    var scope="local";
    return scope;
}
console.log(checkscope())


var scope="globalcope";//全局变量
function checkscope() {
    var scope="local scope";
    function nestScope() {
        var scope="mestScope";
        return scope;
    }
    return scope;
}
console.info(checkscope())

function test(o) {
    var i=0;
        var j=0;
        for (var k=0;k<10;k++){
            console.log(k)
        }
        console.log(k)
    console.log(j)
}
console.log(Date().toString())

var s="11";
var ss=new String(s);
console.info(s==ss)
console.info(s===ss)

var data=[1,2,3];
console.info("0" in  data)
console.info("===0"+data[2]+"==="+(2 in data))

var foo=function (a) {
    eval(a);
};
/*foo("return ;")*/


var geval=eval;
var x="global",y="global";
function f() {
    var x="local";
    eval("x+='changed';"); //直接调用eval()时，它总是在调用他的上下文作用域内执行。
    return x;
}

function g() {
    var y="local";
    geval("y+='changed';"); //间接调用则使用全局对象作为其上下文作用域，并且无法读,写,定义局部变量和函数。
    return y;
}
console.log(f(),x)
console.log(g(),y)

var count=0;
while (count<10){
    console.log(count);
    count++;
}

