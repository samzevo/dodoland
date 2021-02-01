import { render } from '@testing-library/react'
import React from 'react'

import sidebar from '../../styles/sheets/patterns/sidebar'
import { link as linkStyle } from '../../styles/sheets/components'
import { Links } from '../../data/data'
import { Link,Icon } from '../../components'
import { Cancel} from '../../assets/assets'

const Sidebar = (props) => {

    const renderlinks = (
        <React.Fragment>
			{Links.map((link) => (
				<Link
                    style={{ 
                        ...linkStyle.default, 
                        margin:'24px 32px',
                        color:'#570A7B'
                     }}
                     activeClassName="mobileactive"
					key={link.id}
					to={link.to}>
					{link.name}
				</Link>
			))}
        </React.Fragment>
    )
    
    return (
        <div style={props.style?props.style:sidebar.default}>
            <Icon src={Cancel} onClick={props.menu} style={{position:'absolute',top:'10',right:'0',padding:'10px 20px'}}/>
            {renderlinks}
        </div>
    )
}

export default Sidebar
