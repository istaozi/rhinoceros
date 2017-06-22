var a = [];
a[-1.23] = true;
a[1] = 111;
a["1000"] = 0;

console.info(a.length)
a.forEach(function (v, i) {
    console.info(i, v)
})
var a1 = [, ,];
a1.push("zz,bb", "cc,bb"); //push在数组末尾增加一个或多个元素
var ppa = a1.pop(); //减少数据长度1，并返回被删除的数组元素
console.log("被pop()删除的元素" + ppa)
a1.unshift("fff,bb");//在数组首部插入一个元素，并且将其他元素依次一道更高的索引处
var shifb = a1.shift();
console.info(shifb + "shif方法在数据首部删除一个元素")
var a2 = new Array(3);

for (var item in a1) {
    console.log(item, a1[item])
}
for (var item in a2) {
    console.log(item, a2[item])
}
/*============================================
var table = new Array(10);
for (var i = 0; i < table.length; i++) {
    table[i] = new Array(10);
    for (var row = 0; row < table.length; row++) {
        for (var col = 0; col < table[row].length; col++) {
            table[row][col] = row * col;
        }
    }

}==*/

var tt=[1,2,3,4];
console.log(typeof tt)
console.log(typeof tt.join())
var arrayMap=tt.map(function (v,i,obj) {
    return v*v;
})
console.log(arrayMap)