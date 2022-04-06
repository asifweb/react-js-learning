import {images} from '../utils/images'
import HeaderInfo from '../components/HeaderInfo'
import CarouselMovie from '../components/CarouselMovie';
import Video from '../components/Video'
import HomeNews from '../components/HomeNews';
import Footer from '../components/Footer';

const Home = () => {
  const moreReviews = [
    images['m1.jpg'],
    images['m2.jpg'],
    images['m3.jpg'],
    images['m4.jpg'],
    images['m1.jpg'],
    images['m2.jpg'],
    images['m3.jpg'],
    images['m4.jpg'],
  ];

  const reviewSlider = [
    images['r1.jpg'],
    images['r2.jpg'],
    images['r3.jpg'],
    images['r4.jpg'],
    images['r5.jpg'],
    images['r6.jpg'],
    images['m1.jpg'],
    images['m2.jpg'],
    images['m3.jpg'],
  ];

  return (
    <>
      <HeaderInfo />
      <CarouselMovie itemsToShow={6} items={reviewSlider} class="review-slider" />
      <Video url="https://www.youtube.com/watch?v=6Y57prOhaNE" />
      <HomeNews />
      <CarouselMovie itemsToShow={6} items={moreReviews} class="more-reviews" />
    </>
  )
}

export default Home