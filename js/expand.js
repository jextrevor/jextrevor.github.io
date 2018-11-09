function expand(id,contid){
    var comp = document.getElementById(id);
    var cont = document.getElementById(contid);
    var coords = comp.getBoundingClientRect();
    cont.style.top = coords.top + "px";
    cont.style.left = coords.left + "px";
    cont.style.width = (coords.right - coords.left) + "px";
    cont.style.height = (coords.bottom - coords.top) + "px";
    cont.style.display = "block";
    setTimeout(function(){
    comp.style.opacity = 0;
    cont.style.opacity = 1;
    cont.style.top = "0px";
    cont.style.left = "0px";
    cont.style.width = "100%";
    cont.style.height = "100%";
    },10);
    setTimeout(function(){
        cont.style.overflow = "auto";
    },500);
}
function hide(id,contid){
    var comp = document.getElementById(id);
    var cont = document.getElementById(contid);
    var coords = comp.getBoundingClientRect();
    setTimeout(function(){
    comp.style.opacity = 1;
    cont.style.opacity = 0;
    cont.style.overflow = "hidden";
    cont.style.top = coords.top + "px";
    cont.style.left = coords.left + "px";
    cont.style.width = (coords.right - coords.left) + "px";
    cont.style.height = (coords.bottom - coords.top) + "px";
    },10);
    setTimeout(function(){
        cont.style.display = "none";
    },500);
}