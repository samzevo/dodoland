import React,{useState} from 'react'
import { Button, Image } from '../../components';
import "../../styles/patterns/cards/tab.css";

import egg from '../../assets/images/egg.png'

const Tab= (props) => {
    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
  
    return (
      <div className="container">
        <div className="bloc-tabs">
          <span
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
           {props.tab1}
          </span>
          <span
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
           {props.tab2}
          </span>
        </div>
  
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
              <div className="bird-container">
                  <Image src={egg} width={220} height={220} />
                  <div className="block-right">
                        <input type="number"  />
                        <span style={{color:'#141414'}}>Total price 2ETH</span>
                        <Button variant="secondary">Buy now</Button>
                  </div>
              </div>
            
         </div>
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            oops
          </div>
        </div>
      </div>
    );
  }
  
  export default Tab;