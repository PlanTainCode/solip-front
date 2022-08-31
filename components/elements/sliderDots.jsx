import cn from 'classnames';

export default function SliderDots({currentNumber = 1, countAllSlides = 1}) {
  const dots = Array.from({length: countAllSlides});

  return (
    <div className="flex justify-center mt-4 lg:mt-6">
      {dots.map((_, index) => (
        <div key={index} className={cn(
          'w-2 h-2 mx-1 rounded-full border border-green',
          {'bg-green': index + 1 === currentNumber}
        )}></div>
      ))}
    </div>
  );
}