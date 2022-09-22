import SliderCard from "./sliderCard";
import cn from 'classnames';

const getDesignNumber = (number) => {
  const zero = (number < 10) ? '0' : '';
  return zero + number + '.';
};

const Block = ({ title, text, slides, number }) => (
  <div className="lg:grid grid-cols-12 gap-x-10">
    <div className={cn('pb-8 lg:col-span-6 lg:flex lg:pb-16', {
      'lg:items-center': number
    })}>
      <div className="pr-10">
        {number && <p className="t-display text-green">{getDesignNumber(number)}</p>}
        {title && <p className="t-h2">{title}</p>}
        {text && <div className='paragraph t-24 mt-5 lg:mt-6' dangerouslySetInnerHTML={{__html: text}}/>}
      </div>
    </div>

    <div className={cn(
      'lg:col-span-6',
      { 'lg:-order-1': number % 2 !== 0 }
    )}>
      <SliderCard slides={slides} showNavbar/>
    </div>
  </div>
);

export default Block;