import React from 'react'

import './App.css'

import bg from './assets/fbg.jpg'
import tree from './assets/tree.png'


const App = () => {

  window.addEventListener('scroll',(e) => {
    let scroll=window.scrollY
    console.log(scroll)
    var image=document.querySelector(".content-image");
    var text=document.querySelector(".text");
    var subtext=document.querySelector(".subtext");

    image.style.transform='translateX('+-scroll*2+'px)';
    text.style.transform='translateX('+-scroll*2+'px)';
    // text.style.fontSize=scroll*0.5+'px';
    subtext.style.left=scroll*2+'px';
  })

  return (
    <>
    <div className="header">
        <img src={bg} className="bg-image" />
        <div className="content">
            <img src={tree} className="content-image" />
            <p className="text">CHAPTER ONE</p>
            <p className="subtext">the egg treasure</p>
        </div>
    </div>
    <div className="section-two">

    </div>
    </>
  )
}

export default App
