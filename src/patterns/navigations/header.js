import React,{useState} from 'react'

//importing pattern stylings
import '../../styles/patterns/navigations/header.css'

//importing components
import { Button, Link, Logo, Icon } from '../../components/'

//importing sidebar
import Sidebar from './sidebar'

//importing media assets
import logo from '../../assets/brandings/logo/logo.svg'
import wallet from '../../assets/icons/wallet.svg'
import hamburger from '../../assets/icons/hamburger.svg'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)	

    const toggle = () => {
		setIsOpen(!isOpen)
	}


    const renderLinks=(
        <div className="nav-links">
               <Link name="Home" path="/home" />
               <Link name="Birds" path="/birds" />
               <Link name="Shop" path="/shop" />
               <Link name="Nesting" path="/nesting" />
               <Link name="Earn" path="/earn" />
               <Link name="Feeding" path="/feeding" />
               <Link name="Upcoming" path="/upcoming" />
        </div>
    )
    return (
        <div className="header">
           <Logo src={logo} className="logo" />
           {renderLinks}
           <Button variant="btnIcon"><Icon src={wallet} style={{marginRight:'10px'}} />connect wallet</Button>
           <div className="hamburger" onClick={toggle}>
                <Icon src={hamburger} />
           </div>
           { isOpen ? <Sidebar toggle={toggle} /> : null}
        </div>
    )
}

export default Header
