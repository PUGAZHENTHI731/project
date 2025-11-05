let now =new Date();
let time = document.getElementById('time');
let btn = document.getElementById('timeset-btn');
let audio = document.getElementById('alarm-sound');
let fnan = document.querySelector('h1 #fnan');

// time functions 
function current_time (){
     now = new Date();
     time.innerHTML=`
     ${now.getHours()>12?Number(now.getHours()-12).toString().padStart(2,'0'):now.getHours().toString().padStart(2,'0')} :  
     ${now.getMinutes().toString().padStart(2,'0')} : 
     ${now.getSeconds().toString().padStart(2,'0')}
     `;
     fnan.innerText=`${(now.getHours()>12?'PM':'AM')}`;
}
setInterval(current_time,1000);

//input methods
function set_time (){
     now = new Date();
     let hour = document.getElementById('hour').value;
     let minute = document.getElementById('minute').value;
     let ampm = document.getElementById('ampm').value;
     // 24 to 12time convertion 
     if(ampm.toUpperCase()=='PM' && hour!=12){hour=(Number(hour)+12)}
     if (hour ==now.getHours() && minute == now.getMinutes() ){
         audio.play();
        
     }
}
// setInterval(set_time,1000);

let check=true;
btn.addEventListener("click",function (){
     
     if(check){
          let hour = Number(document.getElementById('hour').value);
          let minute = Number(document.getElementById('minute').value); 
          let ampm = document.getElementById('ampm').value;
          if(ampm.toUpperCase()=='PM' && hour!=12){hour=(Number(hour)+12)}       
          check=false;
          alarmInterval =setInterval(set_time,1000);
          btn.innerText="Stop Alarm";
          btn.style.color='#A3B087';
          btn.style.backgroundColor='#313647';
          let input = document.querySelectorAll("input.time");
          input.forEach(i=>{i.disabled=true});
          alert(`Alarm Set \nRing in ${Math.abs(Number(hour)-Number(now.getHours()))} hours ${Math.abs(Number(minute)-Number(now.getMinutes()))} minutes`);
          
     }else{
          check=true;
          btn.innerText="Set Alarm";
          btn.style.color='#313647';
          btn.style.backgroundColor='#A3B087';
          audio.pause();
          let input = document.querySelectorAll("input.time");
          input.forEach(i=>{i.disabled=false});
          clearInterval(alarmInterval);
          alert("Alarm Cancelled !");
     }
});
