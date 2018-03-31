words = ["TREVOR JEX","DESIGNER","LEARNER","THINKER","CODER"]
chars = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
//chars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
index = 0;
statictime = 5*60;
dynamictime = 30;
time = statictime;
type = 0;
function scramble(){
    index++;
    if(index >= words.length){
        index = 0;
    }
    document.getElementById("scramble").innerHTML = words[index];
}
function step(length){
    string = "";
    for(var i = 0; i < length; i++){
        string += chars[Math.floor(Math.random()*chars.length)]
    }
    document.getElementById("scramble").innerHTML = string;
}
function repaint(){
    time--;
    if(type != 0){
        if(time > 0){
            step(7);
        }
        else{
            scramble();
            type = 0;
            time = statictime;
        }
    }
    else{
        if(time > 0){

        }
        else{
            type = 1;
            time = dynamictime;
        }
    }
    requestAnimationFrame(repaint);
}
requestAnimationFrame(repaint);