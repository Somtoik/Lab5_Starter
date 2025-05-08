// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornselect=document.getElementById('horn-select');
  const hornimage=document.querySelector('img');
  const hornaudio=document.querySelector('audio');
  const volumeslider=document.querySelector('volume');
  const volumeicon=document.querySelector('#volume-controls img');
  const playbutton=document.querySelector('button');
  const jsconfetti=new jsconfetti();
  hornselect.addEventListener('change',()=>{
    const value=hornselect.value;
    hornimage.src='assets/images/${value}.svg';
    hornaudio.src='assets/audio/${value}.mp3';
  }
  );
  volumeslider.addEventListener('input',()=>{
    const volume=volumeslider.value;
    hornaudio.colume=volume/100;
    if(volume==0){
      volumeicon.src='assets/icons/volume-level-0.svg';
    }
    else if(volume<33){
      volumeicon.src='assets/icons/volume-level-1.svg';
    }
    else if(volume<67){
      volumeicon.src='assets/icons/volume-level-2.svg';
    }
    else{
      volumeicon.src='assets/icons/volume-level-3.svg';
    }
  });
  playbutton.addEventListener('click',()=>{
    hornaudio.play();
    if(hornselect.value==='party-horn'){
      jsconfetti.addconfetti();
    }
  });
}