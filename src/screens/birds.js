import React from 'react'

//importing screen stylings
import '../styles/screens/birds.css'

import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Button, Image, Text,Icon } from '../components/'
import BirdCard from '../patterns/cards/birdCard'

import wallet from '../assets/icons/wallet.svg'
import double from '../assets/images/double.png'
import bird1 from '../assets/images/bird1.png'
import bird2 from '../assets/images/bird2.png'
import bird3 from '../assets/images/bird3.png'
import bird4 from '../assets/images/bird4.png'
import bird6 from '../assets/images/bird6.png'



const Birds = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide:1
            }
          }
        ]
      };

    const renderExistingUser=(
        <div className="bird-user">
            <div className="bird-header">
                <Text style={{fontSize:18,color:'#141414',whiteSpace:'nowrap',marginRight:16}}> My Birds</Text>
                <div className="block-button">
                    <Button variant="secondary" style={{backgroundColor:'transparent'}}>Buy <span className="button-span">a new bird</span></Button>
                    <Button variant="secondary">Nest <span  className="button-span">the birds</span></Button>
                </div>
            </div>
            <div className="wrapper">
                <BirdCard name="FireStar Bird" src={bird1} />
                <BirdCard name="The Hummingbird" src={bird2} />
                <BirdCard name="Kingfisher" src={bird3} />
                <BirdCard name="Hornbill" src={bird4} />
                <BirdCard name="Hornbill" src={bird6} />
            </div>
        </div>
    )


    const renderNewUser=(
        <div className="bird">
            <div className="image">
                <div className="image-block">
                    <Image src={double} width={'100%'} height={'auto'} />
                </div>
            </div>
            <Text style={{color:'black',fontWeight:'bold'}}>sorry you do not any birds at the moment</Text>
            <Button variant="primary" style={{marginTop:16}}>Buy yourself a bird</Button>
     </div>
    )

    const renderNew=(
        <div>
            <div className="slider">
                <Slider {...settings}>
                    <BirdCard name="FireStar Bird" src={bird1} />
                    <BirdCard name="The Hummingbird" src={bird2} />
                    <BirdCard name="Kingfisher" src={bird3} />
                    <BirdCard name="Hornbill" src={bird4} />
                    <BirdCard name="Hornbill" src={bird6} />
             </Slider>
            </div>
            <div className="block">
                <div className="block-left">
                    image
                </div>
                <div className="block-right">
                    <Text category="title" style={{whiteSpace:'nowrap'}}>Ready for the flight?</Text>
                    <Text>connect your meta mask wallet to explore</Text>
                    <Button variant="btnIcon"><Icon src={wallet}/>connect wallet</Button>
                </div>
            </div>
        </div>
    )

    return (
        <>
       {renderNew}
       </>
    )
}

export default Birds
