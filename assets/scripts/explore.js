// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voiceselect=document.getElementById('voice-select');
  const speakbutton=document.querySelector('button');
  const textinput=document.querySelector('text-to-speak');
  const faceimg=document.querySelector('img');
  let voices=[];
  function popvoices(){
    voices=speachsynthesis.getvoices();
    voices.forEach(voice=>{
      const option=document.createElement('option');
      option.textContent='${voice.name}(${voice.lang})';
      option.value=voice.name;
      voiceselect.appendChild(option);
    });
  }
  popvoices();
  if(speechSynthesis.onvoiceschanged!==undefined){
    speechSynthesis.onvoiceschanged=popvoices;
  }
  speakbutton.addEventListener('click',()=>{
    const utter=new SpeechSynthesisUtterance(textinput.value);
    const selectedvoice=voices.find(v=>v.name===voiceselect.value);
    utter.voice=selectedvoice;
    faceimg.src='assets/images/smiling-open.png';
    utter.onend=()=>{
      faceimg.src='assets/images/smiling.png';
    };
    speechSynthesis.speak(utter);
  });
}