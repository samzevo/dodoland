import React from 'react'
import '../../styles/patterns/cards/birdCard.css'
import { Image, Text } from '../../components'

const BirdCard = ({name,src}) => {
    return (
        <div className="card">
                <div className="bird-image">
                    <Image src={src} />
                </div>
                <Text style={{margin:'12px 12px'}}>{name}</Text>
        </div>
    )
}

export default BirdCard
