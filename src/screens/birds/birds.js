import React from 'react'
import Slider from 'react-slick'

import {Colors} from '../../styles/base/'
import { Text,Button,Icon } from '../../components/';
import {Cards} from '../../data/data'
import { Wallet } from "../../assets/assets";
import {button} from '../../styles/sheets/components/'
import './birds.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Birds = () => {

    var settings = {
          dots: false,
          infinite: true,
          arrows:true,
          centerMode:false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
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
                slidesToScroll: 1
              }
            }
          ]
        };
    return (
        <>
        
              <div style={{width:'70vw',margin:'32px auto'}}>    
                 <Slider {...settings}>
                     
                     {Cards.map(card => (                       
                         <div class="card" key={card.id}>
                             <div class="image">
                                 <img src={card.src}></img>
                             </div>
                             <div class="content">
                              {card.Name}
                            </div>
                        </div>
                         ))
                    }
                    
                </Slider>
             </div>
            <div className="birdsSectionTwo">
                <div className="leftBlock">
                    
                </div>
                <div className="rightBlock">
                    <Text style={{fontWeight:'bold',fontSize:'22px',marginBottom:'16px'}} color={Colors.black}>
						Ready for the flight ?
					</Text>
                    <Text  style={{marginBottom:'16px'}} >
						connect to metamask wallet to explore
					</Text>
                    <Button type="btnIcon" >
                        <Icon src={Wallet} style={{marginRight:'12px'}}/>
                        Connect Walet
                    </Button>
                </div>

            </div>

        </>
    )
}

export default Birds;
