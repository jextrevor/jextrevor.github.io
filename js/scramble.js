words = ["Trevor Jex","Learner","Thinker","Designer","Coder"];
colors = ["#FFF","#0DF","#FF0"];
index = 0;
statictime = 2000;
dynamictime = 500;
function wait(){
    setTimeout(fadeout,statictime);
}
function fadeout(){
    document.getElementById("scramble").classList.add("hidden");
    setTimeout(fadein,dynamictime);
}
function fadein(){
    index++;
    if(index >= words.length){
        index = 0;
    }
    document.getElementById("scramble").innerHTML = words[index];
    document.documentElement.style.setProperty("--glow-color",getRandomColor());
    document.getElementById("scramble").classList.remove("hidden");
    setTimeout(wait,dynamictime);
}
function getRandomColor() {
   return colors[Math.floor(Math.random() * 3)]
  }
wait();
