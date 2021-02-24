import React from 'react'

import './App.css'
import './egg.css'

import bg from './assets/fbg.jpg'
import tree from './assets/tree.png'
import wing from './assets/wing.png'


const App = () => {

  window.addEventListener('scroll',(e) => {
    let scroll=window.scrollY
    console.log(scroll)
    var image=document.querySelector(".content-image");
    var text=document.querySelector(".text");
    var subtext=document.querySelector(".subtext");
    var section=document.querySelector(".section-two-image");


    image.style.transform='translateY('+-scroll*0.5+'px)';
    text.style.fontSize=scroll*0.5+'px';
    subtext.style.left=scroll*0.5+'px';

  })

  return (
    <>
    <div className="header">
        <img src={bg} className="bg-image" alt="bg"/>
        <div className="content">
            <img src={tree} className="content-image" alt="treasure"/>
            <p className="text">CHAPTER ONE</p>
            <p className="subtext">the egg treasure</p>
        </div>
    </div>
    <div className="section-two">
      <img src={wing} className="section-two-image" alt="section-two"/>
      <div class="egg"></div>
      <div className="egg-btn">
        <button>adopt it</button>
      </div>
    </div>
    <div className="section-three">
        <img src={bg} className="section-three-image"  alt="section-three"/>
       
    </div>
    </>
  )
}

export default App
