import React,{useState} from 'react';
import Slider from 'react-slick';

import {Colors} from '../../styles/base/';
import { Text,Button,Icon } from '../../components/';
import {Cards} from '../../data/data';
import { Wallet } from "../../assets/assets";
import {button} from '../../styles/sheets/components/';
import {Container,Section,Row,Column,Card} from '../../layouts/';
import { card, container, section } from "../../styles/sheets/layouts/";
import './birds.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Bird4,Bird8 } from '../../assets/images';

const Birds = () => {

  const [isLogged,setIsLogged] = useState(true)
  const [hasBird,setHasBird] = useState(true)

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
    const newUser = (
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
                    <Icon src={Bird8}/>
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

    const existingUser =(
      <Section>
        <Container style={{
          ...container.default,
          flexDirection:'column',
          height:'auto',
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'column',
          marginTop:48
        }}>
          <div style={{backgroundColor:'white',borderRadius:'50%',width:'220px',height:'220px',marginBottom:16}}>
           <Icon src={Bird4} style={{maxWidth:'100%',height:'100%',objectFit:'cover'}}/> 
          </div>
          <Text type="textMedium" color={Colors.black}>sorry you do not have any birds at the moment </Text>
          <Button type="primary"
            style={{
              ...button.default,marginTop:'16px',
            }}
          >
            Buy yourself a bird
          </Button>
        </Container>
      </Section>
    )
    const existingUserHasBird=(
      <>
      <Section >
        <Container    style={{
          ...container.default,
          flexDirection:'row',
          height:'auto',
          padding:16,
          marginLeft:32,marginRight:32
        }}
        >
            <Text type="textMedium" color={Colors.black}>My Birds</Text>
            <Row>
              <Button type="primary" 
                style={{
                  ...button.default,backgroundColor:'transparent',border:'2px solid #570A7B'
                }}
              >
                Buy a new bird
              </Button>
              <Button type="primary"
                style={{
                  ...button.default,
                  marginLeft:32
                }}
              >
                Nest the bird
              </Button>
            </Row>
        </Container>
      </Section>
      <Section>
        <Container
          style={{
            ...container.default, marginLeft:32,marginRight:32,
            display:'grid',
            gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr',
            gridRowGap:16,
            gridColumnGap:16,
            padding:16,
          }}

          className="birdsCardContainer"
        >
          {
            Cards.map((card) => (
              <>
              <Card key={card.id}>
                <Icon src={card.src} style={{width:'100%',height:'160px',}}/>
                <Text color={Colors.black} style={{fontWeight:'bold'}}>{card.Name}</Text>
              </Card>
              </>
            ))
          }
         
        </Container>
      </Section>
      </>
    )
    return !isLogged ? newUser : !hasBird ? existingUser : existingUserHasBird 
}

export default Birds;
