import React from 'react'
import Tab from '../../layouts/tab'
import styles from '../../layouts/tab.module.css'

const Shop = () => {
    return (
        <div>
            Shop
            <Tab className={styles.container}>
            <div label="Tab1" >
          <h2>Tab1</h2>
          <p>lorem ipsum sdlfnsdkl dslfnsnd</p>
        </div>
        <div label="Tab2" >
          <h2>Tab2</h2>
          <p>lorem ipsum sdlfnsdkl dslfnsnd</p>
        </div>
       
            </Tab>
        </div>
    )
}

export default Shop
