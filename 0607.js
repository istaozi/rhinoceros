/**
 * Created by Administrator on 2017/6/7/007.
 */
//变量表示值的一个符号
//变量是通过var关键字声明的
var x;//声明一个变量x

//值可以通过一个等号赋值给变量
x=0; //现在变量x的值是0
x    //打印出：0 通过变量获取其值


//JavaScript支持多种数据类型
x=1; //数字
x=0.01; //整数和实数共用一种数据类型
x="hellow"; //由双引号内的文本构成的字符串
x='ab';   //由单引号内的文本同样构成字符串
x=true;// 布尔值
x=false;
x=null; //null是一个特殊的值，意思是"空"
x=undefined;//undefined和null非常类型

//对象
x={         //对象是名/值得集合，或字符串到值映射的集合 对象是由花括号括起来的
    topic:'xx',  //topic 是属性，值是xx
    fat:true
}
//通过. 或者 [] 来访问对象属性
x.topic  //输出 xx
x["topic"]
x.author="Flanagan"; //通过赋值创建一个新属性
x.contents={}
console.info(x); //输出Object {topic: "xx", fat: true, author: "Flanagan", contents: Object}

//数组：以数字为索引的列表
x=[2,3,4,5] ;//拥有四个值 以[ ] 划定边界
x[0]; //获取数组的第一个元素
x.length; //获取数字的元素个数 4
x[x.length-1] ;// 获取数组的最后一个元素
x[4]=9;//通过赋值来添加新元素
x[4]=99; //或 通过赋值来改变已有的元素
var empty=[]; //[]是空数组，它具有0个元素
empty.length; //0

//数组和对象中都可以包含另一个数组和对象
var points=[  //具有两个元素的数组
    {x:1,y:2}, //每个数组都是一个对象
    {x:2,y:2}
]

var data={   //一个包含了两个属性的对象
    data1:[[0,1],[2,3]], //每一个属性都是数组
    data1:[[0,1],[2,3]]  //数组的元素也是数组
}

//通过方括号定义数组 和 通过花括号定义对象属性名和属性值之间的映射关系 语法称为 初始化表达式 。
//表达式是JavaScript中的一个短语，这个短语可以通过运算得出一个值。通过"."和"[]"来引用对象属性或数组元素的值就构成了一个表达式。


/*   将函数和对象合写在一起时，函数就变成了方法"method"   */

//当函数赋值给对象的属性，我们称为"方法"，所有的JavaScript对象都含有方法
var a =[]; // 创建一个空的数组
a.push(1,2,3);// push()方法想数组中添加元素
console.info(a+"--")
a.reverse(); //reverse方法将数组元素次序翻转
console.info(a);

//我们也可以定义自己的方法，"this"关键字是对定义方法的对象的引用
var points=[  //具有两个元素的数组
    {x:1,y:2}, //每个数组都是一个对象
    {x:2,y:2}
];
points.dist=function () {
    var p1=this[0];
    var p2=this[1];
    var a=p1.x+p1.y;
    var b=p2.x+p2.y;
    return a*b;
}
console.info(points.dist()); //=>12

/*   控制语句  */
function abs(x) {
    if(x>0){
        return x;
    }else{
        return -x;
    }
}

function factorial(n) {
    var product=1;
    while (n>1){
        product*=n;
        n--;
    }
    return product;
}
console.info(factorial(3)) //=>1*3*2

function facto2(n) {
    var i ,product=1;
    for (i=2;i<=n;i++){
        product*=i;
    }
    return product;
}
console.info(facto2(3))  //=> 1*2*3

/*JavaScrip是一种面向对象的变成语言 ，但和传统的面向对象又有很大的区别。*/
//定义一个构造函数，以初始化一个新的Point对象
function Point(x,y) {  //按照惯例构造函数均以大写字母开始
    this.x=x;           //关键字this指代初始化的实例，将 函数参数 存储为 对象的属性
    this.y=y;
}

//使用new关键字和构造函数来创建一个实例
var p=new Point(1,1); //平面几何中的点

//通过给构造函数的prototype对象赋值来给Point对象定义方法
Point.prototype.r=function () {
    return Math.sqrt(this.x*this.x+this.y*this.y); //返回xy的平方根，this指代调动这个方法的对象
}
//Point的实例对象p 继承了方法r() 【所有的Point实例对象都会继承方法r()】
p.r();

