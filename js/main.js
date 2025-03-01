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
    const h="You have completed the task "+title+" at "+time();

    const history= document.createElement("p");
    history.innerText=h;
    
    const commentBox=document.getElementById("history-box");
    history.classList.add("p-2", "bg-gray-400", "text-white", "rounded-lg");

   commentBox.appendChild(history);
   if(decressValue==0){
    alert("Congrats! You have completed all the current task");
   }


})
// btn2
document.getElementById('btn-2').addEventListener("click", function () {
    alert("Board updated Successfully")
    document.getElementById('btn-2').disabled=true;
    const presnNum= incressCounter("total-completet");
    document.getElementById("total-completet").innerText=presnNum;

    const decressValue=decressCounter("decress-value");
    document.getElementById('decress-value').innerText=decressValue;

    const title= document.getElementById('card-2-title').innerText;
    const h="You have completed the task "+title+" at "+time();

    const history= document.createElement("p");
    history.innerText=h;
    
    const commentBox=document.getElementById("history-box");
    history.classList.add("p-2", "bg-gray-400", "text-white", "rounded-lg");

   commentBox.appendChild(history);
   if(decressValue==0){
    alert("Congrats! You have completed all the current task");
   }


})
// btn-3
document.getElementById('btn-3').addEventListener("click", function () {
    alert("Board updated Successfully")
    document.getElementById('btn-3').disabled=true;
    const presnNum= incressCounter("total-completet");
    document.getElementById("total-completet").innerText=presnNum;

    const decressValue=decressCounter("decress-value");
    document.getElementById('decress-value').innerText=decressValue;

    const title= document.getElementById('card-3-title').innerText;
    const h="You have completed the task "+title+" at "+time();

    const history= document.createElement("p");
    history.innerText=h;
    
    const commentBox=document.getElementById("history-box");
    history.classList.add("p-2", "bg-gray-400", "text-white", "rounded-lg");

   commentBox.appendChild(history);
   if(decressValue==0){
    alert("Congrats! You have completed all the current task");
   }


})
// btn-4
document.getElementById('btn-4').addEventListener("click", function () {
    alert("Board updated Successfully")
    document.getElementById('btn-4').disabled=true;
    const presnNum= incressCounter("total-completet");
    document.getElementById("total-completet").innerText=presnNum;

    const decressValue=decressCounter("decress-value");
    document.getElementById('decress-value').innerText=decressValue;

    const title= document.getElementById('card-4-title').innerText;
    const h="You have completed the task "+title+" at "+time();

    const history= document.createElement("p");
    history.innerText=h;
    
    const commentBox=document.getElementById("history-box");
    history.classList.add("p-2", "bg-gray-400", "text-white", "rounded-lg");

   commentBox.appendChild(history);
   if(decressValue==0){
    alert("Congrats! You have completed all the current task");
   }


})
// btn-5
document.getElementById('btn-5').addEventListener("click", function () {
    alert("Board updated Successfully")
    document.getElementById('btn-5').disabled=true;
    const presnNum= incressCounter("total-completet");
    document.getElementById("total-completet").innerText=presnNum;

    const decressValue=decressCounter("decress-value");
    document.getElementById('decress-value').innerText=decressValue;

    const title= document.getElementById('card-5-title').innerText;
    const h="You have completed the task "+title+" at "+time();

    const history= document.createElement("p");
    history.innerText=h;
    
    const commentBox=document.getElementById("history-box");
    history.classList.add("p-2", "bg-gray-400", "text-white", "rounded-lg");

   commentBox.appendChild(history);
   if(decressValue==0){
    alert("Congrats! You have completed all the current task");
   }


})
// btn-6
document.getElementById('btn-6').addEventListener("click", function () {
    alert("Board updated Successfully")
    document.getElementById('btn-6').disabled=true;
    const presnNum= incressCounter("total-completet");
    document.getElementById("total-completet").innerText=presnNum;

    const decressValue=decressCounter("decress-value");
    document.getElementById('decress-value').innerText=decressValue;

    const title= document.getElementById('card-6-title').innerText;
    const h="You have completed the task "+title+" at "+time();

    const history= document.createElement("p");
    history.innerText=h;
    
    const commentBox=document.getElementById("history-box");
    history.classList.add("p-2", "bg-gray-400", "text-white", "rounded-lg");

   commentBox.appendChild(history);
   if(decressValue==0){
    alert("Congrats! You have completed all the current task");
   }
    


})








document.getElementById('clear-btn').addEventListener("click",function(){
    document.getElementById('history-box').innerHTML="";
})
