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