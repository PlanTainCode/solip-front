export default function SliderNavbar({currentNumber = 1, countAllSlides = 1}) {
  const widthInPercent = 1 / countAllSlides * 100;
  const offsetInPercent = (currentNumber - 1) * 100;

  return (
    <div className="absolute left-0 top-10 right-0 z-10 border-t-2 border-silver lg:top-12">
      <div
        className="h-2 bg-silver transition-transform duration-500 lg:h-2.5"
        style={{
          width: `${widthInPercent}%`,
          transform: `translate3d(${offsetInPercent}%, 0, 0)`,
        }}
      ></div>
    </div>
  );
}