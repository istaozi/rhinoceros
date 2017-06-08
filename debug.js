
function debug(msg) {
    var log =document.getElementById("debuglog");
    if(!log){
        log=document.createElement("div");
        log.id="debuglog";
        log.innerHTML="<h1>Debug log</h1>";
        document.body.appendChild(log);
    }
    var pre=document.createElement("pre");
    var text=document.createTextNode(msg);//将msg 封装到一个文本节点中
    pre.appendChild(text);
    log.appendChild(pre);
}

/*
*  使用JavaScript操控网页的内容 样式 以及行为。
function debgu(msg){
    var log =$("#debuglog");
    if(log.lenght==0){
        log="<div><h1>Debug log</h1></div>";
        log.appendTo(document.body);
    }
    log.append($("<pre/>").text(msg));
}
 * */