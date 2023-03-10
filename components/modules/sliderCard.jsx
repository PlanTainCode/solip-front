import { useState } from 'react';
import Image from 'next/image';
import SlideNextButton from '../elements/slideNextButton';
import SlidePrevButton from '../elements/slidePrevButton';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SliderNavbar from '../elements/sliderNavbar';
import SliderDots from '../elements/sliderDots';

export default function SliderCard({slides = [], showNavbar = false, showDots = false, swiperProps={}}) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const countAllSlides = slides.length;

  return (
    <div className="relative">
      <Swiper
        autoHeight={true}
        spaceBetween={20}
        speed={500}
        onSlideChangeTransitionStart={ ({activeIndex}) => setActiveSlideIndex(activeIndex) }
        {...swiperProps}
      >
        {slides.map(({imageUrl, title, text}, index) =>
          <SwiperSlide key={index}>
            <div className="h-100 relative lg:h-165 style={{transform: 'translate3d(0, 0, 0)'}}">
              <Image src={imageUrl} alt='1' className='rounded-3xl' layout='fill' objectFit='cover' style={{transform: 'translate3d(0, 0, 0)'}}/>

              {title && text && (
                <div className="absolute w-[268px] bottom-0 right-0 bg-silver rounded-tl-3xl p-5 lg:w-112.5 lg:pt-7 lg:px-8 lg:pb-5">
                  {title && <p className="t-h2">{title}</p>}
                  {text && <p className="t-24 mt-1">{text}</p>}
                </div>
              )}
            </div>
          </SwiperSlide>
        )}
        <div className="hidden text-silver lg:block lg:absolute lg:left-0 lg:right-0 lg:top-1/2 lg:z-10">
          <SlidePrevButton className='absolute left-0 -translate-y-1/2'/>
          <SlideNextButton className='absolute right-0 -translate-y-1/2'/>
        </div>

        { showNavbar && <SliderNavbar currentNumber={activeSlideIndex + 1} countAllSlides={countAllSlides}/> }
      </Swiper>

      { showDots && <SliderDots currentNumber={activeSlideIndex + 1} countAllSlides={countAllSlides}/> }
    </div>
  );
}