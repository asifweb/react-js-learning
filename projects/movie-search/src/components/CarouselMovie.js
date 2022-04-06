import { useRef } from 'react';
import Carousel from 'react-elastic-carousel'

const CarouselMovie = (props) => {
    const carouselRef = useRef(null)
    
    let itemstoShow = props.itemsToShow
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: itemstoShow }
    ];

    const totalItems = Math.ceil(props.items.length / itemstoShow);
    const playSpeed = 1500;
  return (
    <>
    <div className={ props.class}>
        <Carousel ref={carouselRef} pagination={false} autoPlaySpeed={playSpeed} breakPoints={breakPoints} showArrows={false} enableAutoPlay={true} onNextEnd={(nextItemObject, currentPageIndex) => {
          if(nextItemObject.index === totalItems) {
            setTimeout(() => {
              carouselRef.current.goTo(0)
            }, playSpeed)
          }
        }} enableMouseSwipe={true} enableSwipe={true}>
          {props.items.map((item, index) => 
            <li key={index}>
                <img src={item} />
            </li>
        )}
        </Carousel>
        </div>
    </>
  )
}

export default CarouselMovie