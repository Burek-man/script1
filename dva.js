let size=30;
let explod = false;

function increseheight(){
    size+= 10;

    if (size>= 300 && size < 310){
        document.getElementById("ballong").innerHTML = "💥";
    }
    else if (size >= 309){
        explod = true;
    }
    if (explod) {
        size = 100;
    document.getElementById("ballong").innerHTML = "🎈";
        explod = false;
    }

    document.getElementById("ballong").style.fontSize = size + "px";
}