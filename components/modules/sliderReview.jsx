import { marked } from "marked";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper';
import SliderCard from "./sliderCard";

export default function SliderReview({ slides, title = '' }) {
  const slides_1 = slides;
  const slides_2 = slides.map(({ imageUrl, imageTitle, imageText }) => ({
    imageUrl,
    title: imageTitle,
    text: imageText
  }));

  const swiper1Ref = useRef();
  const swiper2Ref = useRef();

  const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    swiper1Ref.current.controller.control = swiper2Ref.current;
    swiper2Ref.current.controller.control = swiper1Ref.current;
  }, []);

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-10">

      <div className="lg:col-span-6 relative">
        <h2 className="t-h1 text-green">{title}</h2>

        <div className="mt-8 lg:absolute lg:bottom-10 lg:left-0 lg:w-full lg:mt-0">
          <Swiper
            autoHeight={true}
            spaceBetween={20}
            speed={500}
            modules={[Controller]}
            onSwiper={(swiper) => {
              swiper1Ref.current = swiper;
            }}
          >
            {slides_1.map(({title, content}, index) =>
              <SwiperSlide key={index}>
                <div className="lg:flex lg:flex-col-reverse lg:h-full">
                  <h3 className="t-h2 mt-6">{title}</h3>

                  <div className="paragraph t-24 mt-4 lg:pr-16 lg:mt-5" dangerouslySetInnerHTML={{__html: marked.parse(content)}}/>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>

      <div className="mt-8 lg:mt-0 lg:col-span-6">
        <SliderCard
          slides={slides_2}
          swiperProps={
            {
              modules: [Controller],
              onSwiper: (swiper) => {
                swiper2Ref.current = swiper;
              }
            }
          }
        />
      </div>

    </div>
  );
}