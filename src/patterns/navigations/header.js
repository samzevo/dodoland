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
import close from '../../assets/icons/close.svg'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)	
    const [btnOpen,setBtnOpen] = useState(true)

    const toggle = () => {
		setIsOpen(!isOpen)
	}

    const toggleBtn = () => {
        setBtnOpen(!btnOpen)
    }

    const renderLinks=(
        <div className="nav-links">
               <Link name="Home" path="/" />
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
           <Button variant="btnIcon" onClick={toggleBtn}><Icon src={wallet} style={{marginRight:'10px'}}  />connect wallet</Button>
           <div className="hamburger" onClick={toggle}>
                <Icon src={hamburger} />
           </div>
           { isOpen ? <Sidebar toggle={toggle} /> : null}
           { btnOpen ? <div className="backdrop"></div> : null}
           { btnOpen ? (
               <div className="modal-header"
                 style={{
                     top:btnOpen ? '50%' : '-100%'
                 }}
               >
                   <span onClick={toggleBtn}><Icon src={close} /></span>
                   <div>
                       <Button variant="secondary">meta mask</Button>
                       <Button variant="secondary">wallet connect</Button>
                   </div>
               </div>
           ) : null}
        </div>
    )
}

export default Header
