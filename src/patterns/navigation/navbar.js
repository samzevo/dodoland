import React from 'react';
import Logo from '../../components/logo'
import NavLink from './navlink';

function Navbar(props){
    const styles = {
        navbar : {
            display : 'flex',
            justifyContent : 'space-between',
            alignItems : 'center',
            width : '1019.54px',
            height : '54px',
            marginTop : '28px',
            marginLeft : '130px',
            marginRight : '130px'
        },
    }
    return (
        <div style = {styles.navbar}>
            <Logo image = '../../assests/Birdly logo.svg'/>
            <NavLink linkName = 'Home'/>
        </div>
    )
}

export default Navbar;
