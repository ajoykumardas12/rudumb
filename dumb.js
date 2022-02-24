var b = document.getElementById("no");
b.addEventListener("click",change);

var numberOfNoClick = 0;

function change()
{
    b.setAttribute("id","no-position");
    var i = Math.floor(Math.random()*250)+1;
    var j = Math.floor(Math.random()*250)+1;
    b.style.left = i+"px";
    b.style.top = j+"px";

    numberOfNoClick++;
    if(numberOfNoClick === 15){
        launch_toast();
    }
}

function launch_toast() {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}