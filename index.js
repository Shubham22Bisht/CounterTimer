const dayElement=document.querySelector(".days");
const hourElement=document.querySelector(".hours");
const minuteElement=document.querySelector(".minutes");
const secondElement=document.querySelector(".seconds");
const heading =document.querySelector("h1");
const counterTimer=document.querySelector(".counterTimer");


const second=1000,
 minute=60*second,
 hour=60*minute,
 day=24*hour;

 const timeFunction=()=>{

    let  now=new Date();
    let dd=String(now.getDate()).padStart(2,"0"),
        mm=String(now.getMonth()+1).padStart(2,"0"),
        yyyy=now.getFullYear();
     

        const enterDay=prompt("Enter Day").padStart(2,"0");
        if(Number(enterDay)>31){
            alert("wrong input , please try again");
            timeFunction();
        }
        const enterMonth=prompt("Enter Month").padStart(2,"0");
        if(Number(enterMonth)>12){
            alert("wrong input");
            timeFunction();
        }

        now=`${mm}/${dd}/${yyyy}`
        let targetDate=`${enterMonth}/${enterDay}/${yyyy}`;

        if(now>targetDate){
            targetDate=`${enterMonth}/${enterDay}/${yyyy+1}`;
        }
      
    const intervalId=setInterval(() => {
        const timer=new Date(targetDate).getTime();
        const today=new Date().getTime();
        const difference=timer-today;

        const leftDay=Math.floor(difference/day),
              leftHour=Math.floor((difference%day)/hour),
              leftMinute=Math.floor((difference%hour)/minute),
              leftSecond=Math.floor((difference%minute)/second);
        

        dayElement.innerText=leftDay;
        hourElement.innerText=leftHour;
        minuteElement.innerText=leftMinute;
        secondElement.innerText=leftSecond;

        if(difference<0){
            counterTimer.style.display="none";
            heading.innerText="Time to Rock";
            clearInterval(intervalId);
        }

    },0);
 }; 

 timeFunction();