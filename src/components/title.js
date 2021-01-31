import React from 'react'

import { Typography } from '../styles/base/'

function Title(props) {
   const category = 'title'
   const style = props.style
   return (
      <h1  style={Typography(props, category,style)}>
         {props.children}
      </h1>
   )
}

export default Title
