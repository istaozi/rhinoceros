
/*
*
*
*
* */
function  emu(nameToValues) {
    var emu=function () {
        throw "cann't instantiate enum"
    }

    var proto=emu.prototype={
        constructor:emu,
        toString:function () {
            return this.name;
        },
        valueOf:function () {
          return this.value;
        },
        toJSON:function () {
            return this.name;
        }
    };
    emu.values=[];

    for (name in nameToValues){
        var e=inherit(proto);
        e.name=name;
        e.value=nameToValues[name];
        emu[name]=e;
        emu.values.push(e);
    }
    emu.foreach=function (f,c) {
        for(var i=0;i<this.values.length;i++)f.call(c,this.values[i]);
    }
    return emu;
}
function Card(suit,rank){
    this.suit=suit;
    this.rank=rank;
}

Card.Suit=



