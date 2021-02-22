import React from 'react'
import { Button, Icon, Text } from '../../components'

//importing screen stylings
import '../../styles/patterns/showcase/hero.css'

//importing media assets
import guide from '../../assets/icons/guide.svg'

const Hero = () => {
    return (
        <div className="hero">
            <Text category="title" type="titleLarge" className="title" style={{letterSpacing:'0.1em',color:'#570a7b'}}>Welcome to birdly</Text>
            <Text  type="textMedium" className="sub-title">collect and breed your birds forever and ever</Text>
            <Text type="textMedium"  className="sub-title"><span className="span">16.8k Birds</span> burned through fees</Text>
            <div className="hero-button">
                <Button variant="primary">Get started</Button>
                <Button variant="btnIcon"><Icon src={guide} style={{marginRight:12}}/>Guide</Button>
            </div>
        </div>
    )
}

export default Hero
