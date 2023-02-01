import { useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SlideNextButton from '../elements/slideNextButton';
import SlidePrevButton from '../elements/slidePrevButton';
import SliderNavbar from '../elements/sliderNavbar';
import SliderDots from '../elements/sliderDots';
import Button from '../elements/button';

export default function SliderBanner({slides = [], showNavbar = false, showDots = false}) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const countAllSlides = slides.length;

  const getDesignNumber = (number) => {
    const zero = (number < 10) ? '0' : '';
    return zero + number + '.';
  };

  return (
    <div className="relative">
      <Swiper
        autoHeight={true}
        spaceBetween={20}
        speed={500}
        onSlideChangeTransitionStart={ ({activeIndex}) => setActiveSlideIndex(activeIndex) }
      >
        {slides.map(({imageUrl, title, text, link}, index) =>
          <SwiperSlide key={index}>
            <div className="h-115 overflow-hidden rounded-3xl relative lg:h-165">
              <Image src={imageUrl} alt='Работа 1' layout='fill' objectFit='cover' style={{transform: 'translate3d(0, 0, 0)'}}/>
              <div className="absolute left-0 top-0 w-full h-full bg-black/40"></div>

              <div className="absolute right-0 bottom-0 lg:static">
                <div className={cn(
                  'text-right t-display-lg text-white -mb-8 -mr-3',
                  'lg:absolute lg:-bottom-[70px] lg:-left-3 lg:m-0 lg:pointer-events-none lg:text-left'
                )}>{getDesignNumber(index + 1)}</div>

                <div className={cn(
                  'bg-silver rounded-tl-3xl relative px-6 pt-6 pb-4 w-75',
                  'lg:pt-7 lg:px-8 lg:pb-5 lg:absolute lg:w-112.5 lg:bottom-0 lg:right-0'
                )}>
                  {title && <p className="t-h2">{title}</p>}
                  {text && <p className="t-24 mt-1">{text}</p>}
                </div>
                {link && (
                  <div className={cn(
                    'bg-silver px-6 pb-2 w-75',
                    'lg:absolute lg:left-8 lg:bottom-5 lg:w-80 lg:bg-transparent lg:p-0'
                  )}>
                    <Button link={link}>Mer</Button>
                  </div>
                )}
              </div>
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