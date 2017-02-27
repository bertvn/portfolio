var toggleMore = function(id, el){
    var temp = document.getElementById(id).className;
    if(~temp.indexOf("open")){
        temp = temp.replace('open', '');
    } else{
        temp += 'open';
    }
    document.getElementById(id).className = temp;
    el.className = temp;
};