import React from 'react'

//importing pattern stylings
import '../../styles/patterns/navigations/footer.css'

//importing components
import { Icon, Logo } from '../../components'

//importing media assets
import instagram from '../../assets/brandings/social/instagram.svg'
import facebook from '../../assets/brandings/social/facebook.svg'
import twitter from '../../assets/brandings/social/twitter.svg'
import sealogo from '../../assets/brandings/logo/sealogo.svg'



const Footer = () => {

    const renderSocialMediaIcon=(
        <div className="icons">
            <Icon src={facebook} />
            <Icon src={instagram} />
            <Icon src={twitter} />
        </div>
    )
    return (
        <div className="footer">
            <Logo src={sealogo} width={128} height={42} />
            {renderSocialMediaIcon}
        </div>
    )
}

export default Footer
