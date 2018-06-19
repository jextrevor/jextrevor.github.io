function expand(id,contid){
    comp = document.getElementById(id);
    cont = document.getElementById(contid);
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
}
function hide(id,contid){
    comp = document.getElementById(id);
    cont = document.getElementById(contid);
    var coords = comp.getBoundingClientRect();
    setTimeout(function(){
    comp.style.opacity = 1;
    cont.style.opacity = 0;
    cont.style.top = coords.top + "px";
    cont.style.left = coords.left + "px";
    cont.style.width = (coords.right - coords.left) + "px";
    cont.style.height = (coords.bottom - coords.top) + "px";
    },10);
    setTimeout(function(){
        cont.style.display = "none";
    },500);
}