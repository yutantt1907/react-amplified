import React from "react";
import Masonary from "react-masonry-component"
import  "./styles/imageList.css"

const ImageList= (props) =>{
    const images =props.images.map((image)=>{
        return(
            <a href={image.pageURL} key={image.id} target="_brank" rel='noopener noreferrer'
            className="ui medium image" >
                <img 
                    src={image.webformatURL}
                    alt={image.tags}/>
            </a>
        )
    })
    return <Masonary className="image-list">{images}</Masonary>
}

export default ImageList;