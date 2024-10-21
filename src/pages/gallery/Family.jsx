import { useState } from 'react';
import {ChevronRight, ChevronLeft, X } from "lucide-react";
import F1 from '/f1.jpg';
import F2 from '/f2.jpg';
import F3 from '/f3.jpg';
import F4 from '/f4.jpg';
import F5 from '/f5.jpg';
import F6 from '/f6.jpg';

export default function Family() {

    const galleryImages =[{
       
        img: F1
    },
    {
      
        img: F2
    },
    {
        
        img: F3
    },
    {
       
        img: F4
    },
    {
       
        img: F5
    },
    {
      
        img: F6
    },
    { img: F1
},
{
  
    img: F2
},
{
    
    img: F3
},
{
   
    img: F4
},
{
   
    img: F5
},
{
  
    img: F6
}
]
    


    // const WSPGallery = ({galleryImages}) => {
    
      const [slideNumber, setSlideNumber] = useState(0)
      const [openModal, setOpenModal] = useState(false)
    
      const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
      }
    
      // Close Modal
      const handleCloseModal = () => {
        setOpenModal(false)
      }
    
      // Previous Image
      const prevSlide = () => {
        slideNumber === 0 
        ? setSlideNumber( galleryImages.length -1 ) 
        : setSlideNumber( slideNumber - 1 )
      }
    
      // Next Image  
      const nextSlide = () => {
        slideNumber + 1 === galleryImages.length 
        ? setSlideNumber(0) 
        : setSlideNumber(slideNumber + 1)
      }

   
    return (

        <div>

        {openModal && 
          <div className='sliderWrap fixed flex bg-black/90 z-50 w-full items-center justify-center inset-0'>
            <X icon={X} className='fixed flex top-10 right-10 cursor-pointer opacity-60 hover:opacity-100 text-white z-50 ' onClick={handleCloseModal}  />
            <ChevronLeft icon={ChevronLeft} className='fixed flex -translate-y-1/2 left-10 top-1/2 cursor-pointer opacity-60 hover:opacity-100 text-white z-50' onClick={prevSlide} />
            <ChevronRight icon={ChevronRight} className='fixed flex -translate-y-1/2 right-10 top-1/2 cursor-pointer opacity-60 hover:opacity-100 text-white z-50'  onClick={nextSlide} />
            <div className='flex items-center justify-center'>
              <img className="max-h-[95vh] " src={galleryImages[slideNumber].img} alt='' />
            </div>
          </div>
        }
  
        {/* <br />
        Current slide number:  {slideNumber}
        <br />
        Total Slides: {galleryImages.length}
        <br /><br /> */}
  
        <div className='flex flex-wrap items-center justify-center gap-2 m-[0_auto]'>
          {
            galleryImages && galleryImages.map((slide, index) => {
              return(
                <div 
                  className='single' 
                  key={index}
                  onClick={ () => handleOpenModal(index) }
                >
                  <img className="max-w-sm"src={slide.img} alt='' />
                </div>
              )
            })
          }
        </div>
  
      </div>
 
//   <div>
//     {data.map((item, index)=>{
//         return (
//             <div key={index}>
//                 <img src={item.imgSrc}/>
//             </div>
//         )
//     })}
//   </div>
   
)
}