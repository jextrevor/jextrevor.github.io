words = ["TREVOR JEX","DESIGNER","THINKER","PROGRAMMER"]
chars = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
index = 0;
function scramble(){
    index++;
    if(index >= words.length){
        index = 0;
    }
    j = 15;
    hello = setInterval(function(){step(7);j--;if(j<=0){clearInterval(hello);document.getElementById("scramble").innerHTML = words[index]}},50);
    //document.getElementById("scramble").innerHTML = words[index];
}
function step(length){
    string = "";
    for(var i = 0; i < length; i++){
        string += chars[Math.floor(Math.random()*chars.length)]
    }
    document.getElementById("scramble").innerHTML = string;
}
scramble();
setInterval(function(){scramble();},5000);