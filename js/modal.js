function openDialog(){
    document.body.classList.add("modal");
    document.getElementById("dialog-overlay").classList.add("visible");
    document.getElementById("dialog-container").classList.add("visible");
    setTimeout(function(){
        document.getElementById("dialog-overlay").classList.add("fadein");
        document.getElementById("dialog-container").classList.add("fadein");
    },10);
}
function closeDialog(){
    document.body.classList.remove("modal");
    document.getElementById("dialog-overlay").classList.remove("fadein");
    document.getElementById("dialog-container").classList.remove("fadein");
    setTimeout(function(){
        document.getElementById("dialog-overlay").classList.remove("visible");
        document.getElementById("dialog-container").classList.remove("visible");
    },500);
}