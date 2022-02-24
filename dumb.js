var b = document.getElementById("no");
b.addEventListener("click",change);
function change()
{
    b.setAttribute("id","no-position");
    var i = Math.floor(Math.random()*500)+1;
    var j = Math.floor(Math.random()*500)+1;
    b.style.left = i+"px";
    b.style.top = j+"px";
}
