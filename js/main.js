// Random Body backgrounColour

document.getElementById("theme-btn").addEventListener(
    "click",
    getColor
)

document.getElementById('day-show').innerText=toDay();
document.getElementById('date-show').innerText=myDate();

document.getElementById('discover-something').style.cursor="pointer";

document.getElementById('discover-something').addEventListener("click",function(){
    window.location.href="blogs.html"
});


