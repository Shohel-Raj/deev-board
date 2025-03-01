// Random colourCode Generate

function getColor(){
    // Hex Code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;

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
    let ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;

    return strTime;
  }











  
  console.log(time());
  console.log(myDate());

  console.log(toDay());
  
  