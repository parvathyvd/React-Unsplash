import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) => {
    //console.log(props.images)
    const imgURL = props.images.map(image => {
        //destructure urls,alt and id from img.url, img.id etc..
        return <ImageCard image={image} key={image.id}/>
    })

    return(
    <div className="imageList">{imgURL}</div>
    )
}

export default ImageList;