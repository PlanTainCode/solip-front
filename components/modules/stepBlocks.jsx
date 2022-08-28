import SliderCard from '../modules/sliderCard';
import cn from 'classnames';

export default function StepBlocks({blocks}) {
  const getDesignNumber = (number) => {
    const zero = (number < 10) ? '0' : '';
    return zero + number + '.';
  };

  const Block = ({ title, text, slides, number }) => (
    <div className="lg:grid grid-cols-12 gap-x-10">
      <div className="pb-8 lg:col-span-6 lg:flex lg:items-center lg:pb-16">
        <div className="pr-10">
          <p className="t-display text-green">{getDesignNumber(number)}</p>
          {title && <p className="t-h2">{title}</p>}
          {text && <p className='paragraph t-24 mt-5 lg:mt-6'>{text}</p>}
        </div>
      </div>

      <div className={cn(
        'lg:col-span-6',
        { 'lg:-order-1': number % 2 !== 0 }
      )}>
        <SliderCard slides={slides} showNavbar showDots/>
      </div>
    </div>
  );

  return (
    <div className="space-y-12 lg:-space-y-16">
      {blocks.map(({title, text, slides}, index) => (
        <Block key={title} title={title} text={text} slides={slides} number={index + 1} />
      ))}
    </div>
  );
}