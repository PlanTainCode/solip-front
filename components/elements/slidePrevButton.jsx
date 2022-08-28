import { useSwiper } from 'swiper/react';
import IconArrowLeft from '../../components/icons/arrow-left.svg';
import cn from 'classnames';

export default function SlidePrevButton(props) {
  const swiper = useSwiper();

  return (
    <div {...props}>
      <button onClick={() => swiper.slidePrev()} className={cn(
        'w-10 h-10 p-1 transition-all duration-300 hover:scale-125',
        { 'opacity-0': swiper.isBeginning },
      )}>
        <IconArrowLeft/>
      </button>
    </div>
  );
}