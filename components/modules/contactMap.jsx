export default function ContactMap() {
  return (
    <div className="relative">
      <div className="h-60 rounded-3xl bg-grey lg:h-100"></div>
      <div className="mt-5 lg:absolute lg:right-0 lg:bottom-0 lg:rounded-tl-3xl lg:bg-silver lg:p-8 lg:w-112.5">
        <p className="t-h2">Solip AB</p>
        <div className="t-24 space-y-3 mt-4 lg:mt-3">
          <p>Södergatan 76, 252 25 Helsingborg, Швеция</p>
          <p>+46 73 542 76 22</p>
          <p>info@solipbygg.se</p>
          <p>пн-пт 10:00-18:00</p>
        </div>
      </div>
    </div>
  );
}