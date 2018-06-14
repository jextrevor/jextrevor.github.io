function openDialog(){
    document.body.classList.add("modal");
    document.getElementById("dialog-overlay").classList.add("visible");
    document.getElementById("dialog-overlay").classList.add("fadein");
    document.getElementById("dialog-container").classList.add("visible");
    document.getElementById("dialog-container").classList.add("fadein");
}
function closeDialog(){
    document.body.classList.remove("modal");
    document.getElementById("dialog-overlay").classList.remove("visible");
    document.getElementById("dialog-overlay").classList.remove("fadein");
    document.getElementById("dialog-container").classList.remove("visible");
    document.getElementById("dialog-overlay").classList.remove("fadein");
}