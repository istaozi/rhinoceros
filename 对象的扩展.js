var birth = "xx-xx-xx";
var person = {
    name: "zhangsan",
    birth,
    hello(){
        console.log('我的名字是：', this.name)
    }
}
person.hello();


function getPoint() {
    var x = 1, y = 10;
    return {x, y}
}
getPoint();
console.log(getPoint())

var ms = {};
function getItem(key) {
    return key in ms ? ms[key] : null;
}
function setItem(key, value) {
    ms[key] = value;
}
function clear() {
    ms = {};
}

/*module.exports={
 getItem,
 setItem,
 clear
 }
 //等价于
 module.exports={
 getItem:getItem,
 setItem:setItem,
 clear:clear
 }*/

//定义对象的属性
var obj1 = {}
obj1.name = "ll";
obj1["sex"] = "nv";


Object.defineProperty(Object,
    'is',
    {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function (x, y) {
            if (x === y) {
                //针对+0不等于-0
                return x !== 0 || 1 / x == 1 / y
            }
            return x !== x && y !== y;
        }
    }
)

console.log(Object.is(NaN, NaN))
console.log(NaN === NaN)
var tag = {0:1,1:2,2:3};
var tt1 = {0: 4, 1: 5}
var tt12 = {a: 11, bb: 2}
Object.assign(tag, tt1,tt12)
console.log(tag.a)
for (var item in tag){
    console.log(item,tag[item])
}
