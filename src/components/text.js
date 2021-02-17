import React from 'react'
import Typography  from '../styles/base/typography'
import '../styles/patterns/showcase/hero.css'


function Text(props) {
   const category = props.category?props.category:'text'
   const style = props.style

   const renderText = (
      <p  style={Typography(props, category, style)} className={props.className}>
         {props.children}
      </p>
   )

   return renderText
}

export default Text
