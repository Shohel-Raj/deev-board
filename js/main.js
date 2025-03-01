// Random Body backgrounColour

document.getElementById("theme-btn").addEventListener(
    "click",
    getColor
)

document.getElementById('day-show').innerText = toDay();
document.getElementById('date-show').innerText = myDate();

document.getElementById('discover-something').style.cursor = "pointer";

document.getElementById('discover-something').addEventListener("click", function () {
    window.location.href = "blogs.html"
});


// button Click function added

document.getElementById('btn-1').addEventListener("click", function () {
    alert("Board updated Successfully")
    document.getElementById('btn-1').disabled=true;
    const presnNum= incressCounter("total-completet");
    document.getElementById("total-completet").innerText=presnNum;

    const decressValue=decressCounter("decress-value");
    document.getElementById('decress-value').innerText=decressValue;

    const title= document.getElementById('card-1-title').innerText;
    const h="You have completed he task "+title+" at "+time();

    const history= document.createElement("p");
    history.innerText=h;
    
    const commentBox=document.getElementById("history-box");
    history.classList.add("p-2", "bg-gray-400", "text-white", "rounded-lg");

   commentBox.appendChild(history);
    


})
