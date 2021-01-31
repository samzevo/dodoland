import React from 'react'

import { block } from '../styles/sheets/layouts/'

const Block = (props) => {
	return <div style={block.default}>{props.children}</div>
}
export default Block
