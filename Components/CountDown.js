
let countDownDate = new Date("April 18, 2020 00:00:00").getTime();

const CountDown =  ()=> {
  const now = new Date().getTime();
  let distance = countDownDate - now;


  if(distance < 0){
   
    while(countDownDate < now){
      countDownDate = countDownDate + 1000*60*60*24*7;

    }
    distance =   countDownDate - now;
  }


  const days = Math.floor(distance/(1000*60*60*24));
  const hours = Math.floor( (distance%(1000*60*60*24)) / (1000*60*60)); 
  const minutes = Math.floor( (distance%(1000*60*60)) /(1000*60)); 
  const seconds = Math.floor( (distance%(1000*60)) /(1000));  
  document.getElementById('time').innerHTML =  `${days}D ${hours}H ${minutes}M ${seconds}S`;
}


setInterval(CountDown , 1000); 
