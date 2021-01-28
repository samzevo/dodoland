import React from 'react';
import { Link } from 'react-router-dom';

function NavLink(props){
    const styles = {
        navlink :{
            color : 'white',
            fontWeight : '700',
            fontSize: '15px',
        }
    }
    const navlink = (
        <Link to = '/' type = 'link'>
            {props.linkName}
        </Link>
    )
    return navlink
}

export default NavLink;