import React, { useState } from 'react'
import { LucideArrowBigLeft, LucideArrowBigRight } from "lucide-react"
import "./image-slider.css"


interface ImageSliderProps{

    imageUrls:string[]
}



function ImageSlider( {imageUrls}:ImageSliderProps) {
    const [indexImage,setIndexImage] = useState(0)

    function showPrevImage(){
      setIndexImage((index)=>{
        if(index === 0) return imageUrls.length - 1 
        return index - 1
      })

    }
    function showNextImage(){

      setIndexImage((index)=>{
        if(index === imageUrls.length -1) return 0 
        return index + 1
      })
    }



  return (
    <div style={{width:"100%", height:"100%", position:"relative"}}>
        <div style={{width:"100%", height:"100%", display:"flex",overflow:"hidden"}}>
          {imageUrls.map(url => ( <img key={url} src={url} className='img-slider-img' style={{translate:`${-100*indexImage}%`}}></img>) )}
         
        </div>
        
        <button className='img-slider-btn' style={{left:"0"}} onClick={showPrevImage}><LucideArrowBigLeft></LucideArrowBigLeft></button>
        <button className='img-slider-btn' style={{right:"0"}} onClick={showNextImage}><LucideArrowBigRight></LucideArrowBigRight></button>
    </div>
  )
}

export default ImageSlider