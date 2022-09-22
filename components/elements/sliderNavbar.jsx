import { useSwiper } from 'swiper/react';

export default function SliderNavbar({currentNumber = 1, countAllSlides = 1, setActiveSlideIndex}) {
  const widthInPercent = 1 / countAllSlides * 100;
  const offsetInPercent = (currentNumber - 1) * 100;
  const swiper = useSwiper();

  return (
    <div className="absolute left-0 top-10 right-0 z-10 border-t-2 border-silver lg:top-12">
      <div
        className="h-2 bg-silver transition-transform duration-500 lg:h-2.5"
        style={{
          width: `${widthInPercent}%`,
          transform: `translate3d(${offsetInPercent}%, 0, 0)`,
        }}
      ></div>
      <div className="absolute left-0 -top-1 right-0 flex">
        { [...Array(countAllSlides)].map(
          (_, index) =>
            <div
              className="h-6 flex-1 cursor-pointer"
              key={index}
              onClick={() => swiper.slideTo(index)}
            />
        ) }
      </div>
    </div>
  );
}