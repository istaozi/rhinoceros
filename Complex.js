/**
 * 用来描述复数.复数是实数和虚数的和，并且虚数i是-1平方根
 */

function Complex(real,imaginary){
    if(isNaN( real)||isNaN(imaginary)) throw  TypeError;
    this.r=real;
    this.i=imaginary;
}
/*类的实例方法*/
Complex.prototype.add=function (that) {
    return new Complex(this.r+that.r,this.i+that.i);
}
/*类方法*/
Complex.parse=function (s) {
    var m=Complex._format.exec(s);
    return new Complex(parseFloat(m[0]),parseFloat(m[1]))
}
/*类的私有字段*/
Complex._format=/^$/;