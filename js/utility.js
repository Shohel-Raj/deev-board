// Random colourCode Generate

function getColor(){
    // rgba Code
   
    const num1=Math.floor(Math.random()*256);
    const num2=Math.floor(Math.random()*256);
    const num3=Math.floor(Math.random()*256);
    const alpa=Math.random().toFixed(2);
    const rgbaColour=`rgba(${num1},${num2},${num3},${alpa})`;
    document.body.style.backgroundColor = rgbaColour;

}



// Date pickUp

function myDate(){
    const myDate= new Date().toDateString();
    const toDay =myDate.split(" ");
    const date=myDate.replace(toDay[0]," ");
    const datef=date.slice(2,date.length);
    
    return datef;
}

// Day pickUp

function toDay(){
    const lDate= new Date().toDateString();
    const fDay =lDate.split(" ");
    const day=fDay[0];

    return day;
}

// Time pickUp

function time() {
    const date= new Date;
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;

    return strTime;
  }
// function getInnertextById(id){
//     const value=document.getElementById()
// }

function incressCounter(id){
    const totalCount = document.getElementById(id).innerText;
    let sum = 0;
    const convrtetToal = parseInt(totalCount);
    sum = convrtetToal + 1;
    return sum;

}
function decressCounter(id){
    const totalCount = document.getElementById(id).innerText;
    let sum = 0;
    const convrtetToal = parseInt(totalCount);
    sum = convrtetToal - 1;
    return sum;

}