const minHand=document.querySelector('.min-hand');
const hourHand= document.querySelector('.hour-hand');
const secondHand= document.querySelector('.second-hand');

function setDate(){
    const now=new Date();
    const seconds =now.getSeconds();
    const second_degree=((seconds/60)*360)+90;
    secondHand.style.transform=`rotate(${second_degree}deg)`;

    const minutes =now.getMinutes();
    const minute_degree=((minutes/60)*360+(seconds/60)*6)+90;
    minHand.style.transform=`rotate(${minute_degree}deg)`;

    const hours =now.getHours();
    const hour_degree=((hours/12)*360+(minutes/60)*30)+90;
    hourHand.style.transform=`rotate(${hour_degree}deg)`;

}
setInterval(setDate,1000);
setDate();