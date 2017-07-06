/*闭包closeure*/
var scop="global ";
function checkscope() {
    var scop="local";
    function f() {
        return scop;
    }
    return f; //return f，首先要明确f是一个函数，返回的是一个函数。
}
checkscope()();
console.info(checkscope())


function counter() {
    var n=0;
    return{
        count:function () {return n++;},
        reset:function () {return n=0;}
    };
}
var c=counter(),d=counter();
console.log(c.count())
console.log(c.reset())
console.log(c.count())

function counter2(n) {
    return{
        get count(){return n++;},
        set count(m){
            if(m>=n) n=m;
            else throw Error("count can only be set to a larger value");
        }
    }
}
var c=counter2(1);
console.warn(c.count)
console.info(c.count=4)
console.info(c.count)

/*递归 n*(n-1)*/
function 递归(n) {
    if(n<=1) return 1;
    else{
        return n*递归(n-1)
    }
}
console.warn(递归(3))

if( function f(x) { return 1;}>0){
    console.info("--")y
}

//将函数作为值
function add(x,y){return x+y}
function substract(x,y) {return x-y }

function operate(operator,arg1,arg2) {
    return operator(arg1,arg2)
}

var i=operate(add,add(1,2),add(1,1));

//将函数作为对象的直接量
var operators={
    add:function (x,y) {
        return x+y;
    },
    abc:function (x,y) {
        return x-y;
    }
}
function operator2(operation,arg1,arg2) {
    if(typeof operators[operation]==="function"){
        return operators[operation](arg1,arg2)
    }
}

var data=[1,1,3,5,5];
var total=0;
for(var i=0;i<data.length;i++)total+=data[i];
var mean=total/data.length;

//标准差，首先计算每个数据减去平均数之后偏差的平方然后求和

total=0;
for (var i=0;i<data.length;i++){
    var deviation=data[i]-mean;
    total+=deviation*deviation;
}
var stddev=Math.sqrt(total/(data.length-1))


//使用数组方法map() reduce()同样可以实现计算
var sum=function (x,y) {
    return x+y;
}

var square=function (x) {
    return x*x;
}

//然后将函数配合数组方法使用
var data=[1,1,3,3,5];
var mean=data.reduce(sum)/data.length;
var  deviations=data.map(function (x) {
    return x-mean
})

