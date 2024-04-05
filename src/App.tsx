
import img1 from "./img/img1.jpg"
import img2 from "./img/img2.jpg"
import img3 from "./img/img3.jpg"
import img4 from "./img/img4.jpg"
import img5 from "./img/img5.jpg"

import './App.css'
import ImageSlider from "./Components/ImageSlider"

function App() {
  
  const animalArray = [img1,img2,img3,img4,img5]

  return (
    <>
     <div style={{ maxWidth:"1200px", width:"100%", height:"500px", margin:"0 auto"}}>
      <ImageSlider imageUrls={animalArray}></ImageSlider>
      </div>
    </>
  )
}

export default App
