function remove_transition(d){
    if(d.propertyName!=='transform') return;
    d.target.classList.remove('playing');
}

function play_sound(d){
    const audio=document.querySelector(`audio[data-key="${d.keyCode}"]`);
    const key=document.querySelector(`div[data-key="${d.keyCode}"]`);
    if(!audio) return;
    key.classList.add('playing');
    audio.currentTime=0;
    audio.play()


}
const keys=Array.from(document.querySelectorAll('.key'))
keys.forEach(x=>x.addEventListener('transitionend',remove_transition));
window.addEventListener('keydown',play_sound);