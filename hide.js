function hide(e,reflow){
    if(reflow){
        e.style.display="none"; //隐藏这个元素，其所占的空间随之消失
    }else{
        e.style.visibility="hidden"; //隐藏这个元素，但是保留其所占的空间
    }
}